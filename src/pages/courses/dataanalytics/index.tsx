import React from 'react';
import { DataAnalyticsProvider } from './context/DataAnalyticsContext';
import { TabSwitcher } from './components/TabSwitcher';
import { withDataAnalyticsVariant } from './hoc/withDataAnalyticsVariant';

// Import EIE components
import DataHeroEIE from './EIE/DataHeroEIE';
import DataProgramEIE from './EIE/DataProgramEIE';
import DataSkillsToolsEIE from './EIE/DataSkillsToolsEIE';
import DataMentorsEIE from './EIE/DataMentorsEIE';
import DataPricingEIE from './EIE/DataPricingEIE';
import CAPEEIE from './EIE/CAPEEIE';
import DataCertificateEIE from './EIE/DataCertificateEIE';
import WhoIsThisContentForEIE from './EIE/WhoIsThisContentForEIE';

// Import AcceX components
import DataHero from './DataHero';
import DataProgram from './DataProgram';
import DataSkillsTools from './DataSkillsTools';
import DataMentors from './DataMentors';
import DataPricing from './dataPricing';
import CAPE from './CAPE';
import DataCertificate from './DataCertificate';

// Define sections with variants
const HeroSection = withDataAnalyticsVariant({
  EIE: <DataHeroEIE />,
  Accex: <DataHero />,
});

const ProgramSection = withDataAnalyticsVariant({
  EIE: <DataProgramEIE />,
  Accex: <DataProgram />,
});

const SkillsToolsSection = withDataAnalyticsVariant({
  EIE: <DataSkillsToolsEIE />,
  Accex: <DataSkillsTools />,
});

const MentorsSection = withDataAnalyticsVariant({
  EIE: <DataMentorsEIE />,
  Accex: <DataMentors />,
});

const PricingSection = withDataAnalyticsVariant({
  EIE: <DataPricingEIE />,
  Accex: <DataPricing />,
});

const CAPESection = withDataAnalyticsVariant({
  EIE: <CAPEEIE />,
  Accex: <CAPE />,
});

const CertificateSection = withDataAnalyticsVariant({
  EIE: <DataCertificateEIE />,
  Accex: <DataCertificate />,
});

const WhoIsThisContentForSection = withDataAnalyticsVariant({
  EIE: <WhoIsThisContentForEIE />,
  Accex: null, // Add AcceX component when available
});

const DataAnalyticsPage: React.FC = () => {
  return (
    <DataAnalyticsProvider>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Temporarily hidden */}
          {/* <TabSwitcher /> */}
          <HeroSection />
          <ProgramSection />
          <SkillsToolsSection />
          <CAPESection />
          <WhoIsThisContentForSection />
          <CertificateSection />
          <MentorsSection />
          <PricingSection />
        </div>
      </div>
    </DataAnalyticsProvider>
  );
};

export default DataAnalyticsPage;
