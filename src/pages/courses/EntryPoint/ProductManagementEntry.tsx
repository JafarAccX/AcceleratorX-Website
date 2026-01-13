import { useEffect, Suspense, lazy } from "react";
import HeaderEIE from "../../../components/HeaderEIE";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const ProgramHeroEIE = lazy(() => import("../productmanagement/EIE/ProgamHeroEIE"));
const ProductProgramEIE = lazy(() => import("../productmanagement/EIE/ProductProgramEIE"));

const ProductManagementEntry = () => {
  const {
    setSelectedCourse,
  }: { setSelectedCourse: (course: string | null) => void } =
    useCourseContext();

  useEffect(() => {
    setSelectedCourse("Product Management");
  }, [setSelectedCourse]);

  return (
    <>
      <SEO />
      <HeaderEIE />
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <ProgramHeroEIE />
        {/* <ProgramHighlightsEIE /> */}
        <ProductProgramEIE />
      </Suspense>
    </>
  );
};

export default ProductManagementEntry;
