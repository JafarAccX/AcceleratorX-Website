
import { useState } from "react";
import DataScienceFBHero from "./components/DataScienceFBHero";
import DataScienceFBLearn from "./components/DataScienceFBLearn";
import DataScienceFBGraduate from "./components/DataScienceFBGraduate";
import DataScienceFBPractitioners from "./components/DataScienceFBPractitioners";
import DataScienceFBTools from "./components/DataScienceFBTools";
import DataScienceFBPricing from "./components/DataScienceFBPricing";
import DataScienceFBSchedule from "./components/DataScienceFBSchedule";
import DataScienceFBFAQ from "./components/DataScienceFBFAQ";
import EnrollmentModalADS from "../allprograms-ads/EnrollmentModalADS";

const DataScienceFBPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEnroll = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-500 selection:text-white">
            <EnrollmentModalADS
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                program={{
                    label: "AI DA", // Matches PROGRAM_THEMES key
                    title: "AI Powered Data Analytics", // Ensures resolveBrochure finds "Data Analytics"
                    description: "Master Data Science & Analytics with AI",
                    color: "blue",
                    link: "",
                    hoverBorder: "border-blue-500"
                }}
            />

            <div className="relative z-10">
                <DataScienceFBHero onEnroll={handleEnroll} />
                <DataScienceFBLearn />
                <DataScienceFBGraduate onEnroll={handleEnroll} />
                <DataScienceFBPractitioners />
                <DataScienceFBTools />
                <DataScienceFBPricing onEnroll={handleEnroll} />
                <DataScienceFBSchedule />
                <DataScienceFBFAQ />

            </div>
        </div>
    );
};

export default DataScienceFBPage;
