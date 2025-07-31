'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Target, 
  BarChart3, 
  MessageSquare, 
  Image as ImageIcon, 
  Lightbulb,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Campaign Generation',
    description: 'Create personalized marketing campaigns in minutes with advanced AI that understands your brand voice and target audience.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Target,
    title: 'Smart Audience Targeting',
    description: 'Leverage machine learning to identify and reach your ideal customers with precision targeting across all channels.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Get deep insights into campaign performance with real-time analytics and predictive modeling for optimal ROI.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageSquare,
    title: 'Content Optimization',
    description: 'Automatically optimize headlines, copy, and messaging based on engagement data and conversion patterns.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: ImageIcon,
    title: 'Visual Asset Creation',
    description: 'Generate stunning visuals, graphics, and video content that aligns perfectly with your brand guidelines.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Insights',
    description: 'Receive actionable recommendations and market insights to stay ahead of trends and competitors.',
    gradient: 'from-yellow-500 to-orange-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
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
            <span className="text-sm font-medium text-slate-300">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful AI-Driven{' '}
            <span className="gradient-text">Marketing Tools</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to transform your marketing strategy and accelerate growth with intelligent automation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="h-full group hover:border-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to experience the future of marketing?
            </h3>
            <p className="text-slate-400 mb-6">
              Join thousands of marketers who are already leveraging AI to drive unprecedented growth.
            </p>
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}