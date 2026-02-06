import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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
import EnrollmentModalADS from "./EnrollmentModalADS";

export default function AllProgramsPage() {
    const [selectedProgram, setSelectedProgram] = useState<any>(null);
    const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

    return (
        <main className="bg-black relative">
            {selectedProgram ? (
                <>
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setSelectedProgram(null)}
                        className="fixed top-24 left-4 md:left-10 z-50 flex items-center gap-2 px-6 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all shadow-lg"
                    >
                        <ArrowLeft size={18} />
                        <span>Back</span>
                    </motion.button>
                    <ProgramDetailHero
                        program={selectedProgram}
                        onEnroll={() => setIsEnrollmentOpen(true)}
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
            {!selectedProgram && (
                <ProgramSelector onSelectProgram={setSelectedProgram} />)}
            <EnrollmentProcess />
            {!selectedProgram && (<AllProgramsFAQ />)}

            <CTASection />
            {selectedProgram && (
                <ProgramSelector onSelectProgram={setSelectedProgram} />)}
            {/* <Footer /> */}
            <EnrollmentModalADS
                isOpen={isEnrollmentOpen}
                onClose={() => setIsEnrollmentOpen(false)}
                program={selectedProgram}
            />

        </main>
    );
}
