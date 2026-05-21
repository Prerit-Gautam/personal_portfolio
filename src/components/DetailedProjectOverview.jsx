import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'RaktaSewa',
    subtitle: 'Backend, FrontEnd, DevOps',
    description: 'RaktaSewa is a dedicated platform designed to help users quickly find the nearest blood banks that have a specific blood group in stock.',
    achievements: [
      'Engineered a frictionless user experience by completely removing the need for user authentication, allowing instant access during emergencies.',
      "Integrated Google Play Services Location API to seamlessly extract the user's latitude and longitude upon blood group selection.",
      'Developed a Spring-based backend to handle location data and process real-time geospatial requests.',
      'Implemented the Haversine formula within a native SQL query to efficiently calculate the distance between the user and all available blood banks.',
      'Optimized the query pipeline to filter by blood group availability and sort by proximity, delivering the top 10 nearest results.',
      'Designed a responsive frontend to cleanly display the resulting blood banks, significantly reducing the time taken to find critical resources.'
    ]
  },
  {
    title: 'Pahilo Pahila',
    subtitle: 'Backend Engineer (100xNepal Hackathon)',
    description: (
      <span>
        Pahilo Pahila is a comprehensive platform connecting tourists, guides, and hotel services. This application was built in a sleep-deprived 24-hour sprint during the 100xNepal invitational hackathon (competing against 30 teams across Nepal).
        <br /><br />
        <strong>Make sure that the backend is active before using the frontend :)<br></br></strong>
        <strong>Live Demo:</strong> <a href="https://pahilopailaapp.vercel.app/" target="_blank" rel="noreferrer" className="text-primary hover:underline">pahilopailaapp.vercel.app</a>
        <br />
        <strong>Backend API:</strong> <a href="https://pahilopaila-backend-demo.onrender.com/pahilopaila" target="_blank" rel="noreferrer" className="text-primary hover:underline">pahilopaila-backend-demo.onrender.com</a>
        <span className="text-sm text-textSecondary ml-2 block mt-1">(Note: Render free tier may require 50 seconds to spin up, showing a white-label error page initially.)</span>
      </span>
    ),
    achievements: [
      'Developed an AI-driven guide booking system where tourists describe their desired experience, and the AI accurately suggests the best locations to visit.',
      'Built a fully functional hotel and guide reservation system allowing users to book services dynamically based on their AI-suggested region.',
      'Architected the backend to handle complex relational data between tourists, guides, locations, and hotel inventories.',
      'Successfully delivered a working, deployed prototype within a strict 24-hour deadline under high-pressure hackathon conditions.',
      'Deployed the frontend to Vercel and the backend to Render, ensuring the application was live for judging and public demonstration.'
    ]
  }
];

const DetailedProjectOverview = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto border-t border-surface">
      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-1">{project.title}</h3>
            <div className="text-primary font-medium mb-6">{project.subtitle}</div>
            <div className="text-textSecondary text-lg mb-8 leading-relaxed">
              {project.description}
            </div>
            <ul className="space-y-4">
              {project.achievements.map((achievement, idx) => (
                <li key={idx} className="flex gap-4 items-start group">
                  <span className="text-primary mt-1 font-mono group-hover:translate-x-1 transition-transform">→</span>
                  <span className="text-textSecondary leading-relaxed group-hover:text-textPrimary transition-colors">{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DetailedProjectOverview;
