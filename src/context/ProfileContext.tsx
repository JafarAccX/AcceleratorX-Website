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

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const updateProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
  };

  if (!profile) {
    // Fetch the profile from an API or local storage here and set it
    // For example:
    // const fetchedProfile = fetchProfileFromAPI();
    // setProfile(fetchedProfile);
    return;
  }

  return <ProfileContext.Provider value={{ profile, updateProfile }}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
