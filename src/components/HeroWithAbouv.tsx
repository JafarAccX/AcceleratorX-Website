import React from 'react';

interface BannerProps {
  imageUrl?: string;
}

const HeroWithAbouv = ({
  imageUrl = "/hireBanner.png" // Replace with your actual banner image path
}: BannerProps) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Responsive aspect ratio container */}
      <div className="relative w-full">
        {/* For mobile devices - taller aspect ratio */}
        <div className="block sm:hidden relative w-full pb-[40%]">
          <img
            src={imageUrl}
            alt="AcceleratorX with Abouv"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* For tablets and up - wider aspect ratio */}
        <div className="hidden sm:block relative w-full pb-[16%]">
          <img
            src={imageUrl}
            alt="AcceleratorX with Abouv"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051027]/20 via-transparent to-[#051027]/20 pointer-events-none" />
      </div>
    </section>
  );
};

export default HeroWithAbouv;
