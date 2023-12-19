import Image from "next/image";
import React from "react";

//* Images *//
import Img1 from '../../../assets/Gallery/10.png';
import Img2 from '../../../assets/seasons/S01.jpg';
import Img3 from '../../../assets/seasons/S03.jpg';
import Img4 from '../../../assets/seasons/S04.png';
import Img5 from '../../../assets/seasons/S05.jpg';

export const Session = () => {
  return (
    <div id="session" className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="text-slate-900 dark:text-white font-bold text-2xl p-4">Temporadas</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src={Img1}
            alt="/"
            layout="responsive"
            width="677"
            height="451"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={Img2}
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={Img3}
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={Img4}
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={Img5}
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};


