"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const influencers = [
  {
    name: "Alex Rivera",
    niche: "Fitness & Tech",
    stats: "1.2M Reach",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Sophie Chen",
    niche: "Beauty & Lifestyle",
    stats: "850K Reach",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Marcus Jordan",
    niche: "Business & Finance",
    stats: "2.4M Reach",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Elena Rossi",
    niche: "Fashion & Travel",
    stats: "1.5M Reach",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
  },
];

export default function InfluencerShowcase() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Generated Personas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            High-fidelity AI characters that remain consistent across every video, post, and story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {influencers.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white font-bold text-xl mb-1">{person.name}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{person.niche}</span>
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider">
                      {person.stats}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-white px-8 py-6 rounded-[32px] shadow-lg border border-gray-100 flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Consistency</div>
            </div>
            <div className="w-px h-12 bg-gray-100" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4K</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Resolution</div>
            </div>
            <div className="w-px h-12 bg-gray-100" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
