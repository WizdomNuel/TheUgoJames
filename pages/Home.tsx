import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { PROJECTS } from '../constants';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden pt-24 md:pt-32">
        
        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
          <FadeIn delay="0">
             <div className="flex justify-center mb-8 mt-8 md:mt-12">
                <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-gray-300 uppercase">Visionary. Builder. Contrarian.</span>
                </div>
             </div>
          </FadeIn>

          <FadeIn delay="100">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.05] md:leading-[0.95] mb-10 text-center drop-shadow-2xl">
              Building systems for<br/> the next generation.
            </h1>
          </FadeIn>
          
          <FadeIn delay="200">
            <div className="flex flex-col items-center text-center">
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light mb-12 drop-shadow-lg">
                  Operating at the intersection of technology, entrepreneurship, and youth development. Creating value through disciplined innovation and purpose-driven leadership.
                </p>
                
                <div className="flex flex-col md:flex-row gap-5 w-full md:w-auto">
                    <Link to="/work" className="bg-white text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-200 transition-colors w-full md:w-auto text-center min-w-[180px]">
                        Explore Ventures
                    </Link>
                    <Link to="/writing" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 hover:border-white/40 transition-all w-full md:w-auto text-center min-w-[180px]">
                        Read My Thinking
                    </Link>
                </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-600 text-[10px] tracking-[0.2em] uppercase animate-pulse">
            Scroll
        </div>
      </section>

      {/* Vision / Systems Section */}
      <section className="py-24 md:py-32 border-t border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left Text */}
                <div className="order-2 lg:order-1">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                            Authority without ego.<br/>
                            Innovation with purpose.
                        </h2>
                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
                            <p>
                                In a world of noise, I believe in the power of clarity and discipline. My work is grounded in the belief that technology is a tool for multiplication, and entrepreneurship is a vehicle for stewardship.
                            </p>
                            <p>
                                Whether building software systems or mentoring the next generation of leaders, my approach is the same: rigor, excellence, and a long-term view.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Right Card */}
                <div className="order-1 lg:order-2 h-full flex items-center justify-center">
                    <FadeIn delay="200" className="w-full">
                        <div className="relative w-full aspect-square md:aspect-[5/4] bg-[#0a0a0a]/50 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden flex flex-col justify-end group hover:border-white/20 transition-colors duration-500">
                            {/* Grid Pattern Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                            
                            {/* Decorative Corner Icon */}
                            <div className="absolute top-6 right-6 text-white/20 group-hover:text-white/40 transition-colors duration-500">
                                <ArrowUpRight size={24} />
                            </div>

                             {/* Decorative Label */}
                             <div className="absolute top-6 left-6 text-xs text-white/20 font-mono tracking-widest uppercase">
                                01 / Philosophy
                             </div>
                            
                            {/* Content inside card */}
                            <div className="relative z-10 px-6 pb-2">
                                <h3 className="text-[18vw] md:text-[100px] lg:text-[120px] font-bold tracking-tighter text-white/5 leading-none select-none group-hover:text-white/10 transition-colors duration-500">
                                    SYSTEMS
                                </h3>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-black/40 backdrop-blur-sm border-t border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <FadeIn>
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase block mb-4">Selected Work</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Selected Ventures</h2>
                    </div>
                    <Link to="/about" className="text-white flex items-center gap-2 hover:opacity-70 transition-opacity mt-6 md:mt-0">
                        More about my journey <ArrowRight size={18} />
                    </Link>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PROJECTS.map((project, i) => (
                    <FadeIn key={project.id} delay={i === 1 ? '100' : i === 2 ? '200' : '0'}>
                        <div className="group bg-brand-gray/80 backdrop-blur-md p-8 h-[400px] flex flex-col justify-between relative overflow-hidden hover:bg-[#222] transition-colors duration-500 border border-white/5">
                             {/* Top */}
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono text-gray-500">0{i + 1} / {project.category.toUpperCase()}</span>
                                <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" size={20} />
                            </div>

                            {/* Bottom */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
             <div className="mt-12 text-center md:text-right">
                <Link to="/work" className="inline-flex items-center px-6 py-3 border border-white/20 rounded-full text-white text-sm hover:bg-white hover:text-black transition-all">
                    View All Ventures
                </Link>
            </div>
        </div>
      </section>

      {/* Ministry Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                {/* Visual Side */}
                <FadeIn>
                    <div className="aspect-square relative rounded-full overflow-hidden bg-gradient-to-tr from-yellow-900/20 via-brand-dark/50 to-brand-black/50 border border-white/5 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-50"></div>
                        <div className="w-2/3 h-1 bg-gradient-to-r from-transparent via-amber-700/50 to-transparent rotate-45 blur-xl"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                    </div>
                </FadeIn>

                {/* Content Side */}
                <FadeIn delay="100">
                    <div>
                        <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase block mb-6">Ministry & Impact</span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
                            Faith is the foundation of true leadership.
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed mb-10">
                            I don't separate my work from my worldview. My faith informs how I build teams, how I steward resources, and how I define success.
                        </p>
                        <Link to="/ministry" className="bg-white text-black px-8 py-4 rounded-full font-medium inline-block hover:bg-gray-200 transition-colors">
                            Explore Ministry
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 flex flex-col items-center text-center px-6">
        <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
                Let's build the future<br/> together.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mb-12">
                Whether you're looking for a partner, a speaker, or a mentor, I'm always open to meaningful conversations.
            </p>
            <Link to="/contact" className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300">
                Get in Touch
            </Link>
        </FadeIn>
      </section>
    </>
  );
};