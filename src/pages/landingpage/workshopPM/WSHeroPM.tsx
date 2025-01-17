import React from "react";
import WSForm from "../workshop/WSForm";
import { WorkshopProvider } from "../../../context/WorkshopContext";

const WSHeroPM = () => {
  return (
    <div className="relative bg-[#1A1F2B] min-h-screen overflow-x-hidden">
      {/* Logo Section */}
      <div className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-gray-900/80 to-transparent">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <div className="w-44 md:w-52 lg:w-64">
            <img
              src="/assets/logo/logo.png"
              alt="AcceleratorX Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative flex flex-col mt-24 mb-8 md:mt-28 lg:flex-row items-start">
          {/* Content Section with Image Banner */}
          <div className="w-full lg:max-w-3xl">
            {/* Hero Image as Banner */}
            <div className="relative mb-4 lg:mb-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl"></div>
                <div className="relative w-full rounded-2xl overflow-hidden bg-[#1A1F2B]">
                  <img
                    src="/assets/pmworkshopcovermobile.png"
                    alt="PM Masterclass"
                    className="w-full h-[250px] object-contain object-center px-4 block lg:hidden"
                  />
                  <img
                    src="/assets/pmworkshopcover.png"
                    alt="PM Masterclass"
                    className="w-full h-[250px] object-contain object-left px-4 hidden lg:block"
                  />
                </div>
              </div>
            </div>

            {/* Heading Section */}
            <div className="relative z-10 text-left">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Product Management Masterclass
              </h1>
              <h2 className="text-white text-2xl font-semibold mb-6">
                Topic: How to transit in Product Management Role in 2025?
              </h2>

              <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl">
                Transitioning into a Product Management role in 2025 requires a
                blend of strategic thinking, technical knowledge, and market
                awareness. Aspiring PMs should focus on mastering core product
                management principles, learning industry-standard tools, and
                developing strong communication and leadership skills. Staying
                updated with emerging technologies like AI and data analytics,
                gaining hands-on experience through real-world projects, and
                preparing for product management interviews will be essential
                for a successful career shift.
              </p>
            </div>

            {/* Company Logo */}
            <div className="flex items-center justify-start gap-6 mb-12">
              <div className="flex items-center gap-4 px-6 py-3 bg-white/5 rounded-2xl backdrop-blur-sm">
                <img
                  src="/companylogo.png"
                  alt="AcceleratorX"
                  className="h-10 md:h-12"
                />
                <div className="h-8 w-px bg-gray-700"></div>
                <div className="text-white">
                  <p className="text-sm font-medium">Powered by</p>
                  <p className="font-semibold">A2M Technologies PVT. LTD.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[500px] mt-8 lg:mt-0">
            <WorkshopProvider>
              <WSForm />
            </WorkshopProvider>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-500/10 to-transparent rounded-tr-full pointer-events-none blur-3xl"></div>
    </div>
  );
};

export default WSHeroPM;
