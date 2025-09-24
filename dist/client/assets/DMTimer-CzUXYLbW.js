import { r as reactExports, j as jsxRuntimeExports } from "./main-CfA5h11a.js";
const DMTimer = ({
  initialHours = 120,
  initialMinutes = 0,
  initialSeconds = 0,
  className = "",
  targetDate = ""
  // Default empty string
}) => {
  const getEndTime = () => {
    const stored = localStorage.getItem("dmTimer_endTime");
    if (stored) {
      const storedTime = parseInt(stored);
      const now = Date.now();
      if (storedTime <= now) {
        const newEndTime = now + 5 * 24 * 60 * 60 * 1e3;
        localStorage.setItem("dmTimer_endTime", newEndTime.toString());
        return newEndTime;
      }
      return storedTime;
    }
    if (targetDate) {
      const targetTime = new Date(targetDate).getTime();
      localStorage.setItem("dmTimer_endTime", targetTime.toString());
      return targetTime;
    }
    const end = Date.now() + (initialHours * 36e5 + initialMinutes * 6e4 + initialSeconds * 1e3);
    localStorage.setItem("dmTimer_endTime", end.toString());
    return end;
  };
  const calculateTimeLeft = () => {
    const difference = getEndTime() - Date.now();
    if (difference <= 0) {
      localStorage.removeItem("dmTimer_endTime");
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    return {
      days: Math.floor(difference / (1e3 * 60 * 60 * 24)),
      hours: Math.floor(difference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
      minutes: Math.floor(difference % (1e3 * 60 * 60) / (1e3 * 60)),
      seconds: Math.floor(difference % (1e3 * 60) / 1e3)
    };
  };
  const [timeLeft, setTimeLeft] = reactExports.useState(calculateTimeLeft());
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);
      if (newTime.days === 0 && newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds === 0) {
        localStorage.removeItem("dmTimer_endTime");
      }
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
  const formatNumber = (num) => String(num).padStart(2, "0");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex gap-2 items-center ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-blue-500/20 px-2 py-1 rounded-md", children: [
      formatNumber(timeLeft.days),
      "d"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-blue-500/20 px-2 py-1 rounded-md", children: [
      formatNumber(timeLeft.hours),
      "h"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-blue-500/20 px-2 py-1 rounded-md", children: [
      formatNumber(timeLeft.minutes),
      "m"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-blue-500/20 px-2 py-1 rounded-md", children: [
      formatNumber(timeLeft.seconds),
      "s"
    ] })
  ] }) });
};
export {
  DMTimer as D
};
