import type { NextPage } from "next";
import Head from "next/head";

//*   Components *//
import { Hero } from "../src/components";
import {Slider} from "../src/components";
import { SliderData } from "../src/components/Slider/data";
import { Character } from "../src/components";
import {Gallery} from "../src/components";
import { Session } from "../src/components";

import { FadeInWhenVisible } from '../src/hooks/motion'

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
      <FadeInWhenVisible>
        <Gallery />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Session /> 
      </FadeInWhenVisible>
    </>
  );
};

export default Home;
