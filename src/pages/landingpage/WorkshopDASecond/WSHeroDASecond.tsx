// import { WorkshopProvider } from "../../../context/WorkshopContext";
// import { FaCalendarAlt, FaClock, FaUserGraduate } from "react-icons/fa";
// import WSFormFree from "../workshopGENB/WSFormFree";

// import { motion } from "framer-motion"; 


// const WSHeroDASecond = () => {
//   return (
//     <>
    
//     <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#1d112b] to-[#0b0a12] px-6 py-24 text-white">
      

     

//       <motion.img
//         src={'/assets/genAITools/huggingface.svg'}
//         alt="BTC"
//         className="absolute object-contain top-10 left-10 h-12 w-12  md:h-20 md:w-20 rounded-xl    p-1"
//         initial={{ y: -10 }}
//         animate={{ y: 10 }}
//         transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//       />
//       <motion.img
//         src={'/assets/genAITools/openai-logomark.svg'}
//         alt="USDT"
//         className="absolute bg-white/50 object-contain bottom-20 left-24 h-12 w-12  md:h-20 md:w-20 rounded-xl    p-1"
//         initial={{ y: 10 }}
//         animate={{ y: -10 }}
//         transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
//       />
//       <motion.img
//         src={'/assets/genAITools/zapier.webp'}
//         alt="USDC"
//         className="absolute top-20 right-24 object-contain h-12 w-12  md:h-20 md:w-20 rounded-xl   p-1"
//         initial={{ y: -10 }}
//         animate={{ y: 10 }}
//         transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
//       />
//       <motion.img
//         src={'/assets/genAITools/autogen.jpeg'}
//         alt="USDC"
//          className="absolute bottom-36 object-contain left-80 h-12 w-12  md:h-20 md:w-20 rounded-xl    p-1"
//         initial={{ y: -10 }}
//         animate={{ y: 10 }}
//         transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
//       />
//       <motion.img
//         src={'/assets/genAITools/langchain-seeklogo.png'}
//         alt="USDC"
//          className="absolute bottom-36 bg-white object-contain right-80 h-12 w-12  md:h-20 md:w-20 rounded-xl   p-1"
//         initial={{ y: -10 }}
//         animate={{ y: 10 }}
//         transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
//       />
//       <motion.img
//         src={'/assets/genAITools/crewai.webp'}
//         alt="BNB"
//         className="absolute object-contain bottom-10 right-10 h-12 w-12  md:h-20 md:w-20 rounded-xl   p-1"
//         initial={{ y: 10 }}
//         animate={{ y: -10 }}
//         transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse" }}
//       />

      
//       <div className="relative z-10 mx-auto max-w-4xl h-full flex flex-col items-center text-center">
//         <motion.h1
//           className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Build Your Own   
//           <br className="hidden sm:block" /> AI Agent
//         </motion.h1>

//         <motion.p
//           className="mt-6 text-lg text-gray-300"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           A 90-minute live session where professionals like you go from zero to launching your own AI agent — no complex coding, no prior AI experience needed.
//         </motion.p>

//         <motion.div
//           className="mt-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//         >
//           <button onClick={() => {
//                 // console.log('WSAbout: Register button clicked');
//                 const form = document.getElementById("workshop-registration-form");
//                 console.log("WSAbout: Form element found:", form);
//                 if (form) {
//                   // console.log('WSAbout: Attempting to scroll to form');
//                   form.scrollIntoView({
//                     behavior: "smooth",
//                     block: "center",
//                   });
//                   // console.log('WSAbout: Scroll command executed');
//                 } else {
//                   // console.error('WSAbout: Form element not found with ID "workshop-registration-form"');
//                 }
//               }} className="rounded-full  px-6 py-3 text-sm font-semibold text-black shadow-md transition bg-gray-200">
//             Reserve My Spot Now ↗
//           </button>
//         </motion.div>
//       </div>
//     </div>
//       <div className="relative min-h-screen overflow-x-hidden">
       
//       <div className="absolute inset-0">
        
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(100)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute rounded-full bg-blue-500/30"
//               style={{
//                 width: `${Math.random() * 8 + 2}px`,
//                 height: `${Math.random() * 8 + 2}px`,
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animation: `float ${Math.random() * 10 + 10}s linear infinite`,
//                 animationDelay: `${Math.random() * 5}s`,
//               }}
//             ></div>
//           ))}
//         </div>

         
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-green-500/5 rounded-full blur-3xl"></div>
//       </div>

      

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2  max-w-screen-lg mx-auto items-center justify-between pt-32 pb-16 lg:pt-40 lg:pb-24 gap-12">
         
//           <div className="w-full  text-center lg:text-left">
//             <div className="space-y-6">
//               <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
//                 <span className="animate-ping absolute h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 mr-2"></span>
//                 <span className="text-blue-400 text-sm font-medium">Live Masterclass</span>
//               </div>


