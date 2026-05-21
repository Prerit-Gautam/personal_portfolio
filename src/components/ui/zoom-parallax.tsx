'use client';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface ZoomParallaxProps {
  /** Array of ReactNodes (e.g. project cards) to be displayed in the parallax effect */
  items: React.ReactNode[];
}

export function ZoomParallax({ items }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scaleCenter = useTransform(smoothProgress, [0, 1], [1, 1.4]);
  const scaleOuter1 = useTransform(smoothProgress, [0, 1], [1, 4]);
  const scaleOuter2 = useTransform(smoothProgress, [0, 1], [1, 5]);
  const scaleOuter3 = useTransform(smoothProgress, [0, 1], [1, 6]);
  const scaleOuter4 = useTransform(smoothProgress, [0, 1], [1, 8]);
  const scaleOuter5 = useTransform(smoothProgress, [0, 1], [1, 9]);

  const scales = [scaleCenter, scaleOuter1, scaleOuter2, scaleOuter3, scaleOuter2, scaleOuter4, scaleOuter5];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {items.map((item, index) => {
          const scale = scales[index % scales.length];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={`absolute top-0 flex h-full w-full items-center justify-center ${
                index === 0 ? 'z-50' : 'z-10'
              } ${
                index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw]' : ''
              } ${
                index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[30vw]' : ''
              } ${
                index === 3 ? '[&>div]:!left-[30vw]' : ''
              } ${
                index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw]' : ''
              } ${
                index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[27.5vw]' : ''
              } ${
                index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[30vw]' : ''
              }`}
            >
              <div className="relative pointer-events-auto">
                {item}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
