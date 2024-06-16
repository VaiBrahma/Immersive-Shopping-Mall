import "@/styles/globals.css";
import Header from "@/components/header.js";
import Footer from "@/components/footer.js";
export default function App({ Component, pageProps }) {
  return (
  <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}
