
import { useState } from 'react';
import EnrollmentModal from './EnrollmentModal';
import { useCourseContext } from '../context/courseContext';

interface HeroWithAbouvProps {
  courseName?: string;
  abouv_logo?: string;
  abouv_link?: string;
}

const HeroWithAbouv = ({ abouv_logo = "/abouv.svg",
  abouv_link = "https://abouv.com", courseName }: HeroWithAbouvProps) => {
  console.log('HeroWithAbouv: EnrollmentModal import:', typeof EnrollmentModal, EnrollmentModal);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedCourse, selectedCourse } = useCourseContext();

  const handleBannerClick = () => {
    // Priority: Prop courseName > Context selectedCourse > "General"
    const courseToSet = courseName || selectedCourse || "General";
    setSelectedCourse(courseToSet);
    setIsModalOpen(true);
  };

  return (
    <section className="w-full px-4 py-6">
      <div className="mx-auto max-w-7xl cursor-pointer" onClick={handleBannerClick}>
        <img
          src="/redesign/christmas/cristmas-banner.jpg"
          alt="AcceleratorX Cristmas sale"
          className="mx-auto mb-6 w-full object-cover rounded-2xl"
        />
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        customData={{
          utm_campaign: "Christmas_Sale_Scholarship",
          utm_content: "Banner_Click_40_Percent_Off"
        }}
      />
      {/* Main container with responsive padding */}
      <div className="mx-auto max-w-7xl">

        <div className="relative rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] shadow-xl">

          <div className="relative rounded-[10px] bg-slate-900/90 backdrop-blur-xl">

            <div className="flex flex-col space-y-4 p-4 md:flex-row md:items-center md:justify-between md:space-y-0 md:p-6 lg:p-8">

              <div className="flex items-center justify-center space-x-4 md:justify-start">
                <img
                  src="/redesign/logo-no-bg.webp" alt="company logo - professional certificate in product management online"
                  className="h-12 w-auto object-contain transition-transform hover:scale-105 md:h-12 lg:h-14"
                />
                <div className="h-8 w-px bg-gray-400/20 md:h-10 lg:h-12" />
                <a
                  href={abouv_link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group rounded-lg bg-white p-2 transition-all hover:bg-white hover:shadow-lg hover:shadow-blue-500/20 md:p-3"
                >
                  <img
                    src={abouv_logo}
                    alt="Abouv"
                    className="h-8 w-auto transition-transform group-hover:scale-105 md:h-8 lg:h-10"
                  />
                </a>
              </div>


              <div className="flex flex-col items-center space-y-2 text-center md:items-start md:space-y-3 md:text-left lg:space-y-4">
                <p className="text-sm font-medium text-blue-400 md:text-base lg:text-lg">
                  We Go Beyond Learning
                </p>
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-light text-gray-200 md:text-base lg:text-lg">
                    We Accelerate Your {" "}
                    <span className="animate-pulse text-lg font-semibold text-yellow-400 md:text-xl lg:text-2xl">
                      AI Transformation.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithAbouv;