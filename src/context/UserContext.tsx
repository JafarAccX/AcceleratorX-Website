// import { createContext, useContext, useState, ReactNode, useEffect } from "react";
// // import { supabase } from "../lib/supabaseClient";
// import { Customer } from "../types/customer";

// interface UserContextType {
//   user: Customer | null;
//   setUser: (user: Customer | null) => void;
//   isLoading: boolean;
//   logout: () => void;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export function UserProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<Customer | null>(() => {
//     // Try to get user from localStorage on initial load
//     const savedUser = localStorage.getItem("userData");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Save user to localStorage whenever it changes
//     if (user) {
//       localStorage.setItem(
//         "userData",
//         JSON.stringify({
//           ...user,
//           isAuthenticated: true,
//         }),
//       );
//       // localStorage.setItem("userData", JSON.stringify(user));
//     }
//   }, [user]);

//   useEffect(() => {
//     const initializeAuth = async () => {
//       try {
//         // Check if there's a phone number in localStorage
//         // const phoneNumber = localStorage.getItem("phoneNumber");
//         // if (phoneNumber && !user) {
//         //   // Fetch user data from Supabase
//         //   const { data: userData, error } = await supabase
//         //     .from("profiles")
//         //     .select("*")
//         //     .eq("phone_number", phoneNumber)
//         //     .single();
//         //   if (error) throw error;
//         //   if (userData) {
//         //     setUser(userData);
//         //   }
//         // }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         // Clear localStorage if there's an error
//         localStorage.removeItem("userData");
//         localStorage.removeItem("phoneNumber");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     initializeAuth();
//   }, []);

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("userData");
//     localStorage.removeItem("phoneNumber");
//   };

//   return <UserContext.Provider value={{ user, setUser, isLoading, logout }}>{children}</UserContext.Provider>;
// }

// export function useUser() {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// }

// export const isAuthenticated = () => {
//   const userData = localStorage.getItem("userData");
//   if (userData) {
//     const parsedData = JSON.parse(userData);
//     return parsedData.isAuthenticated || false;
//   }
//   return false;
// };

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Customer } from "../types/customer";
import { useGetUserByMobile } from "../hooks/customer";

interface UserContextType {
  user: Customer | null;
  setUser: (user: Customer | null) => void;
  isLoading: boolean;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Customer | null>(() => {
    // Try to get user from localStorage on initial load
    const savedUser = localStorage.getItem("userData");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Hook to fetch user data by phone number
  const { data: userData, isLoading, isError, error } = useGetUserByMobile(user?.Mobile || "");

  // Effect to initialize auth and check if user exists in localStorage
  // useEffect(() => {
  //   if (user) {
  //     // If user already exists in localStorage, set it in context and skip fetching
  //   } else {
  //     // If no user in context, check for phone number in localStorage
  //     const savedPhoneNumber = localStorage.getItem("phoneNumber");
  //     if (savedPhoneNumber) {
  //       // Trigger the hook to fetch user data using the phone number
  //     }
  //   }
  // }, [user]);

  useEffect(() => {
    // Once user data is fetched, update state and localStorage
    if (userData && !isLoading) {
      setUser(userData);
    } else if (isError) {
      console.error("Error fetching user data:", error);
      localStorage.removeItem("userData");
    }
  }, [userData, isLoading, isError, error]);

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
    }
  }, [user]);

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

export const isAuthenticated = () => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    const parsedData = JSON.parse(userData);
    return parsedData.isAuthenticated || false;
  }
  return false;
};
