import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProgramVariant } from '../types/programTypes';

interface ProgramContextType {
  activeTab: ProgramVariant;
  setActiveTab: (tab: ProgramVariant) => void;
}

const ProgramContext = createContext<ProgramContextType | undefined>(undefined);

export function ProgramProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<ProgramVariant>('EIE European Business School Program');

  return (
    <ProgramContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ProgramContext.Provider>
  );
}

export function useProgramContext() {
  const context = useContext(ProgramContext);
  if (context === undefined) {
    throw new Error('useProgramContext must be used within a ProgramProvider');
  }
  return context;
}
