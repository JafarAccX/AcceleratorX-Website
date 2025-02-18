import React, { Suspense, useEffect } from "react";
import { useCourseContext } from "../../../context/courseContext";
import Loader from "../../../components/Loader";
import HeroWithAbouv from "../../../components/HeroWithAbouv";
import StickyBookNav from "../../../components/StickyBookNav";

// Import EIE components
import DataHeroEIE from "./EIE/DataHeroEIE";
import DataProgramEIE from "./EIE/DataProgramEIE";
import DataSkillsToolsEIE from "./EIE/DataSkillsToolsEIE";
import DataMentorsEIE from "./EIE/DataMentorsEIE";
import DataPricingEIE from "./EIE/DataPricingEIE";
import CAPEEIE from "./EIE/CAPEEIE";
import DataCertificateEIE from "./EIE/DataCertificateEIE";
import WhoIsThisContentForEIE from "./EIE/WhoIsThisContentForEIE";
import DataAnalyticsFAQFB from "../dataAnalyticsFB/DataAnalyticsFAQFB";

const DataAnalyticsPage = () => {
  const { setSelectedCourse } = useCourseContext();

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <DataHeroEIE />
      <HeroWithAbouv />
      <WhoIsThisContentForEIE />
      <DataProgramEIE />
      <CAPEEIE />
      <DataCertificateEIE />
      <DataMentorsEIE />
      <DataSkillsToolsEIE />
      <DataPricingEIE />
      <DataAnalyticsFAQFB />
      <StickyBookNav />
    </Suspense>
  );
};

export default DataAnalyticsPage;
