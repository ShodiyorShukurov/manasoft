// import * as React from 'react';
// import {
//   motion,
//   useMotionTemplate,
//   useTransform,
//   useTime,
// } from 'framer-motion';

// const InfiniteCarousel = ({ loopDuration = 15000, children, ...otherProps }) => {
//   const time = useTime();
//   const progress = useTransform(time, (t) => (t % loopDuration) / loopDuration);
//   const percentage = useTransform(progress, (t) => t * 100);
//   const translateX = useMotionTemplate`-${percentage}%`;

//   return (
//     <div
//       {...otherProps}
//       className="relative overflow-hidden w-full"
//       style={{ ...otherProps.style }}
//     >
//       <motion.div style={{ translateX, display: 'flex', width: 'max-content' }}>
//         {children}
//         <div className="absolute top-0 left-full h-full w-full">{children}</div>
//       </motion.div>
//     </div>
//   );
// };

// export default InfiniteCarousel;

import React from 'react';
import { motion } from 'framer-motion';

const InfiniteCarousel = () => {
  const list = ['Foodies', 'globetrot', 'FunHub', 'healthify', 'chatter'];
  return (
    <div>
      <div className="flex my-gradient">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="flex flex-shrink-0"
        >
          {list.map((item, index) => {
            return (
              <p className="text-white h-20 w-56 pr-20" key={index}>
                {item}
              </p>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="flex flex-shrink-0"
        >
          {list.map((item, index) => {
            return (
              <p className="text-white h-20 w-56 pr-20" key={index}>
                {item}
              </p>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
