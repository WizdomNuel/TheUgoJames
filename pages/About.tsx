import React from 'react';
import { FadeIn } from '../components/FadeIn';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen text-white pt-20">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto py-24 md:py-32 flex flex-col items-center text-center">
        <FadeIn>
          <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-6 block">The Journey</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-10">
            Built for the long game.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
            My career has never been about chasing trends. It's about building enduring systems that create value, empower people, and glorify God.
          </p>
        </FadeIn>
      </section>

      {/* Main Content Split */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Image */}
          <div className="lg:sticky lg:top-32">
            <FadeIn>
                <div className="aspect-[3/4] w-full bg-brand-gray relative overflow-hidden rounded-sm shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                        alt="Portrait" 
                        className="w-full h-full object-cover filter grayscale contrast-125 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent"></div>
                </div>
            </FadeIn>
          </div>

          {/* Right Content */}
          <div className="space-y-24 lg:pt-12">
             <FadeIn delay="100">
                <h3 className="text-3xl font-bold text-white mb-6">From Code to Capital</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                   I started as a developer, fascinated by the logic and order of software. That discipline taught me how to break down complex problems into solvable components. Today, I apply that same systems thinking to business, investing, and leadership.
                </p>
             </FadeIn>

             <FadeIn delay="100">
                <h3 className="text-3xl font-bold text-white mb-6">Faith as a Foundation</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                   My faith isn't a compartment of my life; it is the operating system. It drives my commitment to excellence, integrity, and service. I believe that true leadership is about stewardship—managing resources, talent, and influence for a greater purpose.
                </p>
             </FadeIn>

             <FadeIn delay="100">
                <h3 className="text-3xl font-bold text-white mb-6">The Mission</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                   My goal is simple: to empower the next generation of African leaders to build world-class technology and businesses. We have the talent. We have the hunger. Now we need the systems and the mindset to win globally.
                </p>
             </FadeIn>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black/40 backdrop-blur-sm py-32 border-t border-white/5">
         <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
               <FadeIn delay="0">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4">15+</div>
                  <div className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Years Experience</div>
               </FadeIn>
               <FadeIn delay="100">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4">3</div>
                  <div className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Major Exits</div>
               </FadeIn>
               <FadeIn delay="200">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4">500+</div>
                  <div className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Founders Mentored</div>
               </FadeIn>
               <FadeIn delay="300">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4">10K+</div>
                  <div className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Lives Impacted</div>
               </FadeIn>
            </div>
         </div>
      </section>
    </div>
  );
};