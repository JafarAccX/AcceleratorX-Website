import React, { useState, useEffect, useRef } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  target: number;
  current: number;
}

const skillNames = [
  "Market Research",
  "Data Analysis",
  "User Experience",
  "Problem Solving",
  "Go-To Market",
  "Stakeholder Management",
  "Technical Concepts",
  "Interview Readiness",
];

const getRandomSkills = () =>
  skillNames.map((name) => ({
    name,
    target: Math.floor(Math.random() * 20) + 80,
    current: Math.floor(Math.random() * 60) + 20,
  }));

export default function SkillsAssessmentEIE() {
  const [skills, setSkills] = useState<Skill[]>(getRandomSkills());
  const [feedback, setFeedback] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = `${canvas.offsetWidth}px`;
      canvas.style.height = `${canvas.offsetHeight}px`;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const gridSize = 30;
    const dotSize = 2;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.floor(canvas.width / gridSize);
      const rows = Math.floor(canvas.height / gridSize);

      const centerX = canvas.width / (2 * window.devicePixelRatio);
      const centerY = canvas.height / (2 * window.devicePixelRatio);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;

          const distance = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
          );

          const maxDistance = Math.sqrt(
            Math.pow(canvas.width / (2 * window.devicePixelRatio), 2) +
              Math.pow(canvas.height / (2 * window.devicePixelRatio), 2)
          );

          let opacity = 0.5 - (distance / maxDistance) * 0.5;
          opacity = Math.max(0, opacity);

          ctx.fillStyle = `rgba(92, 179, 56, ${opacity * 0.2})`;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animate);
    };
  }, []);

  useEffect(() => {
    const currentAverage =
      skills.reduce((acc, skill) => acc + skill.current, 0) / skills.length;

    if (currentAverage >= 85) {
      toast.success(
        "Outstanding Achievement! You've surpassed 85% overall proficiency! 🏆",
        {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#0F0F0F",
            color: "#ffffff",
            border: "1px solid #5CB338",
            boxShadow: "0 4px 12px rgba(92, 179, 56, 0.25)",
          },
        }
      );
    }

    if (currentAverage >= 85) {
      setFeedback("Exceptional mastery of skills!");
    } else if (currentAverage >= 70) {
      setFeedback("Strong progress, approaching excellence!");
    } else {
      setFeedback("Continue developing your skills!");
    }
  }, [skills]);

  const handleSkillChange = (index: number, value: number) => {
    const newSkills = [...skills];
    newSkills[index] = { ...newSkills[index], current: value };
    setSkills(newSkills);
  };

  const chartData = skills.map((skill) => ({
    subject: skill.name,
    Target: skill.target,
    Current: skill.current,
  }));

  return (
    <section className="py-32 bg-gradient-to-b from-black via-black/95 to-black text-white relative overflow-hidden">
      <Toaster />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-15"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(92,179,56,0.08)_0%,rgba(0,0,0,0)_65%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg font-medium text-[#5CB338] uppercase tracking-wider mb-4"
          >
            Master Your Skills
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold text-white mb-8"
          >
            Skills <span className="text-[#5CB338]">Assessment</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-[#5CB338] font-medium bg-[#5CB338]/5 inline-block px-6 py-2 rounded-full"
          >
            {feedback}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-3xl p-10 border border-white/5 
                     hover:border-[#5CB338]/30 transition-all duration-500 shadow-2xl 
                     shadow-[#5CB338]/5 hover:shadow-[#5CB338]/10"
          >
            <h3 className="text-2xl font-semibold mb-10 text-white flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#5CB338] rounded-full"></span>
              Rate Your Skills
            </h3>
            <div className="grid gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  key={skill.name}
                  className="space-y-3 group"
                >
                  <div className="flex justify-between items-center">
                    <label className="text-base font-medium text-white group-hover:text-[#5CB338] transition-colors duration-200">
                      {skill.name}
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#5CB338] font-medium bg-[#5CB338]/10 px-3 py-1 rounded-full">
                        {skill.current}%
                      </span>
                    </div>
                  </div>
                  <div className="relative h-2.5">
                    <div className="absolute inset-0 bg-white/5 rounded-full" />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={skill.current}
                      onChange={(e) =>
                        handleSkillChange(index, parseInt(e.target.value))
                      }
                      className="absolute inset-0 w-full h-full appearance-none cursor-pointer bg-transparent
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 
                               [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full 
                               [&::-webkit-slider-thumb]:bg-[#5CB338] [&::-webkit-slider-thumb]:cursor-pointer
                               [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200
                               [&::-webkit-slider-thumb]:hover:scale-125 [&::-webkit-slider-thumb]:hover:bg-white
                               [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-[#5CB338]
                               [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-black/20"
                    />
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#5CB338] to-[#7ed957] rounded-full transition-all duration-300"
                      style={{ width: `${skill.current}%`, maxWidth: "100%" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-3xl p-10 border border-white/5 
                     hover:border-[#5CB338]/30 transition-all duration-500 shadow-2xl 
                     shadow-[#5CB338]/5 hover:shadow-[#5CB338]/10"
          >
            <div className="h-[600px] -mx-12">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="60%" data={chartData}>
                  <PolarGrid stroke="#5CB338" strokeOpacity={0.1} strokeWidth={1} />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ 
                      fill: "#fff", 
                      fontSize: 11,
                      fontWeight: 500,
                      dy: 5,
                    }}
                    tickLine={{ stroke: "#5CB338", strokeOpacity: 0.2 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={false}
                    axisLine={false}
                    stroke="none"
                  />
                  <Radar
                    name="Target"
                    dataKey="Target"
                    stroke="rgba(255, 255, 255, 0.8)"
                    fill="rgba(255, 255, 255, 0.1)"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Current"
                    dataKey="Current"
                    stroke="#5CB338"
                    fill="#5CB338"
                    fillOpacity={0.25}
                    strokeWidth={2}
                  />
                  <Legend
                    wrapperStyle={{
                      backgroundColor: "rgba(15, 15, 15, 0.9)",
                      borderRadius: "12px",
                      padding: "12px 16px",
                      color: "#fff",
                      border: "1px solid rgba(92, 179, 56, 0.2)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
