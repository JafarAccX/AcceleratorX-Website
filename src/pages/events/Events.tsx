// import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  // const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className=" mt-10 max-w-screen-lg mx-auto p-4 md:p-8">
        <div className="min-h-screen  text-white p-6">
          <div className="max-w-4xl mx-auto">
            <header className="flex justify-between items-center mb-10">
              <motion.h1
                className="text-4xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Events
              </motion.h1>

              {/* <div className="bg-gray-800/50 rounded-full p-1">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("upcoming")}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      activeTab === "upcoming" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => setActiveTab("past")}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      activeTab === "past" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Past
                  </button>
                </div>
              </div> */}
            </header>

            <div className="flex">
              <div className="w-48 pr-6">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex flex-col items-start">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                      <span className="text-xl font-semibold">Today</span>
                    </div>
                    <div className="text-gray-400 ml-6">Tuesday</div>
                  </div>
                  <div className="absolute top-6 bottom-0 left-1.5 w-[1px] bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                </motion.div>
              </div>

              <div className="flex-1">
                <motion.div
                  className="bg-gradient-to-br from-gray-800/70 to-gray-900/90 rounded-xl p-6 border border-gray-800"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{
                    opacity: [1, 0.8, 1],
                    boxShadow: [
                      "0 0 0px rgba(168, 85, 247, 0.0)",
                      "0 0 20px rgba(168, 85, 247, 0.6)",
                      "0 0 0px rgba(168, 85, 247, 0.0)",
                    ],
                    borderColor: ["rgba(168, 85, 247, 0.1)", "rgba(168, 85, 247, 0.6)", "rgba(168, 85, 247, 0.1)"],
                    y: 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex justify-between">
                    <div>
                      <div className="text-gray-400 mb-2">5:00 PM</div>
                      <h2 className="text-2xl font-semibold mb-4">bla</h2>

                      <div className="flex items-center text-amber-400 mb-2">
                        <MapPin size={16} className="mr-2" />
                        <span>Location Missing</span>
                      </div>

                      <div className="flex items-center text-gray-400">
                        <Users size={16} className="mr-2" />
                        <span>No guests</span>
                      </div>

                      <Link to={"/event/PMtakedown/view"}>
                        <button className="mt-6 flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 group">
                          <span>Event Info</span>
                          <ArrowRight
                            size={16}
                            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </button>
                      </Link>
                    </div>

                    <EventThumbnail />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

function EventThumbnail() {
  return (
    <motion.div
      className="w-24 h-24 relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="grid grid-cols-3 grid-rows-3 gap-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-300 to-gray-500"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
