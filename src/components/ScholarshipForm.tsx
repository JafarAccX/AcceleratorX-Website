import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { XIcon, CheckCircle } from 'lucide-react';

type EducationLevel = 'bachelors' | 'masters' | 'phd' | 'others';

interface FormData {
  name: string;
  email: string;
  phone: string;
  education: EducationLevel;
  isEnthusiastic: 'YES' | 'NO';
  isAIRelated: 'YES' | 'NO';
  careerLikelihood: string;
  scholarshipReasons: string;
  courseMotivation: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  education: 'bachelors',
  isEnthusiastic: 'NO',
  isAIRelated: 'NO',
  careerLikelihood: '',
  scholarshipReasons: '',
  courseMotivation: ''
};

const ScholarshipForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>('');

  const checkDuplicates = async (email: string, phone: string) => {
    const { data: emailCheck, error: emailError } = await supabase
      .from('scholarship_applications')
      .select('id')
      .eq('email', email)
      .maybeSingle();

    if (emailError) {
      console.error('Error checking email:', emailError);
      return;
    }

    if (emailCheck) {
      throw new Error('This email has already been used for a scholarship application.');
    }

    const { data: phoneCheck, error: phoneError } = await supabase
      .from('scholarship_applications')
      .select('id')
      .eq('phone', '+91' + phone)
      .maybeSingle();

    if (phoneError) {
      console.error('Error checking phone:', phoneError);
      return;
    }

    if (phoneCheck) {
      throw new Error('This phone number has already been used for a scholarship application.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Check for duplicates first
      await checkDuplicates(formData.email, formData.phone);

      const { error: submitError } = await supabase
        .from('scholarship_applications')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: '+91' + formData.phone,
            education: formData.education,
            is_enthusiastic: formData.isEnthusiastic === 'YES',
            is_ai_related: formData.isAIRelated === 'YES',
            career_likelihood: formData.careerLikelihood,
            scholarship_reasons: formData.scholarshipReasons,
            course_motivation: formData.courseMotivation
          }
        ]);

      if (submitError) {
        if (submitError.code === '23505') { // Unique violation code
          if (submitError.message.includes('email')) {
            throw new Error('This email has already been used for a scholarship application.');
          } else if (submitError.message.includes('phone')) {
            throw new Error('This phone number has already been used for a scholarship application.');
          }
        }
        throw submitError;
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 w-full max-w-md text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-3">Thank You!</h2>
          <p className="text-gray-300 text-sm mb-6">
            Your application for scholarship has been submitted successfully. We will review your application and get back to you soon.
          </p>
          <button
            onClick={onClose}
            className="bg-blue-500 text-white rounded py-2 px-6 text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-400 hover:text-white transition-colors"
        >
          <XIcon className="w-4 h-4" />
        </button>

        <h2 className="text-lg font-semibold text-white mb-3">Scholarship Application</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded text-red-200 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded px-2.5 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded px-2.5 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <span className="text-gray-400 text-sm">+91</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                className="w-full bg-gray-800 border border-gray-700 rounded px-2.5 py-1.5 pl-10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <select
              name="education"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded px-2.5 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              value={formData.education}
              onChange={handleChange}
            >
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
              <option value="phd">PhD</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="space-y-2.5">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Are you enthusiastic for AI?</label>
              <div className="grid grid-cols-2 gap-2">
                <label className="block">
                  <input
                    type="radio"
                    name="isEnthusiastic"
                    value="YES"
                    required
                    checked={formData.isEnthusiastic === 'YES'}
                    onChange={handleChange}
                    className="sr-only peer "
                  />
                  <div className="text-center text-white py-1 text-sm border border-gray-700 rounded peer-checked:bg-blue-500 peer-checked:border-blue-500 cursor-pointer transition-colors">
                    Yes
                  </div>
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="isEnthusiastic"
                    value="NO"
                    checked={formData.isEnthusiastic === 'NO'}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="text-center text-white py-1 text-sm border border-gray-700 rounded peer-checked:bg-blue-500 peer-checked:border-blue-500 cursor-pointer transition-colors">
                    No
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Are you related to any field that directly deals with AI?</label>
              <div className="grid grid-cols-2 gap-2">
                <label className="block">
                  <input
                    type="radio"
                    name="isAIRelated"
                    value="YES"
                    required
                    checked={formData.isAIRelated === 'YES'}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="text-center py-1 text-sm border border-gray-700 rounded peer-checked:bg-blue-500 peer-checked:border-blue-500 cursor-pointer transition-colors text-white">
                    Yes
                  </div>
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="isAIRelated"
                    value="NO"
                    checked={formData.isAIRelated === 'NO'}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="text-center py-1 text-sm border border-gray-700 rounded peer-checked:bg-blue-500 peer-checked:border-blue-500 cursor-pointer transition-colors text-white">
                    No
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">How likely are you willing to start your career with GenAI?</label>
              <input
                type="text"
                name="careerLikelihood"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded px-2.5 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.careerLikelihood}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Give us three reasons to provide you scholarship</label>
              <textarea
                name="scholarshipReasons"
                required
                rows={2}
                className="w-full bg-gray-800 border border-gray-700 rounded px-2.5 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                value={formData.scholarshipReasons}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Why do you want to pursue this course?</label>
              <textarea
                name="courseMotivation"
                required
                rows={2}
                className="w-full bg-gray-800 border border-gray-700 rounded px-2.5 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                value={formData.courseMotivation}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 bg-blue-500 text-white rounded py-1.5 text-sm font-medium hover:bg-blue-600 transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-800 text-gray-300 rounded py-1.5 text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScholarshipForm;
