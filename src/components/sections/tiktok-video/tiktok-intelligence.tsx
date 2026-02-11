"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Music, Search, Smartphone, Users } from "lucide-react";

const features = [
  {
    title: "Viral Trend Analysis",
    description: "Our AI scans TikTok in real-time to identify rising sounds, hashtags, and visual hooks before they peak.",
    icon: Search,
    color: "bg-blue-500",
  },
  {
    title: "Smart Hook Generation",
    description: "Automatically generates the first 3 seconds of your video to maximize retention and lower drop-off rates.",
    icon: Smartphone,
    color: "bg-pink-500",
  },
  {
    title: "AI Voice & Music Sync",
    description: "Perfectly syncs trending audio with high-quality AI voiceovers that sound human and engaging.",
    icon: Music,
    color: "bg-purple-500",
  },
  {
    title: "Native TikTok Editing",
    description: "Videos are styled to look like native TikTok content, increasing authenticity and organic reach.",
    icon: Cpu,
    color: "bg-indigo-500",
  },
  {
    title: "Behavioral Intelligence",
    description: "Optimizes video length, pacing, and captions based on TikTok's current algorithm preferences.",
    icon: Brain,
    color: "bg-red-500",
  },
  {
    title: "Community First",
    description: "Built-in engagement prompts to encourage comments, shares, and saves automatically.",
    icon: Users,
    color: "bg-green-500",
  },
];

export default function TikTokIntelligence() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            The Intelligence Behind <br />
            <span className="text-indigo-600">Your Viral Content</span>
          </h2>
          <p className="text-xl text-gray-600">
            adona.ai doesn&apos;t just make videos. It engineers viral moments using 
            advanced proprietary AI models trained on millions of high-performing TikToks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
