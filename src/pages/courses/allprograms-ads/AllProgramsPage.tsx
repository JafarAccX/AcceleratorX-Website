import { useState } from "react";
import AllProgramsHero from "./AllProgramsHero";
import WhyTrusted from "./WhyTrusted";
import TrustedLogos from "./TrustedLogos";
import HowYouUpskill from "./HowYouUpskill";
import ProgramSelector from "./ProgramSelector";
import EnrollmentProcess from "./EnrollmentProcess";
import AllProgramsFAQ from "./AllProgramsFAQ";
import CTASection from "./CTASection";
import ProgramDetailHero from "./ProgramDetailHero";
import IdealForSection from "./IdealForSection";
import MasterToolsSection from "./MasterToolsSection";
import CurriculumRoadmap from "./CurriculumRoadmap";
import CertificationSection from "./CertificationSection";
import ProgramOutcomeSection from "./ProgramOutcomeSection";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function AllProgramsPage() {
    const [selectedProgram, setSelectedProgram] = useState<any>(null);

    return (
        <main className="bg-black">
            <Navbar />
            {selectedProgram ? (
                <>
                    <ProgramDetailHero
                        program={selectedProgram}
                        onBack={() => setSelectedProgram(null)}
                    />
                    <IdealForSection program={selectedProgram} />
                    <MasterToolsSection program={selectedProgram} />
                    <CurriculumRoadmap program={selectedProgram} />
                    <CertificationSection program={selectedProgram} />
                    <ProgramOutcomeSection program={selectedProgram} />
                </>
            ) : (
                <>
                    <AllProgramsHero />
                    <TrustedLogos />
                    <WhyTrusted />
                    <HowYouUpskill />
                </>
            )}
            <ProgramSelector onSelectProgram={setSelectedProgram} />
            <EnrollmentProcess />
            <AllProgramsFAQ />
            <CTASection />
            <Footer />
        </main>
    );
}
