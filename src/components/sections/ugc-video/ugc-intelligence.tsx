"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Search, TrendingUp, Users, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-6 h-6 text-purple-600" />,
    title: "AI Face & Voice Matching",
    description: "Our AI matches your script with the perfect virtual creator, ensuring natural expressions and perfect lip-syncing.",
  },
  {
    icon: <Search className="w-6 h-6 text-indigo-600" />,
    title: "Auto-Scripting Engine",
    description: "Input your product URL and our AI writes high-converting UGC scripts based on top-performing social trends.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-pink-600" />,
    title: "Conversion Optimized",
    description: "Every video is engineered to stop the scroll and drive action, using psychological triggers that real creators use.",
  },
];

export default function UGCIntelligence() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The intelligence behind <br />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              authentic UGC.
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            adona.ai combines advanced computer vision with marketing psychology to generate videos that are indistinguishable from real creator content.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all group"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-50 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
           <div className="flex items-center gap-2 text-gray-400 font-semibold">
             <CheckCircle2 className="w-5 h-5 text-green-500" />
             <span>No creator fees</span>
           </div>
           <div className="flex items-center gap-2 text-gray-400 font-semibold">
             <CheckCircle2 className="w-5 h-5 text-green-500" />
             <span>Instant revisions</span>
           </div>
           <div className="flex items-center gap-2 text-gray-400 font-semibold">
             <CheckCircle2 className="w-5 h-5 text-green-500" />
             <span>Full commercial rights</span>
           </div>
        </div>
      </div>
    </section>
  );
}
