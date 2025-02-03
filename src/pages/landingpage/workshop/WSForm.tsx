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
        if (error.code === '23505') {
          if (error.message.includes('workshop_registrations_phone_key')) {
            toast.error('This phone number is already registered for a workshop. Please use a different number or contact support if you need to update your registration.');
          } else if (error.message.includes('workshop_registrations_email_key')) {
            toast.error('This email is already registered for a workshop. Please use a different email or contact support if you need to update your registration.');
          } else {
            toast.error('This registration already exists. Please contact support if you need to update your registration.');
          }
        } else {
          toast.error('Registration failed. Please try again later.');
        }
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
    <div className="bg-[#111] rounded-2xl shadow-2xl p-6 w-full border border-gray-800/30 backdrop-blur-xl">
      

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
              placeholder="Full Name"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
              placeholder="Email Address"
            />
          </div>

          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
              placeholder="Phone Number"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
              placeholder="Education (Highest Qualification)"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm"
              placeholder="Current Designation"
            />
          </div>

          <div className="relative">
            <select
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              required
              className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 rounded-lg border border-gray-800/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-sm appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-gray-500">Years of Experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 transform hover:translate-y-[-1px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-sm flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Registering...</span>
            </>
          ) : (
            'Register for Free'
          )}
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