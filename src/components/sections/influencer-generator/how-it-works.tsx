"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Wand2, Share2 } from "lucide-react";

const steps = [
  {
    title: "Define Your DNA",
    description: "Upload a few photos or describe your brand's ideal persona. Our AI captures your unique style, tone, and visual identity.",
    icon: <UserPlus className="w-6 h-6 text-indigo-600" />,
    color: "bg-indigo-50",
  },
  {
    title: "Generate Content",
    description: "Write a script or let our AI generate one. In seconds, your AI influencer will perform the script with perfect lip-sync and emotion.",
    icon: <Wand2 className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-50",
  },
  {
    title: "Scale & Distribute",
    description: "Download in 4K or publish directly to TikTok, Instagram, and YouTube. Scale your influence without the influencer overhead.",
    icon: <Share2 className="w-6 h-6 text-pink-600" />,
    color: "bg-pink-50",
  },
];

export default function InfluencerProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">How it works</h2>
          <p className="text-xl text-gray-600">
            Three simple steps to launch your brand's AI influencer army.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full border-t-2 border-dashed border-gray-100 -translate-x-12 z-0" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
