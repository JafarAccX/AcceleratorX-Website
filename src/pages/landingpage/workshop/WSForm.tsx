import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import toast from 'react-hot-toast';

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

  const zoomMeetingDetails = {
    link: "https://zoom.us/meeting/tJcqf--trDgrH9RuX7KD2I5NfCz8uPqufM0O/calendar/google/add?meetingMasterEventId=uB-iF_r3SfiQ3rr0FefvGg",
    meetingId: "tJcqf--trDgrH9RuX7KD2I5NfCz8uPqufM0O",
    time: "Jan 12, 2025 11:00 PM India"
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

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
      const { error } = await supabase
        .from('workshop_registrations')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            education: formData.education,
            designation: formData.designation,
            years_of_experience: formData.yearsOfExperience,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Registration error:', error);
        if (error.code === '23505') {
          toast.error('You have already registered with this email or phone number');
        } else if (error.code === '42501') {
          toast.error('Unable to register. Please try again later.');
        } else {
          toast.error('Registration failed. Please try again.');
        }
        return;
      }

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
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 w-full">
      <div className="text-center mb-4 md:mb-6">
        <h3 className="text-xl md:text-2xl font-bold">Register NOW!</h3>
        <p className="text-sm text-gray-500 mt-2">Limited seats available</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
        <div className="space-y-3 md:space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <div className="flex gap-2">
            <div className="px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base border rounded-lg bg-gray-50 text-gray-700 w-20 md:w-24 flex items-center justify-center">
              +91
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <input
            type="text"
            name="education"
            placeholder="Education (Highest Qualification)"
            value={formData.education}
            onChange={handleChange}
            required
            className="w-full px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            type="text"
            name="designation"
            placeholder="Current Designation"
            value={formData.designation}
            onChange={handleChange}
            required
            className="w-full px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <select
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            required
            className="w-full px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Years of Experience</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all
            ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow-lg'}`}
        >
          {isSubmitting ? 'Registering...' : 'REGISTER FOR FREE'}
        </button>

        <p className="text-xs md:text-sm text-gray-500 text-center">
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