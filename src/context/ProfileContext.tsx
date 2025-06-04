import { createContext, useContext, useState, ReactNode } from "react";

interface UserProfile {
  id: string;
  phone_number: string;
  full_name: string;
  email: string;
  education_level: string;
  work_experience: string;
  designation: string;
}

interface ProfileContextType {
  profile: UserProfile | null;
  updateProfile: (newProfile: UserProfile) => void;
  isLoading: boolean;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
  };

  // Always render the provider - don't conditionally return
  return <ProfileContext.Provider value={{ profile, updateProfile, isLoading }}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
