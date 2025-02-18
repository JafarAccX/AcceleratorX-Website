import { Loader } from "lucide-react";
import { useEffect, Suspense } from "react";
import HeaderEIE from "../../../components/HeaderEIE";
import HeroWithAbouv from "../../../components/HeroWithAbouv";
import StickyBookNav from "../../../components/StickyBookNav";
import { useCourseContext } from "../../../context/courseContext";
import CAPEEIE from "../dataanalytics/EIE/CAPEEIE";
import DataCertificateEIE from "../dataanalytics/EIE/DataCertificateEIE";
import DataHeroEIE from "../dataanalytics/EIE/DataHeroEIE";
import DataJourneyEIE from "../dataanalytics/EIE/DataJourneyEIE";
import DataMentorsEIE from "../dataanalytics/EIE/DataMentorsEIE";
import DataPricingEIE from "../dataanalytics/EIE/DataPricingEIE";
import DataProgramEIE from "../dataanalytics/EIE/DataProgramEIE";
import DataSkillsToolsEIE from "../dataanalytics/EIE/DataSkillsToolsEIE";
import WhoIsThisContentForEIE from "../dataanalytics/EIE/WhoIsThisContentForEIE";
import DataAnalyticsFAQFB from "../dataAnalyticsFB/DataAnalyticsFAQFB";

const DataAnalyticsAd = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Data Analytics");
  }, [setSelectedCourse]);

  return (
    <Suspense fallback={<Loader />}>
      <HeaderEIE />
      <DataHeroEIE />
      <HeroWithAbouv />
      <WhoIsThisContentForEIE />
      <DataProgramEIE />
      <CAPEEIE />
      <DataJourneyEIE />
      <DataCertificateEIE />
      <DataMentorsEIE />
      <DataSkillsToolsEIE />
      <DataPricingEIE />
      <DataAnalyticsFAQFB />
      <StickyBookNav />
    </Suspense>
  );
};

export default DataAnalyticsAd;
