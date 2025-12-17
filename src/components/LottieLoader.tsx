import { useEffect, useState } from "react";
import LottieReact from "lottie-react";

// Fix for SSR: lottie-react exports default differently in SSR context
const Lottie = (LottieReact as any).default || LottieReact;

const LottieLoader = ({ size = 540 }: { size?: number }) => {
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);
  const [minVisible, setMinVisible] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("/xmas-lottie/74c69080-9263-49ff-934c-d1851bd94048.json")
      .then((res) => res.json())
      .then((data) => {
        if (mounted) setAnimationData(data);
      })
      .catch(() => {
        // ignore; animation will fallback to CSS spinner
      });
    return () => {
      mounted = false;
    };
  }, []);

  // Keep the loader visible for at least 2000ms on mount so the animation is noticeable
  useEffect(() => {
    const t = setTimeout(() => setMinVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    // Render overlay while we are within the minimum visible window OR while animation data is present
    (minVisible || animationData) ? (
      <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
        <div className="relative flex items-center  ">

          <div style={{ width: size, height: size }} className="flex flex-col items-center justify-center">
            <Lottie animationData={animationData} loop={true} />
            <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin" />
          </div>


        </div>
      </div>
    ) : null
  );
};

export default LottieLoader;
