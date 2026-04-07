"use client";

import { MapPin, Presentation, Trophy, BookOpen } from "lucide-react";
import { useEffect, useState, useRef } from "react";

function Counter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * (end - startValue) + startValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count}{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    { label: "Classrooms & Labs", value: 50, suffix: "+", icon: Presentation },
    { label: "Years of Excellence", value: 28, suffix: "+", icon: Trophy },
    { label: "CBSE Pass Rate", value: 100, suffix: "%", icon: BookOpen },
  ];

  return (
    <section className="relative py-20 bg-slate-900 border-y border-slate-800 my-10 lg:my-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
      </div>

      <div className="container-max relative z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center reveal reveal-up group" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="mb-4 p-3 rounded-full bg-slate-800 group-hover:bg-amber-600/20 transition-colors duration-300">
                  <Icon className="text-amber-500 w-6 h-6 lg:w-8 lg:h-8" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-slate-400 font-medium text-sm lg:text-base uppercase tracking-widest">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}