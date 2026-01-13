// components/FeaturesSection.tsx
import { motion } from "framer-motion";
import { FiDollarSign, FiKey } from "react-icons/fi"; // You can replace with your own SVGs

const WSAboutDASecond = () => {
  const features = [
    {
      icon: <FiDollarSign className="text-white text-xl" />,
      title: "Limited Spots. High Impact.",
      description:
        "This is a practical, hands-on workshop where you’ll: ✔️ Work on real datasets ✔️ Build AutoML models live ✔️ See end-to-end workflows ✔️ Get direct learning from the mentor",
      highlight: true,
    },
    {
      icon: <FiKey className="text-white text-xl" />,
      title: "Real Insights. Real Skills.",
      description:
        "You won’t just watch — you’ll build: Automated ML pipelines, Auto-generated dashboards, Prediction models, Insight-driven reports. Perfect for anyone preparing for a data analytics career or upgrading their role with AI skills.",
      highlight: true,
    },
  ];

  return (
    <>
      <section className="relative z-10 mx-auto my-24 max-w-7xl px-6">
        <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-[6px] transition-all duration-300 hover:border-white/10 ${f.highlight ? "bg-gradient-to-tr from-gray-600/30 to-transparent" : ""
                }`}
            >
              {/* Icon + Line */}
              <div className="flex items-center space-x-4">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  {f.icon}
                  <div className="absolute top-1/2 left-full h-0.5 w-6 -translate-y-1/2 bg-white/20 group-hover:bg-white/40" />
                </div>
              </div>

              {/* Title and Text */}
              <h3 className="mt-4 text-base font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Floating Purple Blobs (optional) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <img src="/assets/workshop-blobs/3d-delivery-robot-working.webp" alt="left-decor" className="w-32 opacity-60" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <img src="/assets/workshop-blobs/3d-delivery-robot-working.webp" alt="right-decor" className="w-32 opacity-60" />
        </div>
      </section>


      {/* Meet Your Mentor Section */}
      <section className="relative z-10 mx-auto my-24 max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Meet Your Mentor</h2>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <img src="/assets/founder/akash-maurya.webp" alt="Akash Maurya" className="w-24 h-24 rounded-full object-cover" />
            <h3 className="text-xl font-semibold text-white">Akash Maurya</h3>
            <p className="text-slate-300">AI & Data Analytics Expert</p>
            <p className="text-slate-400 text-sm max-w-md">
              Known for simplifying complex data concepts, Akash has helped 10,000+ learners upgrade their data and AI skills through practical, real-world training.
            </p>
          </div>
        </div>
      </section>

      <div className=" flex items-center justify-center pb-10">
        <motion.div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-md hover:border-purple-400 transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >

          <button className="text-sm font-semibold text-white"
            onClick={() => {
              // console.log('WSAbout: Register button clicked');
              const form = document.getElementById("workshop-registration-form");
              console.log("WSAbout: Form element found:", form);
              if (form) {
                // console.log('WSAbout: Attempting to scroll to form');
                form.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
                // console.log('WSAbout: Scroll command executed');
              } else {
                // console.error('WSAbout: Form element not found with ID "workshop-registration-form"');
              }
            }}
          >Claim Your Free Spot →</button>

        </motion.div>
      </div>

    </>
  );
}

export default WSAboutDASecond;