//               <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
//                 This isn't just a webinar — it's your entry into building with AI.
// In just 90 minutes, you’ll go hands-on and build your own working AI agent — guided live by experts, with zero fluff and zero overwhelm. No heavy coding, no wasted time — just real, career-boosting skills tailored for working professionals.
//               </p>

               
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//                 {[
//                   {
//                     icon: <FaClock className="text-blue-400 mb-1" />,
//                     label: "Duration",
//                     value: "2 Hours",
//                   },
//                   {
//                     icon: <FaCalendarAlt className="text-indigo-400 mb-1" />,
//                     label: "Date",
//                     value: "July 7, 2025",
//                   },
//                   {
//                     icon: <FaClock className="text-cyan-400 mb-1" />,
//                     label: "Time",
//                     value: " 8:30 PM",
//                   },
//                   {
//                     icon: <FaUserGraduate className="text-yellow-400 mb-1" />,
//                     label: "Level",
//                     value: "Beginner to Intermediate",
//                   },
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center lg:items-start"
//                   >
//                     {item.icon}
//                     <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.label}</p>
//                     <p className="text-white font-semibold mt-1 group-hover:text-blue-300 transition-colors">
//                       {item.value}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div> 
//         </div>
//       </div>

       
//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0) translateX(0);
//             opacity: 0;
//           }
//           50% {
//             opacity: 0.8;
//           }
//           100% {
//             transform: translateY(-100vh) translateX(100px);
//             opacity: 0;
//           }
//         }

//         @keyframes tilt {
//           0%,
//           100% {
//             transform: rotate(-1deg);
//           }
//           50% {
//             transform: rotate(1deg);
//           }
//         }
//       `}</style>
//     </div>  
//     </>
//   );
// };

// export default WSHeroDASecond;


import { WorkshopProvider } from "../../../context/WorkshopContext";
// import { FaCalendarAlt, FaClock, FaUserGraduate } from "react-icons/fa";
import WSFormFree from "../workshopGENB/WSFormFree";
import type React from "react"
import StatsSection from "./StatsSection";

const CryptoHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden " >
       {/* Logo Section */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-6">
          <div className="w-44 md:w-48 relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-full"></div>
            <div className="relative bg-[#0A0F1D]/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-indigo-500/20">
              <img src="/assets/companylogo.png" alt="AcceleratorX Logo" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>


      {/* Purple Glow Background */}
      <div className="absolute left-[-200px] top-1/4 h-[600px] w-[600px] rounded-full bg-purple-700 opacity-30 blur-[150px] pointer-events-none z-0" />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.15]"
        style={{
          backgroundImage: `url('/backgrounds/1_s.png')`,
        }}
      />
      {/* Circular Gradient Blobs */}
      <div className="absolute inset-0">
        {/* Top gradient blob */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, rgba(20, 184, 166, 0.1) 40%, transparent 70%)",
          }}
        />

        {/* Bottom left gradient blob */}
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 50%, transparent 80%)",
          }}
        />

        {/* Additional smaller blob for depth */}
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.05) 60%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:my-12 mt-28 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
             
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">Make Data Your </h1>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
                Superpower
              </h1>
            </div>

            {/* Subtext */}
            <div className="space-y-4 text-slate-300 text-lg max-w-lg">
              <p className="font-medium">Data isn’t just numbers—it’s the key to smart decisions and faster growth. </p>
              <p>
               But for many, it feels confusing. This workshop makes it simple to understand and present data—no code needed.

              </p>
            </div>
          </div>

          {/* Right Illustration */}
          {/* <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
               
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
 
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl shadow-2xl transform rotate-12">
                  <div className="p-6 h-full flex flex-col justify-center items-center">
                    <div className="w-full h-32 bg-gradient-to-r from-pruple-400/20 to-emerald-400/20 rounded-xl mb-4"></div>
                    <div className="space-y-2 w-full">
                      <div className="h-3 bg-slate-600 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-600 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>

                
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  ₿
                </div>

                <div className="absolute top-8 -right-8 w-10 h-10 bg-gradient-to-br from-pruple-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  $
                </div>

                <div className="absolute -bottom-2 -left-8 w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  Ξ
                </div>

                <div className="absolute bottom-12 -right-6 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>

                
                <div className="absolute -top-8 right-8 transform -rotate-12">
                  <div className="w-16 h-20 bg-gradient-to-b from-pruple-400 to-emerald-500 rounded-t-full relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-orange-400 to-red-500 rounded-b-full"></div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                 
                <div className="absolute top-1/4 left-8 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-pruple-400 rounded-full opacity-60"></div>
                  ))}
                </div>

                <div className="absolute bottom-1/4 right-4 grid grid-cols-2 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-emerald-400 rounded-full opacity-60"></div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}

          <div className="w-full ">
            <div className="relative">
              
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>

             
              <div
                className="relative z-10 bg-black/60 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl"
                id="workshop-registration-form"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <WorkshopProvider>
                    <WSFormFree />
                  </WorkshopProvider>
                </div>
              </div>
            </div>
         </div>
        </div>
    <StatsSection />
      </div>


    </section>
  )
}

export default CryptoHeroSection
