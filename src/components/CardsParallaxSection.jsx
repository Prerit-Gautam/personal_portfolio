import React, { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import ParallaxCard from './ui/ParallaxCard';

import pp1 from '../assets/pahilo_pahila_1.png';
import pp2 from '../assets/pahilo_pahila_2.png';
import pp3 from '../assets/pahilo_pahila_3.png';
import pp4 from '../assets/pahilo_pahila_4.png';
import pp5 from '../assets/pahilo_pahila_5.png';
import pp6 from '../assets/pahilo_pahila_6.png';
import pp7 from '../assets/pahilo_pahila_7.png';
import pp8 from '../assets/pahilo_pahila_8.png';

const pahiloPahilaImages = [
  { src: pp1, alt: 'Pahilo Pahila 1' },
  { src: pp2, alt: 'Pahilo Pahila 2' },
  { src: pp3, alt: 'Pahilo Pahila 3' },
  { src: pp4, alt: 'Pahilo Pahila 4' },
  { src: pp5, alt: 'Pahilo Pahila 5' },
  { src: pp6, alt: 'Pahilo Pahila 6' },
  { src: pp7, alt: 'Pahilo Pahila 7' },
  { src: pp8, alt: 'Pahilo Pahila 8' },
];

const projectsData = [
  {
    title: 'RaktaSewa',
    tag: 'personal-project',
    subtitle: 'Backend, FrontEnd, DevOps',
    description: 'RaktaSewa is a dedicated platform designed to help users quickly find the nearest blood banks that have a specific blood group in stock.',
    achievements: [
      'Engineered a frictionless user experience by completely removing the need for user authentication.',
      "Integrated Google Play Services Location API to seamlessly extract the user's latitude and longitude.",
      'Developed a Spring-based backend to handle location data and process real-time geospatial requests.',
      'Implemented the Haversine formula to efficiently calculate the distance between the user and blood banks.',
      'Optimized the query pipeline to filter by blood group availability and sort by proximity.'
    ],
    githubUrl: 'https://github.com/Prerit-Gautam',
    color: '#1a1a1a'
  },
  {
    title: 'Pahilo Pahila',
    tag: 'group-project',
    subtitle: 'Backend Engineer (100xNepal Hackathon)',
    description: 'A comprehensive platform connecting tourists, guides, and hotel services. Built in a sleep-deprived 24-hour sprint during the 100xNepal invitational hackathon.',
    achievements: [
      'Developed an AI-driven guide booking system where tourists describe their desired experience.',
      'Built a fully functional hotel and guide reservation system.',
      'Architected the backend to handle complex relational data between tourists, guides, and locations.',
      'Successfully delivered a working, deployed prototype within a strict 24-hour deadline.',
      'Deployed the frontend to Vercel and the backend to Render.'
    ],
    githubUrl: 'https://github.com/Prerit-Gautam',
    color: '#222222',
    images: pahiloPahilaImages
  },
  {
    title: 'Typ Social',
    tag: 'personal-project',
    subtitle: 'Java, Firebase',
    description: 'A fully functional social media application built from scratch with a focus on real-time data flow.',
    achievements: [
      'Built a complete authentication flow using Firebase Authentication.',
      'Implemented real-time database updates for posts, likes, and comments.',
      'Designed a user-friendly interface for browsing and interacting with content.'
    ],
    githubUrl: 'https://github.com/Prerit-Gautam',
    color: '#1a1a1a',
    hidePhone: true
  },
  {
    title: 'Typ Mask',
    tag: 'personal-project',
    subtitle: 'Java, Firebase (Reddit-like)',
    description: 'A social media app that allows anyone to post things anonymously without having to create an account.',
    achievements: [
      'Designed an anonymous posting system to encourage free expression.',
      'Leveraged Firebase to handle unstructured data securely without user accounts.',
      'Created a threaded comment system to facilitate discussions.'
    ],
    githubUrl: 'https://github.com/Prerit-Gautam',
    color: '#222222',
    hidePhone: true
  }
];

const CardsParallaxSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} className="relative mt-20 mb-20">
      <div className="text-center py-12 sticky top-0 z-0 opacity-50">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Selected projects.</h2>
        <p className="text-textSecondary">Scroll down to explore the archive</p>
      </div>

      <div className="relative z-10 w-full px-4">
        {projectsData.map((project, i) => {
          const targetScale = 1 - ((projectsData.length - i) * 0.05);
          return (
            <ParallaxCard
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CardsParallaxSection;
