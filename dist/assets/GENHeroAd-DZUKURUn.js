import{r as o,j as e}from"./index-cmbJLj7A.js";import h from"./EnrollmentModal-BwrB9zQt.js";import{A as l}from"./arrow-right-BXr0KA52.js";import"./enrollmentApi-Dik7Sxl5.js";import"./metaPixel-ClldNqpm.js";import"./index-EBGHqyyu.js";import"./proxy-rXlX-er-.js";const k=()=>{const[m,a]=o.useState(!1),[n,i]=o.useState(!1),[x,u]=o.useState(!1);o.useEffect(()=>{const t=()=>{const r=window.scrollY||document.documentElement.scrollTop;u(r>500)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]);const d=()=>{a(!1),i(!1)},b=async()=>{if(n)try{const t=await fetch("https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AcceleratorX%20Gen%20AI%20Brochure.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FjY2VsZXJhdG9yWCBHZW4gQUkgQnJvY2h1cmUucGRmIiwiaWF0IjoxNzM4NzM1MTI1LCJleHAiOjE3NzAyNzExMjV9.t6cs2LulI_9QaZmYub0mjJL8Yqelj8hDnR6ESIh_8Jc");if(t.ok){const r=await t.blob(),c=window.URL.createObjectURL(r),s=document.createElement("a");s.href=c,s.download="AcceleratorX-GenAI-Brochure.pdf",document.body.appendChild(s),s.click(),window.URL.revokeObjectURL(c),document.body.removeChild(s)}}catch(t){console.error("Error downloading brochure:",t)}d()},p=()=>e.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-gray-800 z-50 transition-transform duration-300 ease-out",style:{transform:x?"translateY(0)":"translateY(100%)"},children:e.jsx("div",{className:"container mx-auto px-4 py-3 sm:py-4",children:e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-2",children:[e.jsxs("div",{className:"text-center sm:text-left",children:[e.jsx("h3",{className:"text-white font-semibold text-base sm:text-lg",children:"Ready to Master Generative AI?"}),e.jsx("p",{className:"text-gray-300 text-xs sm:text-sm",children:"Limited seats available at early bird pricing"})]}),e.jsxs("button",{onClick:()=>a(!0),className:"flex items-center gap-2 px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity",children:["Enroll Now",e.jsx(l,{className:"w-3 h-3 sm:w-4 sm:h-4"})]})]})})});return e.jsxs(e.Fragment,{children:[e.jsx(p,{}),e.jsxs("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-blue-950 to-black",children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(25,68,146,0.15)_0%,rgba(0,0,0,0.2)_100%)] animate-pulse-slow"}),e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsxs("div",{className:"absolute -inset-[10px] opacity-50",children:[e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow"}),e.jsx("div",{className:"absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[90px] animate-float"}),e.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] animate-float-delayed"})]})}),e.jsx("div",{className:"container mx-auto px-4 relative z-20",children:e.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[e.jsx("div",{className:"mb-6 relative overflow-hidden",children:e.jsxs("div",{className:"bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-2.5 border border-blue-400/30 relative",children:[e.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 animate-shimmer"}),e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex flex-row items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"bg-blue-500 p-1 rounded-full",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("span",{className:"text-blue-100 text-sm",children:"Early Bird Discount"})]}),e.jsx("div",{className:"h-3 w-px bg-blue-400/30"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"bg-blue-500 p-1 rounded-full",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("span",{className:"text-blue-100 text-sm",children:"Scholarships Available"})]})]})})]})}),e.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6 pb-4 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 text-transparent bg-clip-text",children:"Ultimate 3-Month Generative AI & AI Agent Building Course"}),e.jsx("p",{className:"text-xl md:text-2xl text-blue-100 mb-8",children:"Launch Your AI Career – Master GenAI, AI Agents & Automation Without Coding"}),e.jsx("p",{className:"text-lg text-blue-200/80 mb-8 max-w-3xl mx-auto",children:"The world is rapidly transitioning towards AI-driven automation, and the demand for AI professionals is growing exponentially. This course is designed for beginners, professionals, and entrepreneurs looking to master Generative AI, AI Agents, and Automation—without requiring coding skills."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsxs("button",{onClick:()=>a(!0),className:"inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-glow-blue",children:["Enroll Now",e.jsx(l,{className:"w-5 h-5"})]}),e.jsxs("button",{onClick:()=>{a(!0),i(!0)},className:"inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-400/30 text-blue-100 font-semibold hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm",children:["Download Brochure",e.jsx(l,{className:"w-5 h-5"})]})]}),e.jsx(h,{isOpen:m,onClose:d,onSubmit:b,isDownload:n})]})})]}),e.jsx("style",{jsx:!0,children:`
        @keyframes rotBGimg {
          from {
            transform: rotate(0deg) scale(2);
          }
          to {
            transform: rotate(360deg) scale(2);
          }
        }

        .animate-rotBGimg {
          animation: rotBGimg 12s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: .7; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: -4s;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }

        .shadow-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
        }

        .shadow-glow-blue {
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.3);
        }
      `})]})};export{k as default};
