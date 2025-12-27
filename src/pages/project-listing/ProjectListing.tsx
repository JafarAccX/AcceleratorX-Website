import Hero from './components/Hero';
import LeaderBoard from './components/LeaderBoard';
import Listing from './components/Listing';
import FAQ from './components/FAQ';

const ProjectListing = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Hero />
            <LeaderBoard />
            <Listing />
            <FAQ />
        </div>
    );
};

export default ProjectListing;
