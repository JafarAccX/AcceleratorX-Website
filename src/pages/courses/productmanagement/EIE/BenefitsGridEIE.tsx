import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Target, 
  Briefcase,
  BookOpen,
  LineChart,
  Network,
  Star,
  Brain,
  TrendingUp
} from 'lucide-react';

const benefits = [
  {
    title: "University Recognition",
    description: "Earn a globally recognized certification that sets you apart in the product management field.",
    icon: Trophy,
    highlight: "Certified Product Manager"
  },
  {
    title: "Expert Network",
    description: "Connect with industry leaders and build a powerful network of product professionals.",
    icon: Users,
    highlight: "500+ Industry Experts"
  },
  {
    title: "Career Growth",
    description: "Access exclusive job opportunities and accelerate your career progression.",
    icon: Target,
    highlight: "100% Career Support"
  },
  {
    title: "Product Showcase on Wall of Product",
    description: "Get your product featured on the Wall of Product and showcase your skills to potential employers.",
    icon: Briefcase,
    highlight: "Product Showcase"
  },
  {
    title: "1:1 Mentorship",
    description: "Get one-on-one guidance and support from industry experts.",
    icon: BookOpen,
    highlight: "Expert Guidance"
  },
  {
    title: "Chance to win Industry Internship",
    description: "Get industry internship opportunities and gain real-world experience.",
    icon: Users,
    highlight: "Industry Internship" ,
  },
  {
    title: "By-Weekly Career Review Calls",
    description: "Receive personalized feedback and guidance from industry experts.",
    icon: Network,
    highlight: "Expert Feedback"
  },
  {
    title: "Personalised Skill Report",
    description: "Get a detailed analysis of your skills and areas of improvement.",
    icon: Star,
    highlight: "Skill Report"
},
{
    title: "AI Product Management",
    description: "Master the skills to build, manage, and scale AI-driven products while understanding the nuances of AI ethics, deployment, and innovation.",
    icon: Brain,
    highlight: "AI Product Management"
},
{
    title: "Growth Product Management",
    description: "Learn to identify growth opportunities, execute data-driven experiments, and scale products to achieve exponential growth.",
    icon: TrendingUp,
    highlight: "Growth Product Management"
}

];

export default function BenefitsGridEIE() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-gray-400 mb-4">
            Program Benefits
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#5CB338]">
            Why Choose Our{" "}
            <span className="text-[#5CB338]">Program?</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#0F0F0F] rounded-xl p-6 border border-white/10 hover:border-[#5CB338]/50 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#5CB338]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#5CB338]/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#5CB338]" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#5CB338] transition-colors">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-400 text-sm mb-4">
                  {benefit.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5CB338]" />
                  <span className="text-[#5CB338] text-sm font-medium">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
