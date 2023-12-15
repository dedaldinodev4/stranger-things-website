import React from 'react'
import { motion } from 'framer-motion'

import Img1 from "../../assets/Gallery/1.jpg";
import Img2 from "../../assets/Gallery/2.jpg";
import Img3 from "../../assets/Gallery/3.jpg";
import Img4 from "../../assets/Gallery/4.jpg";
import Img5 from "../../assets/Gallery/5.jpg";
import Img6 from "../../assets/Gallery/6.jpg";
import Img7 from "../../assets/Gallery/7.jpg";
import Img8 from "../../assets/Gallery/8.jpg";
import Img10 from "../../assets/Gallery/10.png";
import Img11 from "../../assets/Gallery/11.jpg";
import Img12 from "../../assets/Gallery/12.jpg";
import Img13 from "../../assets/Gallery/13.jpeg";


import { GridImg } from './Gallery';


const Gallery = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-4'>
      <p className="text-slate-900 dark:text-white text-2xl font-bold pb-4">Galeria</p>
      <motion.div
        animate={{ x: 100 }}
        transition={{ type: "spring", stiffness: 100 }}

        className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <GridImg image={Img1} />
          </div>
          <div>
            <GridImg image={Img2} />
          </div>
          <div>
            <GridImg image={Img3} />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <GridImg image={Img4} />
          </div>
          <div>
            <GridImg image={Img5} />
          </div>
          <div>
            <GridImg image={Img6} />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <GridImg image={Img7} />
          </div>
          <div>
            <GridImg image={Img8} />
          </div>
          <div>
            <GridImg image={Img10} />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <GridImg image={Img12} />
          </div>
          <div>
            <GridImg image={Img11} />
          </div>
          <div>
            <GridImg image={Img13} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Gallery;