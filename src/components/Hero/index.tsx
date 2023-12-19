import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  heading: string;
  message: string;
}

export const Hero = ({ heading, message }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-banner">
      <div className="absolute top-0 left-0 right-0 bottom-0" />
      <div className="p-5 text-white z-[2] mt-[20rem] items-center justify-center">

        <motion.button
          
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="uppercase focus:outline-none text-white bg-[#BE2627] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Ver Trailer
        </motion.button>

      </div>
    </div>
  );
};


