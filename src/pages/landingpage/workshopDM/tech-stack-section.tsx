

export default function TechStackSection() {
  // Tech stack icons - using placeholder SVGs for common technologies
  const toolsStack = [
  { name: "Airtable", icon: "/assets/n8n/airtable.webp" },
  { name: "ClickUp", icon: "/assets/n8n/clickup.webp" },
  { name: "Cursor", icon: "/assets/n8n/Cursor.webp" },
  { name: "Gmail", icon: "/assets/n8n/gmail.webp" },
  { name: "HubSpot", icon: "/assets/n8n/hubspot.webp" },
  { name: "Lovable", icon: "/assets/n8n/Lovable.webp" },
  { name: "Notion", icon: "/assets/n8n/notion.webp" },
  { name: "OpenAI", icon: "/assets/n8n/openai.webp" },
  { name: "Replit", icon: "/assets/n8n/replit.webp" },
  { name: "Google Sheets", icon: "/assets/n8n/sheets.webp" },
  { name: "Slack", icon: "/assets/n8n/slack.webp" },
  { name: "Stripe", icon: "/assets/n8n/stripe.webp" },
  { name: "Trello", icon: "/assets/n8n/trello.webp" },
  { name: "Windsurf", icon: "/assets/n8n/windsurf.webp" },
];


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Works Seamlessly With Your Favorite Tools
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Discover how to automate lead generation and enrichment using no-code tools. Build powerful workflows that save hours, boost accuracy, and scale effortlessly—without writing a single line of code.
            </p>
          </div>


          {/* Right Tech Icons Grid */}
          <div className="grid grid-cols-4 gap-8 justify-items-center">
            {toolsStack.map((tool, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center hover:bg-gray-700/50 transition-all duration-300 group"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
