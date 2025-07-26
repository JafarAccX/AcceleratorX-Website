import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import { Customer } from "../types/customer";

// Define the structure for the user data and tokens
interface AuthData {
  user: Customer;
  accessToken: string;
  refreshToken: string;
}

interface UserContextType {
  user: Customer | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (authData: AuthData) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Customer | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  const login = useCallback((authData: AuthData) => {
    localStorage.setItem("authData", JSON.stringify(authData));
    setUser(authData.user);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("authData");
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    const initAuth = () => {
      setIsLoading(true);
      try {
        const storedData = localStorage.getItem("authData");
        if (storedData) {
          const authData: AuthData = JSON.parse(storedData);
          // In a real app, you'd verify the token's expiry here
          setUser(authData.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Could not initialize authentication", error);
        logout(); // Clear corrupted data
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  }, [logout]);

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
