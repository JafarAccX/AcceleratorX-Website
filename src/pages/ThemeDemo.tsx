import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/**
 * Theme Demo Page - Demonstrates the dark/light theme implementation
 * This page shows various UI components in both themes
 */
export default function ThemeDemo() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Palette className="w-12 h-12 text-blue-500" />
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Theme System Demo
                        </h1>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        Current theme: <span className="font-semibold text-blue-500">{theme}</span>
                    </p>
                    <button
                        onClick={toggleTheme}
                        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                    >
                        {theme === 'light' ? (
                            <>
                                <Moon className="w-5 h-5" />
                                Switch to Dark Mode
                            </>
                        ) : (
                            <>
                                <Sun className="w-5 h-5" />
                                Switch to Light Mode
                            </>
                        )}
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {/* Card 1 - Basic Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Basic Card
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            This is a basic card component with theme support.
                        </p>
                        <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 rounded-lg transition-colors">
                            Action
                        </button>
                    </div>

                    {/* Card 2 - Highlighted Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl shadow-lg p-6 border border-blue-200 dark:border-blue-800 transition-colors">
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                            Highlighted Card
                        </h3>
                        <p className="text-blue-700 dark:text-blue-300 mb-4">
                            A card with gradient background and custom colors.
                        </p>
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors">
                            Primary Action
                        </button>
                    </div>

                    {/* Card 3 - Glass Effect */}
                    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Glass Effect
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Card with glassmorphism effect and backdrop blur.
                        </p>
                        <button className="w-full bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-white py-2 rounded-lg transition-colors">
                            Glass Action
                        </button>
                    </div>
                </div>

                {/* Form Example */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-12 transition-colors">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Form Components
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Text Input
                            </label>
                            <input
                                type="text"
                                placeholder="Enter text..."
                                className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Select Input
                            </label>
                            <select className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Textarea
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Enter description..."
                                className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            />
                        </div>
                    </div>
                </div>

                {/* Button Variants */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-12 transition-colors">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Button Variants
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                            Primary
                        </button>
                        <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-2 rounded-lg transition-colors">
                            Secondary
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors">
                            Success
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors">
                            Danger
                        </button>
                        <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-white px-6 py-2 rounded-lg transition-colors">
                            Outline
                        </button>
                        <button className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 px-6 py-2 rounded-lg transition-colors">
                            Link
                        </button>
                    </div>
                </div>

                {/* Text Hierarchy */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 transition-colors">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Text Hierarchy
                    </h2>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Heading 1 - Main Title
                        </h1>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                            Heading 2 - Section Title
                        </h2>
                        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                            Heading 3 - Subsection
                        </h3>
                        <p className="text-lg text-gray-900 dark:text-white">
                            Body text - Large paragraph text
                        </p>
                        <p className="text-base text-gray-700 dark:text-gray-300">
                            Body text - Regular paragraph text
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Small text - Secondary information
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                            Extra small text - Muted information
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
