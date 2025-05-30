import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, Briefcase } from "lucide-react";
import { useUser } from "../../context/UserContext";
import { PiFilmScriptFill } from "react-icons/pi";

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // otplessAuth.logout();
    // updateAuthState();
    // setIsOpen(false);
    logout();
    navigate("/");
  };

  if (!user) return null;

  console.log("user -- context", user);

  const displayName = user.FirstName + " " + user.LastName || "User";
  const displayEmail = user.Mobile || user.Email || "";
  const userInitial = user.FirstName[0]?.toUpperCase() + " " + user.LastName[0]?.toUpperCase() || "U";

  const enrolledUser = user.CourseEnrolled;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 rounded-full bg-white/10 p-1 text-sm font-semibold text-gray-700 hover:bg-white/20"
      >
        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
          {userInitial}
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <div className="px-4 py-2 border-b">
              <p className="text-sm font-medium text-gray-900">{displayName}</p>
              <p className="text-sm text-gray-500">{displayEmail}</p>
            </div>
            <Link
              to="/profile"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <User className="mr-3 h-5 w-5 text-gray-400" />
              Profile
            </Link>
            {enrolledUser && (
              <a
                href="https://lms.acceleratorx.org/"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
                target="_blank"
              >
                <PiFilmScriptFill className="mr-3 h-5 w-5 text-gray-400" />
                LMS
              </a>
            )}

            <Link
              to="/jobs"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <Briefcase className="mr-3 h-5 w-5 text-gray-400" />
              Jobs
            </Link>
            <Link
              to="/my-applications"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <Briefcase className="mr-3 h-5 w-5 text-gray-400" />
              Applied Jobs
            </Link>

            <button
              onClick={handleLogout}
              className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-400" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
