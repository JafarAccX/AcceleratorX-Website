import { useEffect, useRef, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import './JetAnimation.css';

interface JetAnimationProps {
    className?: string;
    speed?: number;
    loop?: boolean;
}

const JetAnimation = ({ className = '', speed = 2, loop = true }: JetAnimationProps) => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const [animationData, setAnimationData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Load the animation JSON
        fetch('/theme/republic-jet-animation.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load animation');
                }
                return response.json();
            })
            .then(data => {
                setAnimationData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Error loading jet animation:', err);
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        if (lottieRef.current && animationData) {
            lottieRef.current.setSpeed(speed);
        }
    }, [speed, animationData]);

    if (isLoading) {
        return null; // or a loading skeleton
    }

    if (error || !animationData) {
        return null; // Fail silently to not break the layout
    }

    return (
        <div className={`jet-animation-container ${className}`}>
            <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={loop}
                autoplay={true}
                initialSegment={[0, 500]}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default JetAnimation;
