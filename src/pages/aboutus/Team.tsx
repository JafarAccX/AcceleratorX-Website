import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const TeamMemberCard = ({
  name,
  role,
  image,
  linkedin,
}: {
  name?: string;
  role?: string;
  image?: string;
  linkedin?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className="bg-blue-50/80 dark:bg-gray-800/80 rounded-3xl overflow-hidden aspect-[4/5] relative group transition-colors duration-300"
  >
    {image ? (
      <div className="w-full h-full relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay with details - visible on hover or always visible at bottom depending on preference. 
            The reference image doesn't show text, but typically it's needed. 
            I'll provide a subtle overlay for info.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-bold">{name}</h3>
          <p className="text-blue-200 font-medium">{role}</p>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-2 inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    ) : (
      <div className="w-full h-full flex items-center justify-center bg-blue-100 dark:bg-gray-700 transition-colors duration-300">
        <div className="w-32 h-32 rounded-full bg-blue-200 dark:bg-gray-600 flex items-center justify-center transition-colors duration-300">
          <span className="text-blue-400 dark:text-gray-400 text-4xl transition-colors duration-300">?</span>
        </div>
      </div>
    )}
  </motion.div>
);

const Team = () => {
  // Creating a list of team members based on available data + placeholders to match the visual grid
  const teamMembers = [
    {
      name: "Shahid Naseem",
      role: "Founder & CEO",
      image: "/assets/founder/Sahid.webp",
      linkedin: "https://www.linkedin.com/in/shahid-naseem-a16220144",
    },
    {
      name: "Misba Muskaan",
      role: "Director",
      image: "/assets/founder/Muskaan.webp",
      linkedin: "https://www.linkedin.com/in/misba-muskaan-560567254",
    },
    // Adding placeholders/repeats to fill the grid as per the visual suggestion of "Meet the Team"
    // In a real scenario, we'd have distinct data. Only duplicating for UI demo purposes if needed or leaving empty slots.
    // The user image shows 6 slots. I'll mock 4 more.
    {
      name: "Team Lead",
      role: "Product Manager",
      // Placeholder image
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800"
    },
    {
      name: "Senior Developer",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800"
    },
    {
      name: "Design Lead",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=800"
    },
    {
      // Empty slot stylistic placeholder as per the "user icon" in the reference image grid?
      // Or just another member. I'll put a generic one.
      name: "Join Us",
      role: "We are hiring",
      image: "" // This will trigger the placeholder state
    }
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-[#000000] overflow-hidden transition-colors duration-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@400;600;700&display=swap');
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 dark:text-blue-400 font-bold tracking-wider text-sm uppercase transition-colors duration-300"
          >
            OUR LEADERSHIP TEAM
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
            style={{ fontFamily: 'Cormorant Infant, serif' }}
          >
            Meet the Team Responsible <br className="hidden md:block" /> for Making Wonders
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
