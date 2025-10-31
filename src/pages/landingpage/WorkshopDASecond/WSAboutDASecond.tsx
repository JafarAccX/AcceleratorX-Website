// components/FeaturesSection.tsx
import { motion } from "framer-motion";
import { FiDollarSign, FiKey, FiCpu } from "react-icons/fi"; // You can replace with your own SVGs

const WSAboutDASecond = () => {
  const features = [
    {
      icon: <FiDollarSign className="text-white text-xl" />,
      title: "Limited Spots. High Impact.",
      description:
        "We keep it focused and practical — you'll work on real examples and get direct interaction with the instructor.",
      highlight: true,
    },
    {
      icon: <FiKey className="text-white text-xl" />,
      title: "Real Projects. Real Skills.",
      description:
        'Apply what you learn during the session. Build a mini AI-powered analysis workflow — not just watch someone else do it.',
        highlight: true,
    },
    {
  icon: <FiCpu className="text-white text-xl" />,
  title: "Build Confidence for a Data Career.",
  description:
    "Perfect for anyone planning to enter data analytics, upskill for better roles, or understand AI's real use in business analytics.",
  highlight: true,
}
  ]; 

  return (
    <>
    <section className="relative z-10 mx-auto my-24 max-w-7xl px-6">
      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-[6px] transition-all duration-300 hover:border-white/10 ${
              f.highlight ? "bg-gradient-to-tr from-gray-600/30 to-transparent" : ""
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
        <img src="/assets/workshop-blobs/3d-delivery-robot-working.webp"  alt="right-decor" className="w-32 opacity-60" />
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