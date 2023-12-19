import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}


export const FadeInWhenVisible = ({ children }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}