'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'TechFlow Inc.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'ADmyBRAND AI transformed our marketing approach completely. We saw a 300% increase in lead generation within the first month. The AI-powered campaigns are incredibly accurate and save us countless hours.',
    rating: 5,
    metrics: { metric: 'Lead Generation', increase: '+300%' },
  },
  {
    name: 'Michael Rodriguez',
    role: 'CEO',
    company: 'GrowthLab',
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'The strategic insights and automated optimization features are game-changing. Our ROAS improved by 250% and our team can now focus on high-level strategy instead of manual campaign management.',
    rating: 5,
    metrics: { metric: 'ROAS', increase: '+250%' },
  },
  {
    name: 'Emily Watson',
    role: 'Head of Digital Marketing',
    company: 'InnovateCorp',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'The content generation capabilities are phenomenal. We\'re producing 5x more quality content with perfect brand consistency. The AI understands our voice better than some of our previous team members.',
    rating: 5,
    metrics: { metric: 'Content Output', increase: '+500%' },
  },
  {
    name: 'David Park',
    role: 'Marketing Manager',
    company: 'ScaleUp Solutions',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'Implementation was seamless and the results were immediate. Customer acquisition costs dropped by 40% while our conversion rates doubled. This platform pays for itself within weeks.',
    rating: 5,
    metrics: { metric: 'CAC Reduction', increase: '-40%' },
  },
  {
    name: 'Lisa Thompson',
    role: 'VP of Marketing',
    company: 'NextGen Brands',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'The predictive analytics help us stay ahead of market trends. We\'ve launched three successful product campaigns this quarter, each exceeding targets by over 150%. Absolutely revolutionary.',
    rating: 5,
    metrics: { metric: 'Campaign Success', increase: '+150%' },
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-slate-300">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by{' '}
            <span className="gradient-text">Marketing Leaders</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            See how companies are transforming their marketing results with our AI-powered platform.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-16 hidden lg:block">
            <button
              onClick={goToPrevious}
              className="glass-card p-3 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-16 hidden lg:block">
            <button
              onClick={goToNext}
              className="glass-card p-3 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Testimonial Cards */}
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.25, 0.25, 0, 1] }}
                className="absolute inset-0"
              >
                <Card className="h-full">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <Quote className="w-12 h-12 text-purple-400 mb-6" />
                      <blockquote className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                        "{testimonials[currentIndex].content}"
                      </blockquote>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-purple-500/30"
                          />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">
                            {testimonials[currentIndex].name}
                          </div>
                          <div className="text-sm text-slate-400">
                            {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">
                          {testimonials[currentIndex].metrics.increase}
                        </div>
                        <div className="text-sm text-slate-400">
                          {testimonials[currentIndex].metrics.metric}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-500 scale-125'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-6 lg:hidden">
            <button
              onClick={goToPrevious}
              className="glass-card p-2 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="glass-card p-2 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}