import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { userId, productIds } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: productIds.map((id) => ({
      price_data: {
        currency: "usd",
        product_data: { name: id },
        unit_amount: 1000, // $10.00 mock
      },
      quantity: 1,
    })),
    mode: "payment",
    success_url: "http://localhost:3000/downloads",
    cancel_url: "http://localhost:3000/cart",
    metadata: {
      userId,
      productIds: productIds.join(","),
    },
  });

  res.json({ id: session.id });
}