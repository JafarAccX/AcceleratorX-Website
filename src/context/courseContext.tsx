import { createContext, useContext, ReactNode, useState } from "react";

interface CourseContextType {
  selectedCourse: string | null;
  setSelectedCourse: (course: string | null) => void;
}

// Create context with default values
const CourseContext = createContext<CourseContextType>({
  selectedCourse: null,
  setSelectedCourse: () => {},
});

// Context Provider
export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  return (
    <CourseContext.Provider value={{ selectedCourse, setSelectedCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

// Custom hook for accessing the context
export const useCourseContext = () => useContext(CourseContext);
