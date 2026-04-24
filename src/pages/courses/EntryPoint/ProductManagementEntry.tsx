import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/seo/SEO";

const ProductManagementPageV2 = lazy(() => import("../productmanagement/v2/ProductManagementPageV2"));

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
      <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
        <ProductManagementPageV2 />
      </Suspense>
    </>
  );
};

export default ProductManagementEntry;
