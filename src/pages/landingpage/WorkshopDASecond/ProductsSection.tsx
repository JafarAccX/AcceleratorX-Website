

import type React from "react"

interface ProductCardProps {
  title: string
  description: string
  illustration: React.ReactNode
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, illustration }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-purple-700/5 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 group">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="w-32 h-32 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {illustration}
        </div>
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xs">{description}</p>
        </div>
      </div>
    </div>
  )
}

// EDUCATION ILLUSTRATIONS

const DataVizIllustration: React.FC = () => (
  <div className="relative">
    <div className="w-24 h-16 bg-slate-700/50 rounded-lg flex items-end justify-center gap-1 p-2">
      <div className="w-2 h-4 bg-pink-400 rounded-sm" />
      <div className="w-2 h-8 bg-purple-500 rounded-sm" />
      <div className="w-2 h-6 bg-purple-400 rounded-sm" />
      <div className="w-2 h-10 bg-indigo-500 rounded-sm" />
      <div className="w-2 h-5 bg-pink-400 rounded-sm" />
    </div>
    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full text-white flex items-center justify-center text-xs font-bold">📊</div>
    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-500 rounded-full" />
  </div>
)

const NoCodeIllustration: React.FC = () => (
  <div className="relative">
    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl">⚙️</div>
    <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-purple-400 to-emerald-500 rounded-full text-white text-sm flex items-center justify-center">+</div>
    <div className="absolute top-2 -right-4 w-5 h-5 bg-yellow-400 rounded-full">📈</div>
    <div className="absolute bottom-0 left-6 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full" />
  </div>
)

const AIToolsIllustration: React.FC = () => (
  <div className="relative">
    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl">
      🤖
    </div>
    <div className="absolute top-0 left-0 w-4 h-4 bg-yellow-400 rounded-full text-white text-[10px] flex items-center justify-center">AI</div>
    <div className="absolute -top-3 right-2 w-5 h-5 bg-gradient-to-br from-purple-400 to-cyan-500 rounded-full" />
    <div className="absolute -bottom-2 left-4 text-yellow-400 text-sm">✦</div>
  </div>
)

const TemplatesIllustration: React.FC = () => (
  <div className="relative">
    <div className="w-20 h-24 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex flex-col justify-center items-center text-white text-xl">
      📄
    </div>
    <div className="absolute -top-3 -left-3 w-6 h-6 bg-pink-400 rounded-full text-white text-sm flex items-center justify-center">⏱️</div>
    <div className="absolute top-1 right-1 w-4 h-4 bg-green-400 rounded-full" />
    <div className="absolute bottom-0 left-6 text-yellow-300 text-xs">⚡</div>
  </div>
)

const ProductsSection: React.FC = () => {
  const products = [
    {
      title: "Data Visualization",
      description: "How to turn raw data into visual stories that drive insights.",
      illustration: <DataVizIllustration />,
    },
    {
      title: "No-Code Dashboards",
      description: "Learn tools to create live dashboards without writing code.",
      illustration: <NoCodeIllustration />,
    },
    {
      title: "AI Productivity Tools",
      description: "Use tools like ChatGPT to automate tasks and simplify analysis.",
      illustration: <AIToolsIllustration />,
    },
    {
      title: "Smart Templates",
      description: "Save time with prebuilt templates for dashboards and reports.",
      illustration: <TemplatesIllustration />,
    },
  ]

  return (
    <section className="relative   py-8 md:py-12">
      <div className="absolute right-[-200px] bottom-0 h-[600px] w-[600px] rounded-full bg-purple-700/60 opacity-30 blur-[150px] pointer-events-none z-0" />

      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full gradient-blob-1 opacity-15"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full gradient-blob-2 opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            What You’ll Learn
            <br />
            <span className="text-white">At a Glance</span>
          </h2>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              illustration={product.illustration}
            />
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default ProductsSection
