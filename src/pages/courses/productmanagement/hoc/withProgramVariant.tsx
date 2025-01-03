import React from 'react';
import { ProgramVariant } from '../types/programTypes';

interface ProgramVariantProps {
  activeTab: ProgramVariant;
  // Add any other shared props
}

export function withProgramVariant<P extends ProgramVariantProps>(
  WrappedComponent: React.ComponentType<P>,
  variantConfig: Record<ProgramVariant, Partial<P>>
) {
  return function WithProgramVariantComponent(
    props: Omit<P, keyof ProgramVariantProps> & { activeTab: ProgramVariant }
  ) {
    const { activeTab, ...rest } = props;
    const variantProps = variantConfig[activeTab] || {};
    
    return <WrappedComponent {...(rest as P)} {...variantProps} activeTab={activeTab} />;
  };
}
