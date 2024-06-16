import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
export default function App({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>Immersive Shopping Mall</title>
      <link rel="icon" href="/icons/favicon.ico" />
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}
