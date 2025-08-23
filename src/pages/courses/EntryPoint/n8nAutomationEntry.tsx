import React from "react";

// Use a responsive <picture> so only one image loads depending on viewport.
// This also makes the image the LCP element for this route.

const N8nAutomationEntry = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Responsive LCP image */}
      <picture>
        <source media="(min-width: 768px)" srcSet="/n8n-commingsoon.webp" />
        <img
          src="/n8n-mobile.webp"
          alt="n8n Automation Coming Soon"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
          loading="eager"
        />
      </picture>

      {/* CTA */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeJxgV3bMDrcy4m8bGdEIHqR0GLZrvVeZ5QF0itPIQqgDaC2g/viewform?usp=sharing&ouid=112961186201792362694"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="relative mt-96 md:mt-32 sm:mt-44 xs:mt-48 px-10 py-4 text-lg font-semibold text-white bg-[#1a71f6] hover:bg-[#1558b0] rounded-xl shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 w-[90vw] max-w-xs text-center"
      >
        Join the Waitlist
      </a>
    </div>
  );
};

export default N8nAutomationEntry;