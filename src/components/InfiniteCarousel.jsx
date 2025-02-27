import React from 'react';
import { motion } from 'framer-motion';

const InfiniteCarousel = ({ children }) => {
  return (
    <div className="container flex my-gradient mx-auto overflow-x-hidden">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: '-100%' }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="flex flex-shrink-0"
      >
        {children}
      </motion.div>

      <motion.div
        initial={{ x: '0' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="flex flex-shrink-0"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
