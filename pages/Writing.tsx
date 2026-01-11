import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { ARTICLES } from '../constants';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Writing: React.FC = () => {
  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-24 md:py-32">
        
        {/* Header */}
        <FadeIn>
          <div className="mb-24">
            <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-6 block">Insights</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              Thinking out loud.
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
              My two bits on the ideas shaping technology, culture, and this generation of teenagers.
            </p>
          </div>
        </FadeIn>

        {/* Article List */}
        <div className="flex flex-col space-y-16 md:space-y-20">
            {ARTICLES.map((article) => (
                <FadeIn key={article.id} delay="100">
                    <article className="group cursor-pointer">
                        {/* Meta */}
                        <div className="flex items-center gap-3 text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-4 font-mono">
                            <span>{article.date}</span>
                            <span className="text-gray-700">•</span>
                            <span className="text-gray-300 group-hover:text-white transition-colors">{article.category}</span>
                            <span className="text-gray-700">•</span>
                            <span>{article.readTime}</span>
                        </div>

                        {/* Content */}
                        <div className="max-w-3xl">
                             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                                {article.title}
                             </h2>
                             <p className="text-lg text-gray-400 font-light leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                                {article.excerpt}
                             </p>
                             
                             <div className="flex items-center text-white text-sm font-semibold tracking-wide group/link">
                                <span className="mr-2 group-hover:mr-4 transition-all duration-300">Read Article</span>
                                <ArrowRight size={16} className="text-white group-hover:text-gray-300" />
                             </div>
                        </div>
                    </article>
                    {/* Divider */}
                    <div className="h-px bg-white/5 mt-16 md:mt-20 w-full"></div>
                </FadeIn>
            ))}
        </div>

        {/* Load More Button */}
        <FadeIn delay="200">
             <div className="mt-20">
                <button className="px-8 py-4 border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 rounded-sm uppercase tracking-wider">
                    Load More Articles
                </button>
             </div>
        </FadeIn>

        {/* Newsletter Section */}
        <FadeIn delay="300">
             <div className="mt-32 pt-20 border-t border-white/5">
                <div className="bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-sm">
                    <div className="text-center mb-10">
                        <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4 block">Newsletter</span>
                        <h2 className="text-3xl font-bold text-white mb-4">Join the Conversation</h2>
                        <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
                            Get the latest insights on technology, faith, and leadership delivered to your inbox.
                        </p>
                    </div>

                    <form 
                        className="space-y-6 max-w-2xl mx-auto"
                        action="mailto:info@theugojames.com"
                        method="post"
                        encType="text/plain"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400 block">Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-[#111]/80 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400 block">Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-[#111]/80 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="interest" className="text-sm font-medium text-gray-400 block">What are you most interested in?</label>
                            <div className="relative">
                                <select 
                                    id="interest"
                                    name="interest"
                                    required
                                    className="w-full bg-[#111]/80 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors appearance-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled className="bg-brand-black text-gray-500">What are you most interested in?</option>
                                    <option value="Technology & Entrepreneurship" className="bg-brand-black">Technology & Entrepreneurship</option>
                                    <option value="Teenagers, Growth & Formation" className="bg-brand-black">Teenagers, Growth & Formation</option>
                                    <option value="Both" className="bg-brand-black">Both</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                    <ChevronDown size={16} />
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-white text-black font-semibold py-4 rounded-sm hover:bg-gray-200 transition-colors uppercase tracking-wider text-sm"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
             </div>
        </FadeIn>

      </div>
    </div>
  );
};