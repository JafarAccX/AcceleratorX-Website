import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import toast from 'react-hot-toast';
import { useWorkshop } from '../../../context/WorkshopContext';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
});

interface FormData {
  name: string;
  email: string;
  phone: string;
  education: string;
  designation: string;
  yearsOfExperience: string;
}

const WSForm = () => {
  const { workshopType, zoomMeetingDetails } = useWorkshop();
  // console.log('WSForm - Current workshop type:', workshopType);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    education: '',
    designation: '',
    yearsOfExperience: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // console.log('Form submission - workshop type:', workshopType);

    // Validation
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (formData.phone.length !== 10 || !/^\d+$/.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    setIsSubmitting(true);

    try {
      // Convert camelCase to snake_case for database
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        education: formData.education,
        designation: formData.designation,
        years_of_experience: formData.yearsOfExperience,
        workshop_type: workshopType,
        created_at: new Date().toISOString(),
      };
      
      // console.log('Submitting to database:', submissionData);

      const { error } = await supabase
        .from('workshop_registrations')
        .insert([submissionData]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      // console.log('Submission successful');

      // Show success toast and modal
      toast.success('Registration successful!');
      setShowModal(true);
      
      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        education: '',
        designation: '',
        yearsOfExperience: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-6 md:p-8 w-full border border-gray-800">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Register NOW!</h3>
        <p className="text-sm text-gray-400 mt-2">Limited seats available</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
        <div className="space-y-4 md:space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all hover:bg-gray-800"
          />

          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all hover:bg-gray-800"
          />

          <div className="flex gap-3">
            <div className="px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base bg-gray-800 border border-gray-700 rounded-xl text-gray-300 w-20 md:w-24 flex items-center justify-center">
              +91
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all hover:bg-gray-800"
            />
          </div>

          <input
            type="text"
            name="education"
            placeholder="Education (Highest Qualification)"
            value={formData.education}
            onChange={handleChange}
            required
            className="w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all hover:bg-gray-800"
          />

          <input
            type="text"
            name="designation"
            placeholder="Current Designation"
            value={formData.designation}
            onChange={handleChange}
            required
            className="w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all hover:bg-gray-800"
          />

          <select
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            required
            className="w-full px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all hover:bg-gray-800"
          >
            <option value="" className="bg-gray-900">Years of Experience</option>
            <option value="0-1" className="bg-gray-900">0-1 years</option>
            <option value="1-3" className="bg-gray-900">1-3 years</option>
            <option value="3-5" className="bg-gray-900">3-5 years</option>
            <option value="5-10" className="bg-gray-900">5-10 years</option>
            <option value="10+" className="bg-gray-900">10+ years</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all
            ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5'}`}
        >
          {isSubmitting ? 'Registering...' : 'REGISTER FOR FREE'}
        </button>

        <p className="text-xs md:text-sm text-gray-400 text-center">
          By continuing, you agree to our Terms and Privacy Policy
        </p>
      </form>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Registering!</h3>
              <p className="text-gray-600 mb-6">
                We're excited to have you join us for the workshop on {zoomMeetingDetails.time}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
                <h4 className="font-semibold text-gray-800 mb-2">Zoom Meeting Details:</h4>
                <p className="text-sm text-gray-600 mb-2">Meeting ID: {zoomMeetingDetails.meetingId}</p>
                <p className="text-sm text-gray-600 mb-2">Time: {zoomMeetingDetails.time}</p>
                <a
                  href={zoomMeetingDetails.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                >
                  Add to Calendar
                </a>
              </div>
              <p className="text-sm text-gray-500">
                See you in the workshop!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WSForm;