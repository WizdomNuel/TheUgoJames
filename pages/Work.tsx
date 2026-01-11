import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Work: React.FC = () => {
  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        
        {/* Header */}
        <FadeIn>
          <div className="mb-20 md:mb-32">
            <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-6 block">Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 max-w-4xl leading-[0.95]">
              Building the infrastructure<br /> for tomorrow.
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
              A selection of ventures, investments, and initiatives I'm currently leading or supporting.
            </p>
          </div>
        </FadeIn>

        {/* Projects List */}
        <div className="flex flex-col space-y-4">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.id} delay="100">
              <div className="group relative bg-brand-dark/60 backdrop-blur-md border border-white/5 rounded-sm p-8 md:p-10 transition-all duration-500 hover:border-white/10 hover:bg-[#111]/80 overflow-hidden">
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Left Column: Meta & Title */}
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="px-2 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:bg-white/10 transition-colors">
                            {project.status}
                        </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2 transition-colors duration-300 text-white group-hover:text-gray-200">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500">{project.category}</span>
                  </div>

                  {/* Right Column: Description */}
                  <div className="md:col-span-6 flex items-center">
                    <p className="text-lg text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>
                  </div>

                  {/* Far Right: Action */}
                  <div className="md:col-span-1 flex justify-end items-center">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/30 group-hover:scale-110 transition-all duration-300">
                        <ArrowUpRight size={18} />
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
};