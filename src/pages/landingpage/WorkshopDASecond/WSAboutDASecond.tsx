// components/FeaturesSection.tsx
import { motion } from "framer-motion";
import { FiDollarSign, FiKey, FiCpu } from "react-icons/fi"; // You can replace with your own SVGs

const WSAboutDASecond = () => {
  const features = [
    {
      icon: <FiDollarSign className="text-white text-xl" />,
      title: "Limited Spots. High Impact.",
      description:
        "We keep it small and focused so you get real interaction, not just another crowded webinar.",
      highlight: true,
    },
    {
      icon: <FiKey className="text-white text-xl" />,
      title: "Real Projects. Real Skills.",
      description:
        'You’ll build a usable AI agent during the session — not just watch someone else do it.',
        highlight: true,
    },
    {
      icon: <FiCpu className="text-white text-xl" />,
      title: "For Working Professionals Only.",
      description:
        'Designed specifically for busy professionals who want practical AI skills that apply to their careers.',
      highlight: true,
  },
  ];

  const features2 = [
  {
    title: "Learn by Doing",
    description:
      "Skip the fluff. In just 90 minutes, you’ll build and launch your first AI agent live — something you can actually use in your job or freelance projects.",
    icon: "/assets/genAITools/huggingface.svg",
    top: true,
  },
  {
    title: "Make AI Work for You",
    description:
      "Whether you’re in product, marketing, data, or UX — you’ll learn how to create tools that save time, automate work, and impress clients/stakeholders.",
    icon: "/assets/genAITools/rag.webp",
    top: false,
  },
  {
    title: "Live Mentoring from Experts",
    description:
      "No YouTube rabbit holes. No boring slides. Just clear, live instruction with interactive Q&A.",
    icon: "/assets/genAITools/openai-logomark.svg",
    top: true,
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
        <img src="/assets/workshop-blobs/3d-delivery-robot-working.png" alt="left-decor" className="w-32 opacity-60" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <img src="/assets/workshop-blobs/3d-delivery-robot-working.png"  alt="right-decor" className="w-32 opacity-60" />
      </div>
    </section>
     <section className="relative z-10 mt-32 my-24 px-4 md:px-10 text-white max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Why This Webinar Is a Game-Changer</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          This isn’t another theory-heavy session. It’s a live, hands-on experience designed to help working professionals like you build, automate, and lead with AI — starting now.
        </p>
      </div>

      <div className="relative grid grid-cols-3 gap-8 ">
        {features2.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center relative">
            {/* Top: Icon -> Line -> Card */}
            {item.top && (
              <>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-lg">
                  <img src={item.icon} alt={item.title} className="h-8 w-8" />
                </div>
                <div className="h-10 w-1 bg-white/20" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-white/5 bg-white/5 backdrop-blur-md p-5 text-center hover:border-white/10 transition"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                </motion.div>
              </>
            )}

            {/* Center: Card -> Line -> Icon */}
            {!item.top && (
              <>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-white/5 bg-white/5 backdrop-blur-md p-5 text-center hover:border-white/10 transition mb-4"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                </motion.div>
                <div className="h-10 w-1 bg-white/20" />
                <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-lg">
                  <img src={item.icon} alt={item.title} className="h-8 w-8" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Optional blob decorations */}
      <img
        src="/assets/workshop-blobs/3d-delivery-robot-working.png"
        className="absolute left-0 bottom-0 w-28 opacity-40 -rotate-45"
        alt="blob"
      />
      <img
        src="/assets/workshop-blobs/3d-delivery-robot-working.png"
        className="absolute right-0 top-0 w-28 opacity-40 rotate-45"
        alt="blob"
      />
    </section>

<div className=" flex items-center justify-center">
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
            >Claim Your Free Spot ↗</button>
 
  </motion.div>
</div>
    
  </>
  );
}

export default WSAboutDASecond;