import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const ProgramHeroEIE = lazy(() => import("../productmanagement/EIE/ProgamHeroEIE"));
const PMWhoIsThisContentForEIE = lazy(() => import("../productmanagement/EIE/PMWhoIsThisContentForEIE"));
const ProductProgramEIE = lazy(() => import("../productmanagement/EIE/ProductProgramEIE"));
const ProductManagementFAQEIE = lazy(() => import("../productmanagement/EIE/ProductManagementFAQEIE"));

const ProductManagementEIE = () => {
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
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <ProgramHeroEIE />
        <PMWhoIsThisContentForEIE />
        <ProductProgramEIE />
        <ProductManagementFAQEIE />
      </Suspense>
    </>
  );
};

export default ProductManagementEIE;
