import { ArrowRight, Users } from "lucide-react"

export default function LeadEngineCTA() {

    const scrollToForm = () => {
    const form = document.getElementById("workshop-registration-form");
    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      console.error('Form element not found with ID "workshop-registration-form"');
    }
  };


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Limited Seats Badge */}
        <div className="mb-6">
          <span className="text-blue-400 text-lg font-medium">Limited Seats</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Are You Ready to Build Your First Lead Engine?
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join 100+ marketers, founders, and growth professionals who've automated hours of manual work with just one
          session.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button  onClick={scrollToForm} className="inline-flex items-center bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900">
            Register Now – Limited Seats
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex items-center justify-center text-gray-400">
          <Users className="w-5 h-5 mr-2" />
          <span className="text-sm">Join 100+ professionals already registered</span>
        </div>
      </div>
    </section>
  )
}
