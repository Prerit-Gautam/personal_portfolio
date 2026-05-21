import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const techStack = [
  { category: 'Languages', items: 'Java, Kotlin, Python, Dart, JavaScript, C++' },
  { category: 'Frameworks', items: 'Jetpack Compose, Flutter, React, Kivy, KivyMD, Spring (Boot, Data JPA, Security)' },
  { category: 'Backend', items: 'Spring' },
  { category: 'OS', items: 'Windows, Linux (I used to use arch btw)' },
  { category: 'DataBase', items: 'MYSQL, Maria DB, PostgreSQL' },
  { category: 'DevOps', items: 'Docker , Linux' },
];

const AboutTechSection = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto border-t border-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tight">I care about TECH.</h2>
          <p className="text-textSecondary text-lg leading-relaxed">
            I'm a full stack developer who genuinely enjoys Application Development.
          </p>
          <p className="text-textSecondary text-lg leading-relaxed">
            I specialize in Java, Kotlin, Dart, and Javascript.
          </p>
          <p className="text-textSecondary text-lg leading-relaxed">
            Beyond development, I handle DevOps, optimized infrastructure, and reliable system performance. From backend logic to cloud architecture, I turn ideas into robust, production ready solutions.
          </p>
          <p className="text-textSecondary text-lg leading-relaxed">
            I also love to be engaged with the community and I am the Vice President of
            <span className="text-primary"><a href="https://www.codeyatranp.com/"> CodeYatraNP.</a></span>
          </p>
          <div className="pt-4 flex flex-wrap gap-6">
            <a href="#contact" className="text-primary font-medium flex items-center gap-1 hover:text-accent transition-colors">
              Get in touch <ArrowUpRight size={16} />
            </a>
            <a href="#projects" className="text-textPrimary font-medium hover:text-gray-300 transition-colors">
              See work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-surface p-8 rounded-2xl border border-gray-800"
        >
          <h3 className="text-xl font-semibold mb-6">Tech I reach for</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {techStack.map((tech, index) => (
              <div key={index}>
                <h4 className="text-sm text-textSecondary mb-1 font-medium">{tech.category}</h4>
                <p className="font-medium text-textPrimary">{tech.items}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTechSection;
