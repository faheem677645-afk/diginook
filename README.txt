DigiNook - Digital Product Store

Setup Instructions:
1. Install dependencies:
   npm install

2. Create a .env.local file in root with your Firebase and Stripe keys:
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   STRIPE_SECRET_KEY=...
   (etc.)

3. Run the development server:
   npm run dev

4. Visit: http://localhost:3000

This version includes:
- Firebase Auth & Firestore setup
- Stripe checkout & webhook example
- Blog, cart, downloads, SEO friendly structure
- Tailwind CSS UI