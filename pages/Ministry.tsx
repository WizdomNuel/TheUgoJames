import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Link } from 'react-router-dom';

export const Ministry: React.FC = () => {
  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-24 md:py-32">
        
        {/* Hero Section */}
        <FadeIn>
          <div className="text-center mb-24 md:mb-32">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
              The Royal Generation Teens
            </h1>
            <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed italic mb-6">
                "Let no one despise your youth, but be an example to the believers in word, in conduct, in love, in spirit, in faith, in purity."
                </p>
                <span className="text-sm font-bold tracking-[0.2em] text-gray-600 uppercase">1 Timothy 1:12</span>
            </div>
          </div>
        </FadeIn>

        {/* Content Section */}
        <FadeIn delay="100">
          <div className="mb-24 md:mb-32 max-w-4xl">
             <div className="border-l-2 border-white/10 pl-6 md:pl-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Leadership Starts Young
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                <p>
                    Teenage ministry, as we understand it now, is built on a very simple truth: teenagers are not meant to be entertained in church; they are meant to be empowered. We believe they should be taught the truth, but also entrusted with responsibility, and trained with real skills. Teenagers can lead, serve, and build with passion when they are taken seriously. When they are not intentionally engaged, the world will gladly give them direction of its own. Now, we wouldn't want that, would we? 🙂
                </p>
                <p>
                    By the grace of God, I serve as the Director of Royal Generation Teens Church under Love Ambassadors Ministries (LAM Global). What we believe, we actively practice; raising teenagers who disciple the nations through the life of the Spirit, excellence, and purity.
                </p>
                <p>
                    As this work grows, we are also building online and physical spaces for training, discipleship, and community, designed to help teenagers grow with clarity, purpose, and conviction.
                </p>
                </div>
            </div>
          </div>
        </FadeIn>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <FadeIn delay="200" className="h-full">
                <div className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-10 h-full flex flex-col items-start text-left hover:border-white/20 transition-colors duration-300 group">
                    <h3 className="text-2xl font-bold text-white mb-4">Speaking & Preaching</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                        I speak at conferences, churches, and corporate events on the intersection of faith, technology, and leadership.
                    </p>
                    <Link to="/contact" className="w-full py-4 rounded border border-white/20 text-white text-center font-medium group-hover:bg-white group-hover:text-black transition-all duration-300">
                        Request Booking
                    </Link>
                </div>
            </FadeIn>

            <FadeIn delay="300" className="h-full">
                <div className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-10 h-full flex flex-col items-start text-left hover:border-white/20 transition-colors duration-300 group">
                    <h3 className="text-2xl font-bold text-white mb-4">Mentorship</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                        Guiding young professionals to navigate their careers with integrity and purpose.
                    </p>
                    <Link to="/contact" className="w-full py-4 rounded border border-white/20 text-white text-center font-medium group-hover:bg-white group-hover:text-black transition-all duration-300">
                        Apply for Mentorship
                    </Link>
                </div>
            </FadeIn>
        </div>

      </div>
    </div>
  );
};