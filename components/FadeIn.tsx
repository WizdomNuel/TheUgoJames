import React, { useRef, useEffect, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: '0' | '100' | '200' | '300';
  className?: string;
  threshold?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = '0', 
  className = '',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold });

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, [threshold]);

  const delayClass = delay === '0' ? '' : `delay-${delay}`;

  return (
    <div
      ref={domRef}
      className={`${className} ${isVisible ? `fade-in-up ${delayClass}` : 'opacity-0 translate-y-4'}`}
    >
      {children}
    </div>
  );
};