import type React from "react"

interface StatItemProps {
  number: string
  label: string
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  return (
    <div className="text-center">
      <div className="text-xl lg:text-3xl font-bold text-white mb-2">{number}</div>
      <div className="text-sm md:text-base text-slate-400 font-medium">{label}</div>
    </div>
  )
}

const StatsSection: React.FC = () => {
  const stats = [
    { number: "13th Dec 2025", label: "Date" },
    { number: "7:00 PM IST", label: "Time" },
    { number: "Beginner to Intermediate", label: "Level" }, 
  ]

  return (
    <section className="relative  py-16 md:py-20">
          {/* Purple Glow Background */}


      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <StatItem number={stat.number} label={stat.label} />

              {/* Vertical divider - hidden on mobile, shown on larger screens */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
