// import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Events = () => {
  const [activeTab, setActiveTab] = useState<"events" | "workshops">("events");
  const [workshopsTabs, setWorkshopsTabs] = useState<"upcomming" | "past">("upcomming");

  const AllworkshopsDetails = [
    {
      name: "Gen Ai for PM's",
      mode: "Online (Zoom)",
      time: "June 07, 2025 07:30 PM",
      link: "/workshop/pm-masterclass",
      completed: false,
    },
    {
      name: "Automate workflows using n8n - Practical Implementation",
      mode: "Online (Zoom)",
      time: "June 09, 2025 07:30 PM",
      link: "/workshop/gen-ai-masterclass-thidtx",
      completed: false,
    },
    {
      name: "How to do data analysis using AI ",
      mode: "Online (Zoom)",
      time: "June 13, 2025 7:30 PM",
      link: "/workshop/da-masterclass-bxwxy",
      completed: false,
    },
    {
      name: "Tableau Zero to Master",
      mode: "Online (Zoom)",
      time: "May 17, 2025 8:00 PM",
      link: "/workshop/da-masterclass-bxwxy",
      completed: true,
    },
    {
      name: "Build YourPersonal Content Creator with AI",
      mode: "Online (Zoom)",
      time: "May 21, 2025 8:00 PM",
      link: "/workshop/gen-ai-masterclass-thidtx",
      completed: true,
    },
    {
      name: "Upgrade Your Data Analysis Techniques with AI",
      mode: "Online (Zoom)",
      time: "23th May, 2025 08:00 PM",
      link: "/workshop/da-masterclass",
      completed: true,
    },
    {
      name: "Automate anything with n8n",
      mode: "Online (Zoom)",
      time: "May 15th 2025 08:00 PM",
      link: "/workshop/gen-ai-masterclass-bxwcy",
      completed: true,
    },
    {
      name: "Aytomate daily workflow using Generative AI tools",
      mode: "Online (Zoom)",
      time: "23rd Feb 2025, 10:30 AM",
      link: "/workshop/gen-ai-masterclass",
      completed: true,
    },
    {
      name: "How to Run High-Performing Meta Ads for Your Business?",
      mode: "Online (Zoom)",
      time: "Feb 21 2025 4:00 PM",
      link: "/workshop/dm-masterclass",
      completed: true,
    },
    {
      name: "UX Designing for Product Management",
      mode: "Online (Zoom)",
      time: "20th February, 07:00 PM",
      link: "/workshop/pm-masterclass",
      completed: true,
    },
  ];

  const AllEventsDetails = [
    {
      name: "Product Inovation Challenge",
      mode: "Online (Zoom )",
      val: "Daily tasks and live sessions",
      time: "May 8th 2025 - May 14th 2025",
      link: "/event/PMtakedown/view",
      completed: true,
    },
  ];

  const workshopsDetails = AllworkshopsDetails.filter((work) => {
    if (workshopsTabs === "upcomming" && work.completed === false) {
      return work;
    }
    if (workshopsTabs === "past" && work.completed === true) {
      return work;
    }
  });

  const eventsDetails = AllEventsDetails.filter((work) => {
    if (workshopsTabs === "upcomming" && work.completed === false) {
      return work;
    }
    if (workshopsTabs === "past" && work.completed === true) {
      return work;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className=" mt-10 md:mt-4 max-w-screen-lg mx-auto p-4 md:p-8">
        <div className="min-h-screen  text-white md:p-6">
          <div className="max-w-4xl mx-auto mt-10">
            <header className="flex justify-between items-center mb-10">
              <motion.h1
                className="text-2xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {activeTab === "events" ? "Events" : "Workshops"}
              </motion.h1>

              <div className="bg-gray-800/50 rounded-full p-1">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("events")}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      activeTab === "events" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Events
                  </button>
                  <button
                    onClick={() => setActiveTab("workshops")}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      activeTab === "workshops" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Workshops
                  </button>
                </div>
              </div>
            </header>

            <div className="bg-gray-800/50 rounded-full p-1 mb-2 max-w-[215px]">
              <div className="flex">
                <button
                  onClick={() => setWorkshopsTabs("upcomming")}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    workshopsTabs === "upcomming" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setWorkshopsTabs("past")}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    workshopsTabs === "past" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Past
                </button>
              </div>
            </div>

            {activeTab === "events" && (
              <div className="flex flex-col lg:flex-row items-start justify-between">
                {eventsDetails.length <= 0 && (
                  <div className="lg:flex-1 w-full">
                    <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/90 rounded-xl p-6 border border-gray-800">
                      <div className="flex justify-between items-center">
                        <p className="text-4xl pl-4">No Events</p>

                        <EventThumbnail num={9} />
                      </div>
                    </div>
                  </div>
                )}
                {eventsDetails.map((event) => (
                  <div className="lg:flex-1 w-full" key={event.time}>
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
                          {/* <div className="text-gray-400 mb-2">5:00 PM</div> */}
                          <h2 className="text-2xl font-semibold mb-4"> {event.name}</h2>

                          <div className="flex items-center text-amber-400 mb-2">
                            <MapPin size={16} className="mr-2" />
                            <span> {event.mode}</span>
                          </div>

                          <div className="flex items-center text-gray-400">
                            <Clock size={16} className="mr-2" />
                            <span>{event.val}</span>
                          </div>

                          <Link to={event.link}>
                            <button className="mt-6 flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 group">
                              <span>Event Info</span>
                              <ArrowRight
                                size={16}
                                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </button>
                          </Link>

                          <p className="text-gray-400 mt-2"> {event.time}</p>
                        </div>

                        <EventThumbnail num={9} />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg items-center justify-center gap-4">
              {activeTab === "workshops" &&
                workshopsDetails.map((workshop) => (
                  <div className="flex flex-col lg:flex-row items-start justify-between h-full" key={workshop.time}>
                    <div className="lg:flex-1 w-full h-full">
                      <motion.div
                        className="bg-gradient-to-br from-gray-800/70 to-gray-900/90 rounded-xl p-6 border border-gray-800 h-full"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{
                          opacity: [1, 0.8, 1],
                          boxShadow: [
                            "0 0 0px rgba(168, 85, 247, 0.0)",
                            "0 0 20px rgba(168, 85, 247, 0.6)",
                            "0 0 0px rgba(168, 85, 247, 0.0)",
                          ],
                          borderColor: [
                            "rgba(168, 85, 247, 0.1)",
                            "rgba(168, 85, 247, 0.6)",
                            "rgba(168, 85, 247, 0.1)",
                          ],
                          y: 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                      >
                        <div className="flex flex-col justify-around h-full">
                          {/* <div className="text-gray-400 mb-2">5:00 PM</div> */}
                          <h2 className="text-2xl font-semibold mb-4">{workshop.name}</h2>

                          <div className="flex items-center text-amber-400 mb-2">
                            <MapPin size={16} className="mr-2" />
                            <span>{workshop.mode}</span>
                          </div>

                          <div className="flex items-center text-gray-400">
                            <Clock size={16} className="mr-2" />
                            <p className="text-gray-400 mt-2">{workshop.time}</p>
                          </div>

                          <Link to={workshop.completed ? "" : workshop.link} aria-disabled>
                            <button
                              className={
                                workshop.completed
                                  ? "mt-6 flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 group hover:cursor-not-allowed"
                                  : "hover:cursor-pointer mt-6 flex items-center bg-gray-950 px-4 py-2 rounded-lg transition-all duration-300 group"
                              }
                            >
                              <span>{workshop.completed ? "Completed" : "Workshop Info"}</span>
                              {workshop.completed ? (
                                <Check
                                  size={16}
                                  className="ml-2 transition-transform duration-300 text-green-600 group-hover:translate-x-1"
                                />
                              ) : (
                                <ArrowRight
                                  size={16}
                                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                />
                              )}
                            </button>
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

function EventThumbnail({ num }: { num: number }) {
  return (
    <motion.div
      className="w-24 h-24 relative hidden sm:block"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="grid grid-cols-3 grid-rows-3 gap-1">
        {Array.from({ length: num }).map((_, i) => (
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
