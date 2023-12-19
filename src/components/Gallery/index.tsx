import React from 'react'
import { motion } from 'framer-motion'

//* Images *//
import Img1 from "../../../assets/Gallery/1.jpg";
import Img2 from "../../../assets/Gallery/2.jpg";
import Img3 from "../../../assets/Gallery/3.jpg";
import Img4 from "../../../assets/Gallery/4.jpg";
import Img5 from "../../../assets/Gallery/5.jpg";
import Img6 from "../../../assets/Gallery/6.jpg";
import Img7 from "../../../assets/Gallery/7.jpg";
import Img8 from "../../../assets/Gallery/8.jpg";
import Img10 from "../../../assets/Gallery/10.png";
import Img11 from "../../../assets/Gallery/11.jpg";
import Img12 from "../../../assets/Gallery/12.jpg";
import Img13 from "../../../assets/Gallery/13.jpeg";


import { GalleryImage } from './GalleryImage';
import { slideIn } from '../../../src/utils/motion';


export const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1240px] mx-auto text-center py-4'>
      <p className="text-slate-900 dark:text-white text-2xl font-bold pb-4">Galeria</p>
      <motion.div
        initial={{
          opacity: 0,
          x: 50
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1 // Animation duration
          }
        }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <GalleryImage image={Img1} />
          </div>
          <div>
            <GalleryImage image={Img2} />
          </div>
          <div>
            <GalleryImage image={Img3} />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <GalleryImage image={Img4} />
          </div>
          <div>
            <GalleryImage image={Img5} />
          </div>
          <div>
            <GalleryImage image={Img6} />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <GalleryImage image={Img7} />
          </div>
          <div>
            <GalleryImage image={Img8} />
          </div>
          <div>
            <GalleryImage image={Img10} />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <GalleryImage image={Img12} />
          </div>
          <div>
            <GalleryImage image={Img11} />
          </div>
          <div>
            <GalleryImage image={Img13} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
