'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Crown, Rocket, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: { monthly: 29, yearly: 290 },
    description: 'Perfect for small businesses and solo marketers',
    features: [
      '5 AI-generated campaigns per month',
      'Basic audience targeting',
      'Email support',
      'Standard templates',
      'Basic analytics',
      '1 brand profile',
    ],
    buttonText: 'Start Free Trial',
    popular: false,
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    name: 'Professional',
    icon: Crown,
    price: { monthly: 79, yearly: 790 },
    description: 'Best for growing teams and agencies',
    features: [
      '25 AI-generated campaigns per month',
      'Advanced audience targeting',
      'Priority support',
      'Custom templates',
      'Advanced analytics & insights',
      '5 brand profiles',
      'A/B testing tools',
      'Integration with major platforms',
    ],
    buttonText: 'Start Free Trial',
    popular: true,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Enterprise',
    icon: Rocket,
    price: { monthly: 199, yearly: 1990 },
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited AI-generated campaigns',
      'Enterprise-grade targeting',
      'Dedicated account manager',
      'Fully custom templates',
      'Real-time analytics & reporting',
      'Unlimited brand profiles',
      'Advanced A/B testing suite',
      'Custom integrations',
      'White-label options',
      'Priority feature requests',
    ],
    buttonText: 'Contact Sales',
    popular: false,
    gradient: 'from-orange-500 to-red-500',
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            <span className="text-sm font-medium text-slate-300">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your{' '}
            <span className="gradient-text">Growth Plan</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include our core AI features with varying limits and support levels.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 glass-card p-2 w-fit mx-auto">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-12 h-6 bg-slate-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <motion.div
                className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"
                animate={{ x: isYearly ? 24 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-slate-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full">
                Save 17%
              </span>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card 
                className={`h-full ${plan.popular ? 'ring-2 ring-purple-500/50 scale-105' : ''} transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
                gradient={plan.popular}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isYearly ? 'yearly' : 'monthly'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-4xl font-bold text-white">
                          ${isYearly ? plan.price.yearly : plan.price.monthly}
                        </span>
                        <span className="text-slate-400 ml-2">
                          /{isYearly ? 'year' : 'month'}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={plan.popular ? 'gradient' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 text-sm">
            All plans include a 14-day free trial. No credit card required.{' '}
            <span className="text-purple-400 cursor-pointer hover:text-purple-300">
              View detailed comparison →
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}