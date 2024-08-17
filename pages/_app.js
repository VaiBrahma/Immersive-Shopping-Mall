import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
export default function App({ Component, pageProps }) {
  return (
    // <Elements stripe={stripePromise}>
      <SessionProvider>
        <Head>
          <title>Immersive Shopping Mall</title>
          <link rel="icon" href="/icons/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    // </Elements>
  )
}
