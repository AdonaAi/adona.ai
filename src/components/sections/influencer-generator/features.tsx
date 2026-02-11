"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Globe, Lock, Palette, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Zero Face Drift",
    description: "Our proprietary AI ensures your influencer looks identical in every single frame, regardless of angle or lighting.",
    icon: <Lock className="w-5 h-5 text-indigo-600" />,
  },
  {
    title: "Hyper-Realistic Voice",
    description: "Clone your own voice or choose from our library of 500+ premium AI voices with human-like emotion.",
    icon: <Palette className="w-5 h-5 text-purple-600" />,
  },
  {
    title: "Instant Scripting",
    description: "AI that understands your brand's voice and generates viral-ready scripts tailored to each platform.",
    icon: <Zap className="w-5 h-5 text-pink-600" />,
  },
  {
    title: "Global Reach",
    description: "Translate your content into 100+ languages with perfect lip-syncing for international markets.",
    icon: <Globe className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "Brand DNA Integration",
    description: "Inject your product photos, logos, and brand colors directly into the generated content.",
    icon: <CheckCircle2 className="w-5 h-5 text-green-600" />,
  },
  {
    title: "Analytics Dashboard",
    description: "Track performance and engagement metrics for all your generated content in one place.",
    icon: <BarChart3 className="w-5 h-5 text-orange-600" />,
  },
];

export default function InfluencerFeatures() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Built for scale</h2>
          <p className="text-xl text-gray-600">
            Everything you need to run a high-performance influencer marketing department with a team of one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
