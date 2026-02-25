import { useEffect, Suspense, lazy } from "react";
import { useCourseContext } from "../../../context/courseContext";
import { SEO } from "../../../components/SEO";

const ProgramHeroPA = lazy(() => import("../productmanagement/productanalytics/ProgramHeroPA"));
const PAWhoIsThisForEIE = lazy(() => import("../productmanagement/productanalytics/PAWhoIsThisForEIE"));
const ProductAnalyticsProgramEIE = lazy(() => import("../productmanagement/productanalytics/ProductAnalyticsProgramEIE"));
const ProductAnalyticsFAQEIE = lazy(() => import("../productmanagement/productanalytics/ProductAnalyticsFAQEIE"));

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
            <Suspense fallback={<div className="py-8 text-center">Loading…</div>}>
                <ProgramHeroPA />
                <PAWhoIsThisForEIE />
                <ProductAnalyticsProgramEIE />
                <ProductAnalyticsFAQEIE />
            </Suspense>
        </>
    );
};

export default ProductAnalyticsEIE;
