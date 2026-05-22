import React, { useRef } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';
import img8 from '../../assets/8.png';

const stockImages = [
  { src: img1, alt: 'Project view 1' },
  { src: img2, alt: 'Project view 2' },
  { src: img3, alt: 'Project view 3' },
  { src: img4, alt: 'Project view 4' },
  { src: img5, alt: 'Project view 5' },
  { src: img6, alt: 'Project view 6' },
  { src: img7, alt: 'Project view 7' },
  { src: img8, alt: 'Project view 8' },
];

const ParallaxCard = ({ i, title, subtitle, tag, description, achievements, githubUrl, color, progress, range, targetScale, images }) => {
  const container = useRef(null);

  // Scale the entire card down as we scroll past it
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className="flex flex-col md:flex-row relative w-[90vw] md:w-[1000px] h-[85vh] md:h-[650px] rounded-3xl p-6 md:p-10 transform-origin-top shadow-2xl border border-white/5"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`
        }}
      >
        {/* Left Content Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-between h-full pr-0 md:pr-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div>
            <span className="inline-block px-3 py-1 rounded-full border border-primary/20 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              {tag.replace('-', ' ')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-textPrimary">{title}</h2>
            <div className="text-primary font-medium mb-6">{subtitle}</div>

            <p className="text-textSecondary text-lg mb-8 leading-relaxed">
              {description}
            </p>

            {achievements && achievements.length > 0 && (
              <ul className="space-y-4 mb-8">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-4 items-start group">
                    <span className="text-primary mt-1 font-mono group-hover:translate-x-1 transition-transform text-sm">→</span>
                    <span className="text-textSecondary leading-relaxed group-hover:text-textPrimary transition-colors text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-auto pt-4 flex gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 w-fit"
            >
              GitHub Repo <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Phone Mockup Area */}
        <div className="w-full md:w-1/2 h-full hidden md:flex items-center justify-center relative mt-8 md:mt-0">
          {/* Background ambient light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>

          {/* Mobile Phone Mockup */}
          <div className="relative z-10 w-[280px] h-[550px] bg-surface rounded-[2.5rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/10 shrink-0">
            {/* Notch / Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-20 flex justify-center items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-black/50 border border-white/10 ml-8"></div>
            </div>

            {/* Slider Container */}
            <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {(images || stockImages).map((image, idx) => (
                <div key={idx} className="min-w-full h-full snap-center relative">
                  <img
                    src={image.src}
                    alt={image.alt || `Project view ${idx + 1}`}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                  {/* Paging dots */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
                    <div className="flex gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      {(images || stockImages).map((_, dotIdx) => (
                        <div key={dotIdx} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === dotIdx ? 'bg-primary' : 'bg-white/30'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Home indicator (bottom bar) */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full z-20 pointer-events-none"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxCard;
