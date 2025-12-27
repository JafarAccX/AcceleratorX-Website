import React from "react";
import { TrendingUp, Briefcase, Target, BarChart } from "lucide-react";

const GENMarketScope = () => {
  const marketStats = [
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
      value: "85%",
      label: "PMs using AI by 2025",
      description: "By 2025, 85% of product managers will leverage AI to drive product innovation and efficiency.",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-blue-500" />,
      value: "3x",
      label: "Faster Product Launches",
      description: "Teams using GenAI tools deliver products to market 3x faster on average.",
    },
    {
      icon: <Target className="w-5 h-5 text-purple-500" />,
      value: "70%",
      label: "AI-Driven Decisions",
      description: "70% of PMs report improved decision-making with GenAI-powered insights.",
    },
    {
      icon: <BarChart className="w-5 h-5 text-rose-500" />,
      value: "$200K+",
      label: "Top PM Salaries",
      description: "AI-savvy PMs at leading tech firms can earn $200,000+ annually.",
    },
  ];

  const opportunities = [
    {
      title: "AI Product Manager",
      description: "Lead the development and launch of AI-powered products and features.",
      salary: "$120K - $200K+",
    },
    {
      title: "AI Strategy Lead",
      description: "Define and execute AI strategies for product teams and organizations.",
      salary: "$110K - $180K",
    },
    {
      title: "GenAI Solutions Architect",
      description: "Design and implement GenAI solutions for product management workflows.",
      salary: "$130K - $210K",
    },
    {
      title: "AI Product Operations",
      description: "Optimize product operations and user experience with GenAI automation.",
      salary: "$100K - $160K",
    },
  ];

  return (
    <section className="relative py-16 bg-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          style={{ opacity: 0.3 }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">GenAI Market for PMs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">GenAI is Transforming Product Management</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              The rise of Generative AI is revolutionizing how product managers build, launch, and scale products. Explore the booming market and career opportunities for PMs who master GenAI.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {marketStats.map((stat, index) => (
              <div
                key={index}
                className="relative group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-white/10">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </div>
                <h3 className="text-sm font-semibold text-gray-300 mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Career Opportunities */}
          <div className="backdrop-blur-sm rounded-2xl  ">
            <h4 className="text-2xl font-bold text-white mb-8 text-center">High-Paying PM Roles in GenAI</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 ">
              {opportunities.map((job, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {job.title}
                      </h4>
                      <p className="text-sm text-gray-400 mb-3">{job.description}</p>
                    </div>
                    <div className="text-sm font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {job.salary}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default GENMarketScope;
