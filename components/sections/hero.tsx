'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Users, value: '50K+', label: 'Active Users' },
  { icon: TrendingUp, value: '300%', label: 'ROI Increase' },
  { icon: Sparkles, value: '1M+', label: 'AI Campaigns' },
  { icon: Zap, value: '99.9%', label: 'Uptime' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto mt-20"
        >
         
        
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight mt-12"
          >
            Transform Your Marketing with{' '}
            <span className="gradient-text">AI-Powered</span> Intelligence
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Generate high-converting campaigns, optimize content performance, and scale your brand growth with cutting-edge artificial intelligence that learns and adapts to your market.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="gradient" size="xl" className="group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:text-purple-300 transition-colors" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center">
          <TrendingUp className="w-10 h-10 text-green-400" />
        </div>
      </div>
      <div className="absolute top-40 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-purple-400" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
          <Zap className="w-6 h-6 text-blue-400" />
        </div>
      </div>
    </section>
  );
}