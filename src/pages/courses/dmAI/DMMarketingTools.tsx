import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DMMarketingTools = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const tools = [
    {
      category: "Advertising",
      items: [
        {
          name: "Google Ads",
          logo: "https://www.gstatic.com/images/branding/product/2x/google_ads_64dp.png",
        },
        {
          name: "Facebook Ads",
          logo: "https://www.facebook.com/images/fb_icon_325x325.png",
        },
        {
          name: "Instagram Ads",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png",
        },
        {
          name: "LinkedIn Ads",
          logo: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",
        },
      ],
    },
    {
      category: "Analytics",
      items: [
        {
          name: "Google Analytics",
          logo: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg",
        },
        {
          name: "Mixpanel",
          logo: "https://cdn.worldvectorlogo.com/logos/mixpanel.svg",
        },
        {
          name: "Amplitude",
          logo: "https://cdn.amplitude.com/lightning/46c85bfd91905de8047f1ee65c7c93d6/static/media/amplitude-logo-full.4fb9e1ba.svg",
        },
        {
          name: "Hotjar",
          logo: "https://www.hotjar.com/images/hotjar-logo.svg",
        },
      ],
    },
    {
      category: "AI & Automation",
      items: [
        {
          name: "ChatGPT",
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        },
        {
          name: "Jasper.ai",
          logo: "https://assets-global.website-files.com/60e5f2de011b86acebc30db7/60e5f2de011b86cf6bc30e37_Jasper_Favicon_32x32.png",
        },
        {
          name: "Copy.ai",
          logo: "https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/629a702d4c88ed65e94e2105_favicon_blue.svg",
        },
        {
          name: "MarketMuse",
          logo: "https://www.marketmuse.com/wp-content/uploads/2022/05/MarketMuse-Logo-Dark.svg",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-neutral-800">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 highlight-text">
            Master These Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                className="card"
              >
                <h3 className="text-xl font-mono font-bold text-neon-yellow mb-6 text-glow">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-neutral-900/50 p-4 rounded-lg hover:bg-neutral-900 transition-all duration-300 group"
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-8 h-8 object-contain mb-2 filter brightness-0 invert group-hover:brightness-100 transition-all duration-300"
                      />
                      <p className="text-sm font-mono text-neutral-100/70 group-hover:text-neon-pink">
                        {tool.name}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DMMarketingTools;
