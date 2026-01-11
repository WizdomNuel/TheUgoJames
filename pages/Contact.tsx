import React from 'react';
import { FadeIn } from '../components/FadeIn';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="space-y-12">
            <FadeIn>
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-6 block">Contact</span>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-8">
                  Start a conversation.
                </h1>
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md">
                  I am always looking for opportunities to collaborate with like-minded individuals and organizations.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay="100">
              <div className="space-y-8">
                <div>
                  <h3 className="text-white font-bold mb-2">General Inquiries</h3>
                  <a href="mailto:info@theugojames.com" className="text-white hover:text-gray-300 transition-colors text-lg underline decoration-white/20 underline-offset-4">
                    info@theugojames.com
                  </a>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2">Speaking & Press</h3>
                  <a href="mailto:info@theugojames.com" className="text-white hover:text-gray-300 transition-colors text-lg underline decoration-white/20 underline-offset-4">
                    info@theugojames.com
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Form */}
          <FadeIn delay="200">
            <div className="bg-brand-dark/80 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 block">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-[#111]/80 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 block">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-[#111]/80 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-400 block">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full bg-[#111]/80 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-gray-600"
                    placeholder="Speaking Inquiry..."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400 block">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full bg-[#111]/80 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors resize-none placeholder:text-gray-600"
                    placeholder="How can we work together?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-4 rounded-sm hover:bg-gray-200 transition-colors uppercase tracking-wider text-sm"
                >
                  Send Message
                </button>

              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
};