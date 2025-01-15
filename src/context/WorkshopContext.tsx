import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type WorkshopType = 'DAWorkshop' | 'PMWorkshop';

interface WorkshopContextType {
  workshopType: WorkshopType;
  setWorkshopType: (type: WorkshopType) => void;
}

const WorkshopContext = createContext<WorkshopContextType | undefined>(undefined);

export const WorkshopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [workshopType, setWorkshopType] = React.useState<WorkshopType>('DAWorkshop');
  const location = useLocation();

  useEffect(() => {
    // console.log('Current path:', location.pathname);
    if (location.pathname.includes('/pm-masterclass')) {
      // console.log('Setting workshop type to PMWorkshop');
      setWorkshopType('PMWorkshop');
    } else if (location.pathname.includes('/da-masterclass')) {
      // console.log('Setting workshop type to DAWorkshop');
      setWorkshopType('DAWorkshop');
    }
  }, [location.pathname]);

  // console.log('WorkshopProvider current type:', workshopType);

  return (
    <WorkshopContext.Provider value={{ workshopType, setWorkshopType }}>
      {children}
    </WorkshopContext.Provider>
  );
};

export const useWorkshop = () => {
  const context = useContext(WorkshopContext);
  if (context === undefined) {
    throw new Error('useWorkshop must be used within a WorkshopProvider');
  }
  return context;
};
