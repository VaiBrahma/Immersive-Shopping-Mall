import Stripe from 'stripe';

const stripe = new Stripe('your-secret-key-here');

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { paymentMethodId } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000, // amount in cents
        currency: 'usd',
        payment_method: paymentMethodId,
        confirm: true,
      });

      res.status(200).json({ success: true, paymentIntent });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end('Method Not Allowed');
  }
};
