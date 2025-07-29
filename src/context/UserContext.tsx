import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import { Customer } from "../types/customer";

// Define the structure for the user data and tokens
import { api } from "../api";

// Define the structure for the user data and access token
// The refresh token is now handled by an HttpOnly cookie
interface AuthData {
  user: Customer;
  accessToken: string;
}

interface UserContextType {
  user: Customer | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (authData: AuthData) => void;
  logout: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Customer | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  // Access token is stored in memory
  const login = useCallback((authData: AuthData) => {
    setUser(authData.user);
    setIsAuthenticated(true);
    // Set the access token for all subsequent api requests
    api.defaults.headers.common["Authorization"] = `Bearer ${authData.accessToken}`;
  }, []);

  const logout = useCallback(async () => {
    try {
      // Request backend to clear the HttpOnly cookie
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Failed to logout", error);
    } finally {
      // Clear user state and authorization header regardless of backend call success
      setUser(null);
      setIsAuthenticated(false);
      delete api.defaults.headers.common["Authorization"];
    }
  }, []);

  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);
      try {
        // The backend will use the HttpOnly cookie to identify the user
        const response = await api.post<AuthData>("/auth/refresh-token");
        if (response.data) {
          login(response.data);
        }
      } catch {
        // This error is expected if the user is not logged in
        // No need to handle the error object itself
        console.log("No active session or session expired.");
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, [login]);

  return (
    <UserContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
