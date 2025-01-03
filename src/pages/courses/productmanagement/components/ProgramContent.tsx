import React from 'react';
import { useProgramContext } from '../context/ProgramContext';
import { useLocation } from 'react-router-dom';
import { ProgramComponentManager } from './ProgramComponentManager';
import ProgramTabs from '../../../../components/ProgramTabs';

// Default Program Components
import ProgramHero from '../ProgamHero';
import ProgramHighlights from '../ProgramHighlights';
import BYDP from '../BYDP';
import LearningJourney from '../LearningJourney';
import BenefitsGrid from '../BenefitsGrid';
import ProgramCertificate from '../ProgramCertificate';
import Mentors from '../Mentors';
import SkillsAndTools from '../SkillsAndTools';
import SkillsAssessment from '../SkillAssessment';
import Pricing from '../Pricing';
import FAQ from '../../../../components/FAQ';

// EIE Program Components
import ProgramHeroEIE from '../EIE/ProgamHeroEIE';
import ProgramHighlightsEIE from '../EIE/ProgramHighlightsEIE';
import LearningJourneyEIE from '../EIE/LearningJourneyEIE';
import BenefitsGridEIE from '../EIE/BenefitsGridEIE';
import ProgramCertificateEIE from '../EIE/ProgramCertificateEIE';
import MentorsEIE from '../EIE/MentorsEIE';
import FAQEIE from '../EIE/FAQEIE';
import SkillsAndToolsEIE from '../EIE/SkillsAndToolsEIE';
import SkillsAssessmentEIE from '../EIE/SkillsAssessmentEIE';
import PricingEIE from '../EIE/PricingEIE';

export const ProgramContent: React.FC = () => {
  const { activeTab, setActiveTab } = useProgramContext();
  const location = useLocation();
  
  // Only show tabs for the main product management page, not the FB version
  const shouldShowTabs = location.pathname === '/courses/product-management';
  
  console.log("ProgramContent rendered with activeTab:", activeTab, "showTabs:", shouldShowTabs); // Debug log

  const programComponents = {
    Hero: {
      'EIE European Business School Program': <ProgramHeroEIE />,
      'AcceleratorX Program': <ProgramHero />
    },
    Highlights: {
      'EIE European Business School Program': <ProgramHighlightsEIE />,
      'AcceleratorX Program': <ProgramHighlights />
    },
    BYDP: {
      'AcceleratorX Program': <BYDP />
    },
    LearningJourney: {
      'EIE European Business School Program': <LearningJourneyEIE />,
      'AcceleratorX Program': <LearningJourney />
    },
    Benefits: {
      'EIE European Business School Program': <BenefitsGridEIE />,
      'AcceleratorX Program': <BenefitsGrid />
    },
    Certificate: {
      'EIE European Business School Program': <ProgramCertificateEIE />,
      'AcceleratorX Program': <ProgramCertificate />
    },
    Mentors: {
      'EIE European Business School Program': <MentorsEIE />,
      'AcceleratorX Program': <Mentors />
    },
    SkillsAndTools: {
      'EIE European Business School Program': <SkillsAndToolsEIE />,
      'AcceleratorX Program': <SkillsAndTools />
    },
    SkillsAssessment: {
      'EIE European Business School Program': <SkillsAssessmentEIE />,
      'AcceleratorX Program': <SkillsAssessment />
    },
    Pricing: {
      'EIE European Business School Program': <PricingEIE />,
      'AcceleratorX Program': <Pricing />
    },
    FAQ: {
      'EIE European Business School Program': <FAQEIE />,
      'AcceleratorX Program': <FAQ />
    }
  };

  return (
    <div className="program-content relative mt-10">
      {shouldShowTabs && (
        <div className="sticky top-0 z-50 py-3 bg-black/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <ProgramTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </div>
      )}
      
      {Object.entries(programComponents).map(([key, component]) => (
        <ProgramComponentManager
          key={key}
          activeTab={activeTab}
          component={key as keyof typeof programComponents}
        >
          {component[activeTab as keyof typeof component]}
        </ProgramComponentManager>
      ))}
    </div>
  );
};
