import Stripe from "stripe";
import { buffer } from "micro";
import { adminDB } from "../../lib/firebaseAdmin";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const sig = req.headers["stripe-signature"];
  const buf = await buffer(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userId = session.metadata.userId;
    const productIds = session.metadata.productIds.split(",");

    await Promise.all(
      productIds.map((productId) =>
        adminDB.collection("purchases").add({
          userId,
          productId,
          created: new Date(),
        })
      )
    );
  }

  res.status(200).json({ received: true });
}