import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

interface User {
  id: string;
  phone_number: string;
  full_name: string;
  email: string;
  education_level: string;
  work_experience: string;
  designation: string;
  created_at: string;
  updated_at: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Try to get user from localStorage on initial load
    const savedUser = localStorage.getItem("userData");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Save user to localStorage whenever it changes
    if (user) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          ...user,
          isAuthenticated: true,
        }),
      );
      // localStorage.setItem("userData", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check if there's a phone number in localStorage
        const phoneNumber = localStorage.getItem("phoneNumber");
        if (phoneNumber && !user) {
          // Fetch user data from Supabase
          const { data: userData, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("phone_number", phoneNumber)
            .single();

          if (error) throw error;

          if (userData) {
            setUser(userData);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Clear localStorage if there's an error
        localStorage.removeItem("userData");
        localStorage.removeItem("phoneNumber");
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("phoneNumber");
  };

  return <UserContext.Provider value={{ user, setUser, isLoading, logout }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
