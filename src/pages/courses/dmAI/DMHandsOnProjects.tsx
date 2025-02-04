import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DMHandsOnProjects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Campaign Performance Optimization",
      before: {
        metric: "CTR",
        value: "1.2%",
        description: "Traditional approach",
      },
      after: {
        metric: "CTR",
        value: "3.8%",
        description: "AI-optimized campaign",
      },
    },
    {
      title: "Marketing ROI Enhancement",
      before: {
        metric: "ROI",
        value: "150%",
        description: "Manual optimization",
      },
      after: {
        metric: "ROI",
        value: "320%",
        description: "AI-driven strategy",
      },
    },
    {
      title: "Customer Acquisition Cost",
      before: {
        metric: "CAC",
        value: "$45",
        description: "Standard targeting",
      },
      after: {
        metric: "CAC",
        value: "$28",
        description: "AI-powered targeting",
      },
    },
  ];

  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 highlight-text">
            Hands-On Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card hover:border-neon-yellow/50"
              >
                <h3 className="text-xl font-bold text-neutral-100 mb-8 text-center">
                  {project.title}
                </h3>

                <div className="flex justify-between items-stretch gap-4">
                  <div className="flex-1 p-4 bg-neutral-800/50 rounded-lg">
                    <p className="text-sm text-neutral-100/70 mb-2">Before</p>
                    <p className="text-2xl font-bold text-neutral-100 mb-2">
                      {project.before.value}
                    </p>
                    <p className="text-sm text-neutral-100/70">
                      {project.before.description}
                    </p>
                  </div>

                  <div className="flex-1 p-4 bg-neon-yellow/10 rounded-lg">
                    <p className="text-sm text-neon-yellow mb-2">After</p>
                    <p className="text-2xl font-bold text-neon-yellow mb-2">
                      {project.after.value}
                    </p>
                    <p className="text-sm text-neon-yellow/80">
                      {project.after.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DMHandsOnProjects;
