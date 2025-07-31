'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sparkles, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How does ADmyBRAND AI Suite generate marketing campaigns?',
    answer: 'Our AI analyzes your brand voice, target audience, and market trends to generate personalized campaigns. It uses advanced natural language processing and machine learning to create content that resonates with your specific audience while maintaining brand consistency.',
  },
  {
    question: 'Can I integrate ADmyBRAND with my existing marketing tools?',
    answer: 'Yes! We offer seamless integrations with over 50 popular marketing platforms including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, and more. Our API also allows for custom integrations with your existing tech stack.',
  },
  {
    question: 'What kind of results can I expect in the first month?',
    answer: 'Most customers see significant improvements within 2-4 weeks. On average, users experience a 150-300% increase in lead generation, 40-60% reduction in campaign creation time, and 20-50% improvement in conversion rates. Results vary based on industry and implementation.',
  },
  {
    question: 'Is my data secure with ADmyBRAND AI Suite?',
    answer: 'Absolutely. We employ enterprise-grade security measures including AES-256 encryption, SOC 2 Type II compliance, GDPR compliance, and regular security audits. Your data is never shared with third parties and is stored in secure, geographically distributed data centers.',
  },
  {
    question: 'Do I need technical expertise to use the platform?',
    answer: 'Not at all! ADmyBRAND is designed for marketers, not developers. Our intuitive interface requires no coding knowledge. We also provide comprehensive onboarding, training resources, and 24/7 support to ensure you get the most out of the platform.',
  },
  {
    question: 'Can I customize the AI to match my brand voice?',
    answer: 'Yes, our AI learns and adapts to your unique brand voice through our Brand DNA feature. You can upload existing content, set tone preferences, define key messaging, and the AI will generate content that perfectly aligns with your brand personality.',
  },
  {
    question: 'What happens if I exceed my plan limits?',
    answer: 'We offer flexible usage-based pricing. If you approach your limits, we\'ll notify you in advance and provide options to upgrade your plan or purchase additional credits. You\'ll never be locked out of the platform unexpectedly.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. This gives you plenty of time to test the platform and see the results for yourself before making a commitment.',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            <span className="text-sm font-medium text-slate-300">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* Contact Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-400 mb-6">
              Our expert support team is here to help you succeed. Get in touch for personalized assistance.
            </p>
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}