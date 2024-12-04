import React from "react";
import { Sparkles, Target, Users, Code } from "lucide-react";

const cards = [
  {
    title: "AI Product Management",
    description:
      "Master the future of product management by understanding how you can leverage AI to enhance a product or user experience.",
    icon: Sparkles,
    className:
      "md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-500/10 to-blue-500/10",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
  },
  {
    title: "Real-World Projects",
    description:
      "Build your product portfolio which will get you the job with our BYDP initiative.",
    icon: Code,
    className: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Career Growth",
    description:
      "We focus on skill development and getting you ready for the role.",
    icon: Target,
    className: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
  },
  {
    title: "Expert Mentorship",
    description:
      "Gain valuable and actionable insights from our industry seasoned mentors to understand product management in a better way.",
    icon: Users,
    className:
      "md:col-span-2 bg-gradient-to-br from-orange-500/10 to-red-500/10",
  },
];

export default function ProgramHighlightsFB() {
  return (
    <section className=" bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Product Management with us ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Animated background SVG */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <defs>
                <linearGradient
                  id="grid-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 L100,0 L100,100 L0,100 Z"
                fill="url(#grid-gradient)"
                className="animate-pulse"
              >
                <animate
                  attributeName="d"
                  dur="8s"
                  repeatCount="indefinite"
                  values="M0,0 L100,0 L100,100 L0,100 Z;
                          M0,10 L90,0 L100,90 L10,100 Z;
                          M0,0 L100,0 L100,100 L0,100 Z"
                />
              </path>
            </svg>
          </div>

          {cards.map((card, index) => (
            <div
              key={index}
              className={`group p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 ${card.className}`}
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                </div>

                <p className="text-gray-400 mb-4">{card.description}</p>

                {card.imageUrl && (
                  <div className="mt-auto relative rounded-2xl overflow-hidden aspect-video">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
