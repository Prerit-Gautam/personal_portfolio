import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'RaktaSewa',
    role: 'Backend, FrontEnd, DevOps',
    description: 'RaktaSewa is a platform that allows users to see a list of nearest blood banks with available blood group as stock',
    achievements: [
      'The app uses no authentication',
      "When the user selects the blood group, the user's, location is extracted using google play services location api (this gives the lattitude and longitude)",
      'The lattitude and longitude along with the blood group are sent to the spring backend.',
      'The backend runs an SQL query that calculates the nearest blood banks using harvesine formula',
      'The result of the query is the list of blood banks that have the required blood group in stock.',
      'The backend sends top 10 results to the frontend and the frontend displays the list of blood banks to the user.',
    ]
  },
  {
    company: 'Pahilo Pahila',
    role: 'Backend Engineer',
    description: 'Pahilo Pahila is an app that connects tourists, guides and hotel services. This app was built in 24 sleep deprived hours during 100xNepal invitational hackathon(30 teams across Nepal). Link: https://pahilopailaapp.vercel.app/. https://pahilopaila-backend-demo.onrender.com/pahilopaila make sure that the backend is active, you get a white label error page',
    achievements: [
      'Built real-time web integration using Golang and gRPC to stream data live to users, successfully reducing page load time from 3 seconds to 1 second for enhanced responsiveness.',
      'Developed a scalable real-time chat service using Gin and Gorilla WebSocket to enable live communication between users and vendors, integrating Redis Streams to manage message queues and ensure accurate delivery across virtual machines.',
      'Enhanced message delivery efficiency by using Redis Sets for offline message storage, which reduced average communication latency from 1.1 seconds to 200ms and supported horizontal scalability without connection bottlenecks.',
      'Optimized server-side performance with Go-based microservices to handle background processing and task queues concurrently, reducing server load times from 700ms to 300ms and improving overall user engagement.',
      'Engineered a high-performance web scraper using the Rod library to extract and integrate vendor data into the store database, enabling real-time visibility of changes to users.',
      'Refined API performance using a combination of Node.js and Go, leading to a reduction in average page load time from 500ms to 300ms.',
      'Improved data handling and query performance by tuning configurations in MongoDB and ClickHouse, achieving a 30% reduction in query overhead for large-scale data operations.'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto border-t border-surface">
      <div className="space-y-24">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-1">{exp.company}</h3>
            <div className="text-primary font-medium mb-6">{exp.role}</div>
            <p className="text-textSecondary text-lg mb-8 leading-relaxed">
              {exp.description}
            </p>
            <ul className="space-y-4">
              {exp.achievements.map((achievement, idx) => (
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

export default ExperienceSection;
