import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import { Customer } from "../types/customer";

interface UserContextType {
  user: Customer | null;
  setUser: (user: Customer | null) => void;
  isLoading: boolean;
  logout: () => void;
  isAuthenticated: boolean;
  refreshSession: () => Promise<boolean>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Session configuration
const SESSION_DURATION = 48 * 60 * 60 * 1000; // 24 hours in milliseconds
const SESSION_WARNING_TIME = 5 * 60 * 1000; // 5 minutes before expiry
const SESSION_CHECK_INTERVAL = 60 * 1000; // Check every minute

interface StoredUserData extends Customer {
  isAuthenticated: boolean;
  loginTime: number;
  expiresAt: number;
  lastActivity: number;
}

// Legacy user data structure (without session fields)
interface LegacyUserData extends Customer {
  isAuthenticated: boolean;
  // Missing: loginTime, expiresAt, lastActivity
}

// Type guard to check if user data has new session fields
function hasSessionFields(userData: any): userData is StoredUserData {
  return (
    userData &&
    typeof userData.loginTime === "number" &&
    typeof userData.expiresAt === "number" &&
    typeof userData.lastActivity === "number"
  );
}

// Migration function to convert legacy data to new format
function migrateUserData(legacyData: LegacyUserData): StoredUserData {
  const now = Date.now();

  console.log("Migrating legacy user data to new session format");

  return {
    ...legacyData,
    loginTime: now, // Set current time as login time
    expiresAt: now + SESSION_DURATION, // Give them full 24 hours from now
    lastActivity: now, // Current time as last activity
  };
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize user from localStorage with migration support
  const initializeUser = useCallback(() => {
    try {
      const savedUser = localStorage.getItem("userData");
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);

        // Validate basic user structure
        if (parsedUser && typeof parsedUser === "object" && parsedUser.Mobile) {
          let userData: StoredUserData;

          // Check if this is legacy data (missing session fields)
          if (!hasSessionFields(parsedUser)) {
            console.log("Legacy user data detected, migrating...");

            // Migrate legacy data to new format
            userData = migrateUserData(parsedUser as LegacyUserData);

            // Save the migrated data back to localStorage
            localStorage.setItem("userData", JSON.stringify(userData));
          } else {
            // Already has new session fields
            userData = parsedUser as StoredUserData;
          }

          const now = Date.now();

          // Check if session is expired
          if (now > userData.expiresAt) {
            console.log("Session expired, logging out...");
            clearSession();
            return;
          }

          // Check for suspicious activity (session older than maximum allowed)
          if (now - userData.loginTime > SESSION_DURATION * 2) {
            console.log("Session too old, logging out...");
            clearSession();
            return;
          }

          // Update last activity
          const updatedUser = {
            ...userData,
            lastActivity: now,
          };

          localStorage.setItem("userData", JSON.stringify(updatedUser));
          setUserState(userData);
          setIsAuthenticated(true);
        } else {
          clearSession();
        }
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error parsing saved user data:", error);
      clearSession();
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Clear session data
  const clearSession = useCallback(() => {
    try {
      localStorage.removeItem("userData");
      localStorage.removeItem("phoneNumber");
      localStorage.removeItem("authToken"); // If you have tokens
    } catch (error) {
      console.error("Error clearing session:", error);
    }
    setUserState(null);
    setIsAuthenticated(false);
  }, []);

  // Set user with session data
  const setUser = useCallback(
    (newUser: Customer | null) => {
      if (newUser) {
        try {
          const now = Date.now();
          const userData: StoredUserData = {
            ...newUser,
            isAuthenticated: true,
            loginTime: now,
            expiresAt: now + SESSION_DURATION,
            lastActivity: now,
          };

          localStorage.setItem("userData", JSON.stringify(userData));
          setUserState(newUser);
          setIsAuthenticated(true);
        } catch (error) {
          console.error("Error saving user data to localStorage:", error);
          // Fallback: set user in memory only
          setUserState(newUser);
          setIsAuthenticated(true);
        }
      } else {
        clearSession();
      }
    },
    [clearSession],
  );

  // Logout function
  const logout = useCallback(() => {
    clearSession();
    // Redirect to login page
    window.location.href = "/sign-in";
  }, [clearSession]);

  // Update last activity
  const updateLastActivity = useCallback(() => {
    if (isAuthenticated && user) {
      try {
        const savedUser = localStorage.getItem("userData");
        if (savedUser) {
          const parsedUser: StoredUserData = JSON.parse(savedUser);
          const updatedUser = {
            ...parsedUser,
            lastActivity: Date.now(),
          };
          localStorage.setItem("userData", JSON.stringify(updatedUser));
        }
      } catch (error) {
        console.error("Error updating last activity:", error);
      }
    }
  }, [isAuthenticated, user]);

  // Refresh session (extend expiry)
  const refreshSession = useCallback(async (): Promise<boolean> => {
    if (!isAuthenticated || !user) return false;

    try {
      const now = Date.now();
      const savedUser = localStorage.getItem("userData");

      if (savedUser) {
        const parsedUser: StoredUserData = JSON.parse(savedUser);
        const refreshedUser = {
          ...parsedUser,
          expiresAt: now + SESSION_DURATION,
          lastActivity: now,
        };

        localStorage.setItem("userData", JSON.stringify(refreshedUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error refreshing session:", error);
      return false;
    }
  }, [isAuthenticated, user]);

  // Check session validity periodically
  useEffect(() => {
    const checkSession = () => {
      if (!isAuthenticated) return;

      try {
        const savedUser = localStorage.getItem("userData");
        if (savedUser) {
          const parsedUser: StoredUserData = JSON.parse(savedUser);
          const now = Date.now();

          // Check if session expired
          if (now > parsedUser.expiresAt) {
            console.log("Session expired during check");
            logout();
            return;
          }

          // Warn user about upcoming expiry
          const timeUntilExpiry = parsedUser.expiresAt - now;
          if (timeUntilExpiry <= SESSION_WARNING_TIME && timeUntilExpiry > 0) {
            console.warn("Session will expire in", Math.round(timeUntilExpiry / 60000), "minutes");
          }
        }
      } catch (error) {
        console.error("Error checking session:", error);
        logout();
      }
    };

    const interval = setInterval(checkSession, SESSION_CHECK_INTERVAL);
    return () => clearInterval(interval);
  }, [isAuthenticated, logout]);

  // Track user activity
  useEffect(() => {
    if (!isAuthenticated) return;

    const activityEvents = ["mousedown", "mousemove", "keypress", "scroll", "touchstart", "click"];

    const handleActivity = () => {
      updateLastActivity();
    };

    // Throttle activity updates
    let lastUpdate = 0;
    const throttledHandleActivity = () => {
      const now = Date.now();
      if (now - lastUpdate > 30000) {
        lastUpdate = now;
        handleActivity();
      }
    };

    activityEvents.forEach((event) => {
      document.addEventListener(event, throttledHandleActivity, true);
    });

    return () => {
      activityEvents.forEach((event) => {
        document.removeEventListener(event, throttledHandleActivity, true);
      });
    };
  }, [isAuthenticated, updateLastActivity]);

  // Initialize on mount
  useEffect(() => {
    initializeUser();
  }, [initializeUser]);

  // Handle visibility change (tab focus/blur)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && isAuthenticated) {
        const savedUser = localStorage.getItem("userData");
        if (savedUser) {
          try {
            const parsedUser: StoredUserData = JSON.parse(savedUser);
            if (Date.now() > parsedUser.expiresAt) {
              logout();
            }
          } catch (error) {
            console.error("Error checking session on visibility change:", error);
            logout();
          }
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isAuthenticated, logout]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        logout,
        isAuthenticated,
        refreshSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

// Updated authentication check function with migration support
export const isAuthenticated = (): boolean => {
  try {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedData = JSON.parse(userData);
      if (parsedData && parsedData.isAuthenticated === true) {
        // Handle legacy data
        if (!hasSessionFields(parsedData)) {
          console.log("Legacy data in isAuthenticated check, migrating...");
          const migratedData = migrateUserData(parsedData as LegacyUserData);
          localStorage.setItem("userData", JSON.stringify(migratedData));
          return true; // Give them a fresh session
        }

        // Check if session is expired (for new format data)
        const now = Date.now();
        if (now > parsedData.expiresAt) {
          localStorage.removeItem("userData");
          localStorage.removeItem("phoneNumber");
          return false;
        }
        return true;
      }
    }
  } catch (error) {
    console.error("Error checking authentication:", error);
    localStorage.removeItem("userData");
  }
  return false;
};

// Hook for protected routes
export function useAuthGuard() {
  const { isAuthenticated, isLoading } = useUser();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setShouldRedirect(true);
    }
  }, [isAuthenticated, isLoading]);

  return { shouldRedirect, isLoading };
}
