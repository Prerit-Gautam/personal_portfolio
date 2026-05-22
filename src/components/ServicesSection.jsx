import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Backend systems & APIs',
    tech: 'Java, Spring'
  },
  {
    num: '02',
    title: 'Realtime apps',
    tech: 'Chat, live data'
  },
  {
    num: '03',
    title: 'DevOps & deployments',
    tech: 'Docker, Linux'
  },
  {
    num: '04',
    title: 'Full-stack MVPs',
    tech: 'Idea → shipped in weeks'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        {services.map((service, index) => (
          <div key={index} className="flex gap-6 py-6 border-b border-gray-800 last:border-0 group hover:border-primary/50 transition-colors cursor-pointer">
            <div className="text-sm font-mono text-textSecondary mt-1 group-hover:text-primary transition-colors">
              {service.num}
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1 text-textPrimary group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-textSecondary">{service.tech}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
