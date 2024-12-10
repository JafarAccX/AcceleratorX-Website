import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { authService } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey =
  import.meta.env.VITE_SUPABASE_SERVICE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

interface Booking {
  id: number;
  name: string;
  email: string;
  phone: string;
  education: string;
  mentor: string;
  booking_date: string;
  booking_time: string;
  created_at: string;
}

interface Enquiry {
  id: number;
  full_name: string;
  email: string;
  company_name: string;
  company_domain: string;
  project_details: string;
  created_at: string;
}

interface Mentor {
  id: number;
  full_name: string;
  email: string;
  phone_number: string;
  years_of_experience: string;
  designation: string;
  linkedin_url: string;
  additional_info: string;
  created_at: string;
  updated_at: string;
}

const OtherEnquiries: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<
    "bookings" | "enquiries" | "mentors"
  >("bookings");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const userRole = authService.getRole();
    if (userRole !== "admin") {
      navigate("/");
      return;
    }
    fetchData();
  }, [activeTab, navigate]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      switch (activeTab) {
        case "bookings":
          // eslint-disable-next-line no-case-declarations
          const { data: bookingsData, error: bookingsError } = await supabase
            .from("bookings")
            .select("*")
            .order("created_at", { ascending: false });

          if (bookingsError) throw bookingsError;
          setBookings(bookingsData || []);
          break;

        case "enquiries":
          // eslint-disable-next-line no-case-declarations
          const { data: enquiriesData, error: enquiriesError } = await supabase
            .from("enquiries")
            .select("*")
            .order("created_at", { ascending: false });

          if (enquiriesError) throw enquiriesError;
          setEnquiries(enquiriesData || []);
          break;

        case "mentors":
          // eslint-disable-next-line no-case-declarations
          const { data: mentorsData, error: mentorsError } = await supabase
            .from("mentors")
            .select("*")
            .order("created_at", { ascending: false });

          if (mentorsError) throw mentorsError;
          setMentors(mentorsData || []);
          break;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    // If the timeString is already in "HH:MM AM/PM" format, return it as is
    if (timeString.match(/^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/)) {
      return timeString;
    }

    try {
      // For other formats, try to parse and format
      const [hours, minutes] = timeString.split(":");
      const hour = parseInt(hours, 10);
      const minute = parseInt(minutes, 10);

      if (isNaN(hour) || isNaN(minute)) {
        return timeString; // Return original if parsing fails
      }

      const period = hour >= 12 ? "PM" : "AM";
      const formattedHour = hour % 12 || 12;
      const formattedMinute = minute.toString().padStart(2, "0");

      return `${formattedHour}:${formattedMinute} ${period}`;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return timeString; // Return original if any error occurs
    }
  };

  const renderTable = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    if (error) {
      return <div className="text-center py-8 text-red-600">{error}</div>;
    }

    switch (activeTab) {
      case "bookings":
        return bookings.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No 1:1 meeting requests available</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Education
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mentor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.education}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.mentor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatDate(booking.booking_date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatTime(booking.booking_time)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "enquiries":
        return enquiries.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No hiring enquiries available</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Domain
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {enquiry.full_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {enquiry.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {enquiry.company_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {enquiry.company_domain}
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs overflow-hidden text-ellipsis">
                      {enquiry.project_details}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatDate(enquiry.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "mentors":
        return mentors.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No mentor applications available</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Experience
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Designation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  LinkedIn
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mentors.map((mentor) => (
                <tr key={mentor.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {mentor.full_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {mentor.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {mentor.phone_number}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {mentor.years_of_experience}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {mentor.designation}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {mentor.linkedin_url && (
                      <a
                        href={mentor.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        View Profile
                      </a>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatDate(mentor.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Other Enquiries</h1>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              <button
                onClick={() => setActiveTab("bookings")}
                className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === "bookings"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                1:1 Meeting
              </button>
              <button
                onClick={() => setActiveTab("enquiries")}
                className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === "enquiries"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Hire With Us
              </button>
              <button
                onClick={() => setActiveTab("mentors")}
                className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === "mentors"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Mentors
              </button>
            </nav>
          </div>

          <div className="overflow-x-auto">{renderTable()}</div>
        </div>
      </div>
    </div>
  );
};

export default OtherEnquiries;
