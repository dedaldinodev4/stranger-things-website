import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Character from "../components/Character";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Gallery from "../components/Gallery";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stranger Things</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
      </Head>
      <Hero heading="Stranger Things" message="Todos olham pra mim como se eu fosse um monstro." />
      {/* <Slider slides={SliderData} /> */}
      {/* <Character /> */}
      <Gallery />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
