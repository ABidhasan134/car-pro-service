'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import p1 from '../../../public/assets/images/patner/1.png';
import p2 from '../../../public/assets/images/patner/2.png';
import p4 from '../../../public/assets/images/patner/4.png';
import p6 from '../../../public/assets/images/patner/6.png';
import p3 from '../../../public/assets/images/patner/3.png';
import p5 from '../../../public/assets/images/patner/5.png';

const OurPatner = () => {
  const patnarImage = [p1, p2, p3, p4, p5, p6];

  return (
    <section className="container mx-auto mt-10 relative flex justify-evenly rounded-2xl p-6 mb-20 bg-gray-300">
      {patnarImage.map((img, index) => (
        <motion.div
          key={index}
          className="flex items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Image src={img} alt={`Partner ${index + 1}`} height={200} width={100} />
        </motion.div>
      ))}
    </section>
  );
};

export default OurPatner;
