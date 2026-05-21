import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

import img1 from '@/assets/1.png';
import img2 from '@/assets/2.png';
import img3 from '@/assets/3.png';
import img4 from '@/assets/4.png';
import img5 from '@/assets/5.png';
import img6 from '@/assets/6.png';
import img7 from '@/assets/7.png';
import img8 from '@/assets/8.png';

const projects = [
  {
    title: 'Raktasewa',
    tag: 'personal-project',
    description: 'A dedicated platform that connects users to the nearest 10 blood banks that have the required blood type.',
    link: '#'
  },

  {
    title: 'Typ Social',
    tag: 'personal-project',
    description: 'A fully functional social media app made with java and firebase.',
    link: '#'
  },

  {
    title: 'Pahilo Pahila',
    tag: 'group-project',
    description: 'A guide booking system meant to aid tourists and guides. User describes the location and the AI suggests a place to visit based on the description. User can then book hotels and tourists in that region.',
    link: '#'
  },
  {
    title: 'Typ Mask',
    tag: 'personal-project',
    description: 'A social media app that allows anyone to post things anonymously without having to create account. Made with java and firebase (Kinda reddit)',
    link: '#'
  }
];

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

const ProjectsSection = () => {

  const projectCards = projects.map((project, index) => (
    <div
      key={index}
      className={`flex flex-col justify-between bg-surface border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-colors group shadow-xl w-[70vw] md:w-[350px] ${index === 0 ? 'h-[400px]' : 'h-[300px]'}`}
    >
      <div>
        <span className="inline-block px-3 py-1 rounded-full bg-background border border-gray-800 text-xs font-mono text-textSecondary mb-4">
          {project.tag}
        </span>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-sm text-textSecondary leading-relaxed line-clamp-4">
          {project.description}
        </p>
      </div>
      {index === 0 && (
        <a href="#call-my-doctor" className="flex items-center gap-1 font-medium text-sm text-textPrimary group-hover:text-primary transition-colors">
          View case study <ArrowRight size={16} />
        </a>
      )}
    </div>
  ));



  return (
    <section className="relative min-h-screen">
      <div className="text-center py-24">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Selected projects.</h2>
        <p className="text-textSecondary">Scroll down to explore the archive</p>
      </div>

      <ZoomParallax items={projectCards} />

      <div id="call-my-doctor" className="min-h-screen flex flex-col items-center justify-center py-20 bg-background relative overflow-hidden">

        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-textPrimary">RaktaSewa</h2>
          <p className="text-textSecondary text-lg flex items-center justify-center gap-2">
            Scroll leftwards to see other screens <ArrowRight size={18} className="animate-pulse text-primary" />
          </p>
        </div>

        {/* Mobile Phone Mockup */}
        <div className="relative z-10 mx-auto w-[300px] h-[600px] sm:w-[350px] sm:h-[700px] bg-surface rounded-[3rem] border-[8px] border-gray-900 shadow-2xl shadow-primary/20 overflow-hidden ring-1 ring-white/10">

          {/* Notch / Dynamic Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-20 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-black/50 border border-white/10 ml-12"></div>
          </div>

          {/* Slider Container */}
          <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {stockImages.map((image, idx) => (
              <div key={idx} className="min-w-full h-full snap-center relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Paging dots */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
                  <div className="flex gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                    {stockImages.map((_, dotIdx) => (
                      <div key={dotIdx} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === dotIdx ? 'bg-primary' : 'bg-white/30'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Home indicator (bottom bar) */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
