import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import {Character} from "../components";

import {Gallery} from "../components";
import { Session } from "../components";

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
      <Session />
    </>
  );
};

export default Home;
