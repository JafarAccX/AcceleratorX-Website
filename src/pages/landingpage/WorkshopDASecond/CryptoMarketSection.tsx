import type React from "react"

interface CryptoItemProps {
  icon: string
  name: string
  fullName: string
  price: string
  change: string
  isPositive: boolean
}

const CryptoItem: React.FC<CryptoItemProps> = ({ icon, name, fullName, price, change, isPositive }) => {
  return (
    <div className="flex items-center justify-between py-3 px-4 hover:bg-slate-800/30 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white font-bold text-sm">
          {icon}
        </div>
        <div>
          <div className="text-white font-medium">{name}</div>
          <div className="text-slate-400 text-sm">{fullName}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-white font-medium">{price}</div>
        <div className={`text-sm font-medium ${isPositive ? "text-green-400" : "text-red-400"}`}>{change}</div>
      </div>
    </div>
  )
}

interface CryptoColumnProps {
  title: string
  emoji: string
  cryptos: Array<{
    icon: string
    name: string
    fullName: string
    price: string
    change: string
    isPositive: boolean
  }>
}

const CryptoColumn: React.FC<CryptoColumnProps> = ({ title, emoji, cryptos }) => {
  return (
    <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-lg">{emoji}</span>
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
        <button className="text-slate-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
      <div className="space-y-2">
        {cryptos.map((crypto, index) => (
          <CryptoItem key={index} {...crypto} />
        ))}
      </div>
    </div>
  )
}

const CryptoMarketSection: React.FC = () => {
  const hotListData = [
    { icon: "⟠", name: "ETC", fullName: "Ethereum Classic", price: "$19.44", change: "+2.5%", isPositive: true },
    { icon: "Z", name: "ZEC", fullName: "ZEC", price: "$29.220", change: "+1.2%", isPositive: true },
    { icon: "L", name: "LTC", fullName: "Litecoin", price: "$66.28", change: "+0.8%", isPositive: true },
  ]

  const newCoinsData = [
    { icon: "R", name: "RBTC1", fullName: "Rootstock", price: "$0.77123286", change: "+15.0%", isPositive: true },
    { icon: "S", name: "SOCIAL", fullName: "Phavercoin", price: "$0.01082691", change: "+8.2%", isPositive: true },
    { icon: "X", name: "LOQX", fullName: "LogX Network", price: "$0.059469", change: "+24.4%", isPositive: true },
  ]

  const topGainersData = [
    { icon: "B", name: "BCH", fullName: "Bitcoin Cash", price: "$309.33", change: "+10.8%", isPositive: true },
    { icon: "M", name: "MINA", fullName: "Mina", price: "$309.33", change: "+9.5%", isPositive: true },
    { icon: "Z", name: "ZEC", fullName: "ZEC", price: "$29.220", change: "+7.9%", isPositive: true },
  ]

  return (
    <section className="relative bg-slate-900 py-16 md:py-20">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full gradient-blob-1 opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 rounded-full gradient-blob-2 opacity-15"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tools you will learn</h2>
          <button className="text-slate-400 hover:text-teal-400 transition-colors text-sm md:text-base">
            View all 700+ coins
          </button>
        </div>

        {/* Crypto Columns */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <CryptoColumn title="Hot List" emoji="🔥" cryptos={hotListData} />
          <CryptoColumn title="New Coins" emoji="🟡" cryptos={newCoinsData} />
          <CryptoColumn title="Top Gainers" emoji="📈" cryptos={topGainersData} />
        </div>

        {/* Featured New Listing */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <span className="text-slate-800 font-bold text-lg">∞</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-white font-bold text-xl">EGP</span>
                  <span className="bg-teal-500 text-white text-xs font-medium px-2 py-1 rounded">NEW LISTING</span>
                </div>
                <div className="text-slate-400">Eigenpie</div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              {/* Countdown Timer */}
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">11</div>
                  <div className="text-slate-400 text-sm">Hours</div>
                </div>
                <div className="text-teal-400 text-2xl">:</div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">45</div>
                  <div className="text-slate-400 text-sm">Minutes</div>
                </div>
                <div className="text-teal-400 text-2xl">:</div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">30</div>
                  <div className="text-slate-400 text-sm">Seconds</div>
                </div>
              </div>

              {/* Subscribe Button */}
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                Subscribe
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CryptoMarketSection
