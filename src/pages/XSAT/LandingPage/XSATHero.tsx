import React from "react";
import { motion } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";

export const XSATHero = () => {
  const logos = {
    row1: [
      "/assets/xsatLogo/cisco.webp",
      "/assets/xsatLogo/dell.webp",
      "/assets/xsatLogo/hp.webp",
      "/assets/xsatLogo/microsoft.webp",
      "/assets/xsatLogo/juniper.webp",
      "/assets/xsatLogo/obeya.png",
    ],
    row2: [
      "/assets/xsatLogo/aruba.webp",
      "/assets/xsatLogo/fortinet.webp",
      "/assets/xsatLogo/google.webp",
      "/assets/xsatLogo/jio.webp",
      "/assets/xsatLogo/logitech.webp",
      "/assets/xsatLogo/redington.svg",
    ],
    row3: [
      "/assets/xsatLogo/cisco.webp",
      "/assets/xsatLogo/vi.webp",
      "/assets/xsatLogo/tata.webp",
      "/assets/xsatLogo/redhat.webp",
      "/assets/xsatLogo/coworks.png",
    ],
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 h-full w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-20 z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] gap-16">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              <span className="block mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-green-500">
                India's First Industrial Scholarship Test
              </span>
            </h1>

            <div className="mt-8 flex flex-col items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-2xl text-white font-medium">
                  XSAT Is{" "}
                  <span className="text-green-500 font-semibold">Live</span>
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-green-500 text-white font-medium rounded-lg shadow-lg hover:bg-green-400 transition-all"
                onClick={() =>
                  (window.location.href = "https://xsat.acceleratorx.org")
                }
              >
                Register Now
              </motion.button>
            </div>
          </motion.div>

          {/* Modern Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col lg:flex-row items-center justify-center gap-6"
          >
            {/* Scholarship Card */}
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-[#121212] border border-gray-800 shadow-lg hover:shadow-2xl rounded-2xl p-6 w-80 text-white transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                <Trophy className="w-6 h-6 text-black" />
              </div>
              <div className="space-y-4 pt-6">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-400">
                    Win scholarships worth
                  </div>
                  <div className="text-4xl font-bold text-yellow-400">
                    ₹1 Crore+
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Card */}
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-[#121212] border border-gray-800 shadow-lg hover:shadow-2xl rounded-2xl p-6 w-80 text-white transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <div className="space-y-4 pt-6">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-400">
                    Transform your future with
                  </div>
                  <div className="text-2xl font-bold">
                    <img
                      src="/companylogo.png"
                      alt="companyLogo"
                      className="mx-auto w-29"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Company Logos Slider */}
          <div className="mt-8 md:mt-16 w-full overflow-hidden bg-opacity-20 py-8 md:py-12 px-2 md:px-4 relative">
            <div className="text-center mb-8 md:mb-12 relative z-20">
              <div className="flex flex-col items-center justify-center gap-4 mb-2">
                <img
                  src="/a2m.png"
                  alt="AcceleratorX Logo"
                  className="h-16 md:h-20 lg:h-24 object-contain"
                />
                <h3 className="text-xl md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent">
                  Empowered by
                </h3>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-20 mb-8 md:mb-12 relative z-20"></div>

            {/* Background overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 opacity-50 z-10"></div>

            <div className="relative z-0">
              {/* First row of logos */}
              <div className="flex animate-scroll">
                <div className="flex gap-16 md:gap-32 min-w-max px-8">
                  {logos.row1.map((logoPath) => (
                    <div
                      key={logoPath}
                      className="w-24 md:w-28 h-12 md:h-14 flex items-center justify-center"
                    >
                      <img
                        src={logoPath}
                        alt={`Company logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-16 md:gap-32 min-w-max px-8">
                  {logos.row2.map((logoPath) => (
                    <div
                      key={`${logoPath}-dup`}
                      className="w-24 md:w-28 h-12 md:h-14 flex items-center justify-center"
                    >
                      <img
                        src={logoPath}
                        alt={`Company logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Second row of logos (scrolling in opposite direction) */}
              <div className="flex animate-scroll-reverse mt-8">
                <div className="flex gap-16 md:gap-32 min-w-max px-8">
                  {logos.row3.map((logoPath) => (
                    <div
                      key={`${logoPath}-rev`}
                      className="w-24 md:w-28 h-12 md:h-14 flex items-center justify-center"
                    >
                      <img
                        src={logoPath}
                        alt={`Company logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-16 md:gap-32 min-w-max px-8">
                  {logos.row3.map((logoPath) => (
                    <div
                      key={`${logoPath}-rev-dup`}
                      className="w-24 md:w-28 h-12 md:h-14 flex items-center justify-center"
                    >
                      <img
                        src={logoPath}
                        alt={`Company logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
