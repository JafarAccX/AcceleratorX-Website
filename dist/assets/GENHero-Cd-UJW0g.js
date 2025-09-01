import{r as l,j as e}from"./index-C99v9JkT.js";import x from"./EnrollmentModal-CWu_msSP.js";import{D as p}from"./DMTimer-B8QXZhCO.js";import{A as c}from"./arrow-right-ZPVZRpm-.js";import"./enrollmentApi-CDCPqzxx.js";import"./index-CdTRri50.js";import"./proxy-DbLqu3Ep.js";const I=()=>{const[d,s]=l.useState(!1),[a,n]=l.useState(!1),r=()=>{s(!1),n(!1)},m=async()=>{if(a)try{const o=await fetch("https://grdwabozcrwjwdytwpqa.supabase.co/storage/v1/object/sign/resumes/AcceleratorX%20Gen%20AI%20Brochure.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVzL0FjY2VsZXJhdG9yWCBHZW4gQUkgQnJvY2h1cmUucGRmIiwiaWF0IjoxNzM4NzM1MTI1LCJleHAiOjE3NzAyNzExMjV9.t6cs2LulI_9QaZmYub0mjJL8Yqelj8hDnR6ESIh_8Jc");if(o.ok){const u=await o.blob(),i=window.URL.createObjectURL(u),t=document.createElement("a");t.href=i,t.download="AcceleratorX-GenAI-Brochure.pdf",document.body.appendChild(t),t.click(),window.URL.revokeObjectURL(i),document.body.removeChild(t)}}catch(o){console.error("Error downloading brochure:",o)}r()};return e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden bg-black",children:[e.jsxs("div",{className:"absolute inset-0 z-0",children:[e.jsx("div",{className:"absolute inset-0 bg-[#0A1B33]/80 z-10"}),e.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"absolute w-full h-full object-cover",children:e.jsx("source",{src:"/assets/videos/loopvideo.mp4",type:"video/mp4"})})]}),e.jsx("div",{className:"container mx-auto px-4 relative z-20",children:e.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[e.jsxs("div",{className:"inline-flex mt-16 items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 mb-6",children:[e.jsx("span",{className:"text-white text-sm font-medium",children:"Early Bird Offer ends in:"}),e.jsx(p,{targetDate:"2025-02-10T23:59:59",className:"text-white font-semibold"})]}),e.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6 pb-4 bg-white text-transparent bg-clip-text",children:"Ultimate 3-Month Generative AI & AI Agent Building Course"}),e.jsx("p",{className:"text-xl md:text-2xl text-gray-300 mb-8",children:"Launch Your AI Career – Master GenAI, AI Agents & Automation Without Coding"}),e.jsx("p",{className:"text-lg text-gray-400 mb-8 max-w-3xl mx-auto",children:"The world is rapidly transitioning towards AI-driven automation, and the demand for AI professionals is growing exponentially. This course is designed for beginners, professionals, and entrepreneurs looking to master Generative AI, AI Agents, and Automation—without requiring coding skills."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsxs("button",{onClick:()=>s(!0),className:"inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity",children:["Enroll Now",e.jsx(c,{className:"w-5 h-5"})]}),e.jsxs("button",{onClick:()=>{s(!0),n(!0)},className:"inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-500 text-white font-semibold hover:bg-white/5 transition-colors",children:["Download Brochure",e.jsx(c,{className:"w-5 h-5"})]})]}),e.jsx(x,{isOpen:d,onClose:r,onSubmit:m,isDownload:a})]})})]}),e.jsx("style",{jsx:!0,children:`
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

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .7; }
        }
      `})]})};export{I as default};
