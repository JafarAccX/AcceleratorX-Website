import{j as e,a as t}from"./index-fw_PX6q_.js";import{U as r}from"./users-DYjimi77.js";const s=[{name:"EXL Service",logo:"/assets/dataAnalyticsLogo/EXL_Service_logo.svg.png"},{name:"Fractal",logo:"/assets/dataAnalyticsLogo/Fractal.png"},{name:"Genpact",logo:"/assets/dataAnalyticsLogo/genpact.png"},{name:"IBM",logo:"/assets/dataAnalyticsLogo/IBM.png"},{name:"MU",logo:"/assets/dataAnalyticsLogo/Mu_sigma_logo.jpg"},{name:"Oracle",logo:"/assets/dataAnalyticsLogo/Oracle.png"},{name:"Quantiphi",logo:"/assets/dataAnalyticsLogo/Quantiphi.png"},{name:"SAP",logo:"/assets/dataAnalyticsLogo/SAP.png"}],n=()=>e.jsx("div",{className:"min-h-screen bg-black",children:e.jsx("section",{className:"py-24",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-1 sm:px-6 lg:px-8",children:[e.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-20",children:[e.jsx("div",{className:"inline-block mb-4",children:e.jsx("div",{className:"flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-500/10 mx-auto backdrop-blur-xl border border-blue-500/20",children:e.jsx(r,{className:"w-10 h-10 text-blue-400"})})}),e.jsx("h2",{className:"text-5xl font-bold text-white mb-6 tracking-tight",children:"Trusted by Industry Leaders"}),e.jsx("p",{className:"text-xl text-blue-200/80 max-w-3xl mx-auto",children:"Join thousands of companies worldwide that trust our platform for their data analytics needs"})]}),e.jsx("div",{className:"relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:w-[100px] before:h-full before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-[100px] after:h-full after:bg-gradient-to-l after:from-black after:to-transparent",children:e.jsx("div",{className:"flex gap-8 logos-slide",children:[...s,...s].map((a,o)=>e.jsx(t.div,{className:"flex-shrink-0 w-[150px] h-[80px] bg-white/[0.03] backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center p-4 hover:bg-white/[0.06] transition-all duration-300 border border-white/10 group",whileHover:{scale:1.05,transition:{duration:.2}},style:{backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:"translate3d(0,0,0)",WebkitTransform:"translate3d(0,0,0)"},children:e.jsx("img",{src:a.logo,alt:a.name,className:"w-full h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-125",loading:"lazy",style:{imageRendering:"auto",WebkitImageRendering:"auto"}})},o))})}),e.jsx("style",{jsx:!0,global:!0,children:`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .logos-slide {
              animation: slide 20s linear infinite;
              animation-play-state: running;
              width: fit-content;
              will-change: transform;
            }

            .logos-slide:hover {
              animation-play-state: paused;
            }
          `})]})})});export{n as default};
