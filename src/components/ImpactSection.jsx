import React from 'react';
import { motion } from 'framer-motion';

const impacts = [
  {
    metric: 'Fr. Marshall D. Moran SJ Memorial Award',
    label: "St. Xavier's College",
    description: 'Awarded for having the highest overall grades throughout my highschool (Valedectorian equivalent).'
  },
  {
    metric: 'Gold Honor, National 2nd',
    label: 'IYMC',
    description: 'Ranked in the top 1% of the global participants and secured 2nd position Nationally.'
  },
  {
    metric: 'Finalist',
    label: 'National Maths Olympiad and National Olympiad of AI',
    description: 'Qualified for the final round of the National Olympiad of AI and Math Olympiad'
  }
];

const ImpactSection = () => {
  return (
    <section id="achievements" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Achievements.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {impacts.map((impact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-8 rounded-2xl ${index === 1 ? 'bg-primary text-white' : 'bg-surface border border-gray-800'}`}
          >
            <div className={`text-2xl font-bold mb-2 ${index === 1 ? 'text-white' : 'text-primary'}`}>
              {impact.metric}
            </div>
            <div className={`font-semibold text-lg mb-4 ${index === 1 ? 'text-white/90' : 'text-textPrimary'}`}>
              {impact.label}
            </div>
            <p className={`${index === 1 ? 'text-white/80' : 'text-textSecondary'} leading-relaxed`}>
              {impact.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
