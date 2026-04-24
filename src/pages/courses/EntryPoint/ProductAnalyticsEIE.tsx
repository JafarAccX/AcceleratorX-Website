import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/seo/SEO";

const ProductAnalyticsPageV2 = lazy(() => import("../productmanagement/productanalytics/v2/ProductAnalyticsPageV2"));

const ProductAnalyticsEIE = () => {
    const {
        setSelectedCourse,
    }: { setSelectedCourse: (course: string | null) => void } =
        useCourseContext();

    useEffect(() => {
        setSelectedCourse("Product Analytics");
    }, [setSelectedCourse]);

    return (
        <>
            <SEO />
            <Suspense fallback={<div className="py-8 text-center text-white bg-[#0A0A0A] min-h-screen">Loading…</div>}>
                <ProductAnalyticsPageV2 />
            </Suspense>
        </>
    );
};

export default ProductAnalyticsEIE;
