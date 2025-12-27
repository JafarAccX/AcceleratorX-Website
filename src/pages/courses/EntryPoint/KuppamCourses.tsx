import React from "react";
import KuppamHeader from "../../kuppam/KuppamHeader";
import KuppamSecond from "../../kuppam/KuppamSecond";
import KuppamTopics from "../../kuppam/KuppamTopics";
import KuppamAnimatedSection from "../../kuppam/KuppamAnimatedSection";
import { SEO } from "../../../components/SEO";

const KuppamCourses = () => {
  return (
    <div>
      <SEO />
      <KuppamHeader />
      <KuppamSecond />
      <KuppamTopics />
      <KuppamAnimatedSection />
    </div>
  );
};

export default KuppamCourses;
