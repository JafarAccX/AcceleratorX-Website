import { createContext, useContext, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    // Always use dark mode - no state needed
    const theme: Theme = 'dark';

    useEffect(() => {
        // Skip on server-side
        if (typeof window === 'undefined') return;

        const root = document.documentElement;

        // Remove both classes first
        root.classList.remove('light', 'dark');

        // Always add dark class
        root.classList.add('dark');

        // Remove any saved theme preference to enforce dark mode
        localStorage.removeItem('theme');
    }, []);

    // Disabled toggle - does nothing
    const toggleTheme = () => {
        // Theme toggle is disabled — always dark mode
    };

    // Disabled setter - does nothing
    const setTheme = (_newTheme: Theme) => {
        // Theme setting is disabled — always dark mode
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
