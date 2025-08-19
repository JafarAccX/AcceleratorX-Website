import  { useState, useEffect, useRef } from "react";
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

export default function SkillsAssessmentFB() {
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

          ctx.fillStyle = `rgba(56, 189, 248, ${opacity * 0.3})`;
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
            background: "linear-gradient(135deg, #0c4a6e, #0ea5e9)",
            color: "#ffffff",
            border: "1px solid #38bdf8",
            boxShadow: "0 4px 12px rgba(56, 189, 248, 0.25)",
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
    <div className="min-h-screen bg-black text-white p-4 md:p-8 relative overflow-hidden">
      <Toaster />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/10 via-slate-900/40 to-slate-950/60" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-sky-300 via-sky-400 to-blue-400 text-transparent bg-clip-text">
            Skills Assessment
          </h1>
          <p className="text-xl md:text-2xl text-sky-100/90">
            Real-time skills comparison
          </p>
          <p className="mt-4 text-lg text-sky-400 font-medium">{feedback}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-gradient-to-br from-slate-900/80 to-sky-900/20 backdrop-blur-md rounded-xl p-6 order-2 lg:order-1 border border-sky-900/50 shadow-lg shadow-sky-900/20">
            <h3 className="text-xl font-semibold mb-6 text-sky-100">
              Your Skills
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-sky-100">
                      {skill.name}
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-sky-400 font-semibold">
                        {skill.current}%
                      </span>
                      {/* <span className="text-xs text-sky-300/60">
                        (Target: {skill.target}%)
                      </span> */}
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.current}
                    onChange={(e) =>
                      handleSkillChange(index, parseInt(e.target.value))
                    }
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer 
                             accent-sky-500 hover:accent-sky-400 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-sky-900/20 backdrop-blur-md rounded-xl p-6 order-1 lg:order-2 border border-sky-900/50 shadow-lg shadow-sky-900/20">
            <div className="h-[400px] md:h-[600px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="70%"
                  data={chartData}
                >
                  <PolarGrid stroke="#0c4a6e" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#bae6fd", fontSize: 12 }}
                    className="text-xs md:text-sm"
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{ fill: "#7dd3fc" }}
                  />
                  <Radar
                    name="Target"
                    dataKey="Target"
                    stroke="#fff"
                    fill="#fff"
                    fillOpacity={0.3}
                  />
                  <Radar
                    name="Current"
                    dataKey="Current"
                    stroke="#38bdf8"
                    fill="#38bdf8"
                    fillOpacity={0.3}
                  />
                  <Legend
                    wrapperStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.9)",
                      borderRadius: "8px",
                      padding: "8px",
                      color: "#fff",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                      boxShadow: "0 4px 12px rgba(56, 189, 248, 0.1)",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
