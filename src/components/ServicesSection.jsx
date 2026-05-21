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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-surface border border-primary/20 p-8 rounded-2xl"
        >
          <p className="text-xl leading-relaxed text-textPrimary">
            Latest focus: <span className="text-primary font-medium">AI based applications</span>
            <br></br>AI is the future of tech and I am here to make it more accessible to anyone. I am learning more about AI and ML and hope to apply it to my work in the future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-xs font-mono font-medium text-textSecondary mb-8 tracking-widest uppercase">
            Freelance · What I offer
          </div>

          <div className="flex flex-col">
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
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default ServicesSection;
