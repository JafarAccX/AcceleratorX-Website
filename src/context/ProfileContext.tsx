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
  profile: UserProfile;
  updateProfile: (newProfile: UserProfile) => void;
}

const defaultProfile: UserProfile = {
  id: "1",
  full_name: "Tanbir Alam",
  email: "tanbir@acceleratorx.co",
  phone_number: "+919903681979",
  education_level: "Bachelors",
  work_experience: "2 years",
  designation: "Software Engineer",
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);

  const updateProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
  };

  return <ProfileContext.Provider value={{ profile, updateProfile }}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
