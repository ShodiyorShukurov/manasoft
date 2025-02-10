import * as React from 'react';
import {
  motion,
  useMotionTemplate,
  useTransform,
  useTime,
} from 'framer-motion';

const InfiniteCarousel = ({ loopDuration = 15000, children, ...otherProps }) => {
  const time = useTime();
  const progress = useTransform(time, (t) => (t % loopDuration) / loopDuration);
  const percentage = useTransform(progress, (t) => t * 100);
  const translateX = useMotionTemplate`-${percentage}%`;

  return (
    <div
      {...otherProps}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...otherProps.style,
      }}
    >
      <motion.div style={{ translateX, width: 'max-content' }}>
        <div>{children}</div>
        <div
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: '100%',
            top: 0,
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
