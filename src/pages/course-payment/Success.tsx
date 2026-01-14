import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle, Calendar, Copy, ArrowRight, BookOpen } from "lucide-react";
import toast from "react-hot-toast";

interface EnrollmentDetails {
    paymentId: string;
    razorpayPaymentId: string;
    razorpayOrderId: string;
    AmountPaid: number;
    paymentStatus: string;
    paymentDate: string;
    enrollmentId: string;
    enrollmentStatus: string;
    batchName: string;
    courseName: string;
    batchStartDate: string;
    FirstName: string;
    LastName: string;
    Email: string;
}

const CoursePaymentSuccess = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [enrollmentDetails, setEnrollmentDetails] = useState<EnrollmentDetails | null>(null);
    const [loading, setLoading] = useState(true);

    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const fetchEnrollmentDetails = async () => {
            try {
                const baseUrl = apiUrl?.endsWith("/api") ? apiUrl.slice(0, -4) : apiUrl;
                const response = await fetch(`${baseUrl}/course-checkout/enrollment/${orderId}`);
                const data = await response.json();

                if (!response.ok || !data.success) {
                    throw new Error(data.message || "Failed to fetch enrollment details");
                }

                setEnrollmentDetails(data.data);

                // Trigger confetti animation
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                });
            } catch (error) {
                console.error("Error fetching enrollment details:", error);
                toast.error("Failed to load enrollment details");
                // Don't redirect immediately - show error state
            } finally {
                setLoading(false);
            }
        };

        if (orderId) {
            fetchEnrollmentDetails();
        }
    }, [orderId, navigate, apiUrl]);

    const handleCopyClick = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading your enrollment details...</p>
                </div>
            </div>
        );
    }

    if (!enrollmentDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Enrollment Not Found</h2>
                    <p className="text-gray-600 mb-6">We couldn't find the enrollment details for this order. If you've completed the payment, please check your email or contact support.</p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Return to Home <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                    {/* Success Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                            className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6"
                        >
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </motion.div>
                        <h1 className="text-3xl font-bold text-white mb-2">Enrollment Successful!</h1>
                        <p className="text-blue-100">
                            Welcome to {enrollmentDetails.courseName}, {enrollmentDetails.FirstName}!
                        </p>
                    </div>

                    {/* Course Details */}
                    <div className="px-8 py-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Course Details</h2>
                        <div className="bg-blue-50 rounded-xl p-6 space-y-4">
                            <div className="flex items-start gap-4">
                                <BookOpen className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gray-900">Course</h3>
                                    <p className="text-gray-600">{enrollmentDetails.courseName}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Calendar className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gray-900">Batch</h3>
                                    <p className="text-gray-600">{enrollmentDetails.batchName}</p>
                                    <p className="text-sm text-gray-500">
                                        Starts: {new Date(enrollmentDetails.batchStartDate).toLocaleDateString('en-IN', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Transaction Details */}
                    <div className="px-8 py-8 border-t border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Transaction Details</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Amount Paid</span>
                                <span className="text-gray-900 font-medium">₹{enrollmentDetails.AmountPaid?.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Payment ID</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-900 font-medium text-sm">{enrollmentDetails.razorpayPaymentId}</span>
                                    <button
                                        onClick={() => handleCopyClick(enrollmentDetails.razorpayPaymentId)}
                                        className="text-blue-600 hover:text-blue-700"
                                    >
                                        <Copy className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Order ID</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-900 font-medium text-sm">{enrollmentDetails.razorpayOrderId}</span>
                                    <button
                                        onClick={() => handleCopyClick(enrollmentDetails.razorpayOrderId)}
                                        className="text-blue-600 hover:text-blue-700"
                                    >
                                        <Copy className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Date</span>
                                <span className="text-gray-900 font-medium">
                                    {new Date(enrollmentDetails.paymentDate).toLocaleString('en-IN')}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Status</span>
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                                    {enrollmentDetails.paymentStatus}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Next Steps */}
                    <div className="px-8 py-8 bg-gray-50 border-t border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h2>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex gap-3">
                                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                                <span>Check your email ({enrollmentDetails.Email}) for onboarding instructions</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                                <span>Join the exclusive student community on Discord/Slack</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                                <span>Complete your profile to get personalized recommendations</span>
                            </li>
                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="px-8 py-6 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                        >
                            Return to Home
                        </Link>
                        <Link
                            to="/dashboard"
                            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Go to Dashboard <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CoursePaymentSuccess;
