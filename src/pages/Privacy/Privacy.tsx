import { SEO } from "../../components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            At AcceleratorX, your privacy is our top priority. This Privacy
            Policy explains how we collect, use, and protect your personal
            information when you use our services.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last Updated: 2024-10-18</p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-gray-300">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            1. Introduction
          </h2>
          <p className="mb-6">
            Acceleron Education Services Private Limited ("AcceleratorX," "we,"
            "us," or "our") is committed to protecting the privacy of our users
            ("you" or "user"). This Privacy Policy outlines how we collect, use,
            and disclose your personal information when you access and use our
            website and services.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            2. Information We Collect
          </h2>
          <p className="mb-6">We collect the following types of information:</p>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Personal Information:</strong> This includes your name,
              email address, contact details, and any other information you
              provide to us directly.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect information about how you
              use our website and services, such as your IP address, browser
              type, device information, pages visited, and interactions with our
              content.
            </li>
            <li>
              <strong>Cookies and Similar Technologies:</strong> We use cookies
              and similar technologies to track your activity on our website and
              improve your user experience.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Providing and Improving Services:</strong> To operate our
              website and services, personalize your experience, and improve our
              offerings.
            </li>
            <li>
              <strong>Communication:</strong> To communicate with you about your
              account, updates, and promotional materials.
            </li>
            <li>
              <strong>Legal Compliance:</strong> To comply with applicable laws
              and regulations.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            4. Disclosure of Your Information
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Service Providers:</strong> We may share your information
              with trusted third-party service providers who assist us in
              operating our website and services.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information to comply with legal obligations, enforce our Terms
              and Conditions, or protect our rights and safety.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            5. Data Security
          </h2>
          <p className="mb-6">
            We take reasonable measures to protect your information from
            unauthorized access, use, or disclosure. However, no method of
            transmission over the Internet or method of electronic storage is
            completely secure.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            6. Your Privacy Choices
          </h2>
          <p className="mb-6">
            You can control your cookies and tracking preferences through your
            browser settings. You can also opt-out of receiving promotional
            communications from us by following the unsubscribe instructions in
            those emails.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            7. Children's Privacy
          </h2>
          <p className="mb-6">
            Our services are not intended for children under the age of 13. We
            do not knowingly collect personal information from children under
            13.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            8. Changes to this Privacy Policy
          </h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. We will post
            any changes on our website, and your continued use of our services
            after the changes constitutes your acceptance of the updated Privacy
            Policy.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            9. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:support@acceleratorx.co"
              className="text-blue-400 underline"
            >
              support@acceleratorx.co
            </a>
            .
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
