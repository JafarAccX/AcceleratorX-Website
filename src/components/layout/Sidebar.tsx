// React import not required with the new JSX transform
import { cn } from "../../utils/cn";

interface SidebarProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export default function Sidebar({
  sections,
  activeSection,
  onSectionChange,
}: SidebarProps) {
  return (
    <nav className="w-64 space-y-1">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={cn(
            "w-full text-left px-4 py-3 rounded-lg transition-all duration-200 transform",
            "hover:bg-gray-800/50 relative",
            activeSection === section.id
              ? "text-indigo-400"
              : "text-gray-400 hover:text-white"
          )}
        >
          {activeSection === section.id && (
            <div className="absolute inset-0 bg-gray-800/50 rounded-lg -z-10" />
          )}
          {section.title}
        </button>
      ))}
    </nav>
  );
}
