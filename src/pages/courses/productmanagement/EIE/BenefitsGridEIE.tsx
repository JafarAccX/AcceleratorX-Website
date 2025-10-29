
import { 
  Trophy, 
  Users, 
  Target, 
  Briefcase,
  BookOpen, 
  Network,
  Star,
  Brain,
  TrendingUp
} from 'lucide-react';

const benefits = [
  {
    title: "Recognition & Certification",
    description: "Get certified as an AI Product Manager with a credential that's recognised by universities and industry leaders worldwide, designed to help you stand out in your AI product management career.",
    icon: Trophy,
    highlight: "Certified Product Manager"
  },
  {
    title: "Expert Network & Mentorship",
    description: "Build a powerful professional network through exclusive access to the community of product leaders, mentors, and hiring managers.",
    icon: Users,
    highlight: "500+ Industry Experts"
  },
  {
    title: "1:1 Mentorship & Expert Guidance",
    description: "Receive personalised mentoring from India's top product managers. Guiding you at every stage of your AI product management learning journey.",
    icon: BookOpen,
    highlight: "Expert Guidance"
  },
  {
    title: "Career Growth & Job Support",
    description: "Unlock top product management job opportunities through AcceleratorX Priority Access and 3 streams of placement support",
    icon: Target,
    highlight: "100% career Growth"
  },
  {
    title: "Skill Development & Learning Reports",
    description: "Gain specialisation in AI Product Management and Growth Product Management, learning to scale AI-driven and data-backed products that lead markets.",
    icon: Star,
    highlight: "Skill report"
  },
  {
    title: "Real-World Exposure & Recognition",
    description: "Feature your AI Product on our Wall of Products, get hired faster by showcasing your work to hiring partners and potential employers.",
    icon: Briefcase,
    highlight: "Product Showcase"
  },
];

export default function BenefitsGridEIE() {
  return (
    <section id="benefits" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-gray-400 mb-4">
            Program Benefits
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold ">
            What Sets AcceleratorX {" "}
            <span className="text-[#5CB338]">AI Product Management Program Apart</span>?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
