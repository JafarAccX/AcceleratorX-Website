export { };

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }

    namespace JSX {
        interface IntrinsicElements {
            'elevenlabs-convai': any;
        }
    }
}
