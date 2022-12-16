import Layout from "../components/layouts";
import "../styles/globals.css";
import { Nunito } from "@next/font/google";

const roboto = Nunito({
  weight: "500",
  subsets: ["latin"]
});
export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
