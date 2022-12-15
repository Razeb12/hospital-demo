import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Carousel from "../components/Swiper";
import HeroContainers from "../components/Home/HeroContainers";
import HeroFeatures from "../components/Home/HeroFeatures";
import HomeWelcome from "../components/Home/HomeWelcome";
import HomeTreatment from "../components/Home/HomeTreatment";
import HomeBabies from "../components/Home/HomeBabies";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gynescope Specialist Hospital - Excelling in care</title>
        <meta
          name="description"
          content="We provide Assistance in state-of-the-art Reproductive Technology and experienced team of professionals, with optimal success rates in a congenial."
        />
        <meta hid="og:type" property="og:type" content="website" />
        <meta
          hid="apple-mobile-web-app-title"
          property="apple-mobile-web-app-title"
          content="Gynescope Specialist Hospital"
        />
        <meta
          hid="og:title"
          property="og:title"
          content="Gynescope Specialist Hospital"
        />
        <meta
          hid="og:description"
          property="og:description"
          content="We provide Assistance in state-of-the-art Reproductive Technology and experienced team of professionals."
        />
        <meta
          hid="og:url"
          property="og:url"
          content="https://gynescope.com.ng"
        />
        {/* <meta
          hid="og:image"
          property="og:image"
          content="https://d33wubrfki0l68.cloudfront.net/f602ffaa7d56bbd9f27db7a08a0a7068462149e3/143f6/_nuxt/img/f9c805f.png"
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Carousel />
        <HeroContainers />
        <HeroFeatures />
        <HomeWelcome />
        <HomeTreatment />
        <HomeBabies />
      </main>
    </div>
  );
}
