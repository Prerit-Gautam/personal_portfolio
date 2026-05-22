import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import preritImage from '../assets/prerit.png';
import { HandWrittenTitle } from './ui/hand-writing-text';

const HeroSection = () => {
  return (
    <section id="home" className="pt-40 pb-20 px-6 max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl md:w-2/3"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-textPrimary leading-tight mb-8">
            A full stack dev who builds <HandWrittenTitle title="scalable" /> and production-ready systems.
          </h1>


          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact" className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-accent transition-colors flex items-center gap-2">
              Let's talk <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/3 flex justify-center md:justify-end"
        >
          <img src={preritImage} alt="Prerit Gautam" className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-8 border-surface shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
