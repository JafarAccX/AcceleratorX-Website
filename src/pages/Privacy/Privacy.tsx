import { SEO } from "../../components/seo/SEO";

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
          <h2 className="text-2xl font-bold mb-4 text-blue-500">1. Information We Collect</h2>
          <p className="mb-6">We collect the following types of information:</p>
          <h3 className="text-xl font-semibold mb-2 text-blue-400">1.1 Personal Information</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Account credentials (username, password)</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-blue-400">1.2 Usage Data</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Time spent on the platform</li>
            <li>Courses accessed and completed</li>
            <li>Interaction data (modules opened, progress, engagement metrics)</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-blue-400">1.3 Transaction Data</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Payment information (processed securely via third-party payment gateways, we do not store card/bank details)</li>
            <li>Purchase history of courses/programs</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-blue-400">1.4 Device & Technical Data</h3>
          <ul className="list-disc list-inside mb-6">
            <li>IP address, browser type, and device identifiers</li>
            <li>App usage logs for security and analytics</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">2. How We Use Your Information</h2>
          <p className="mb-6">We process your data for the following purposes:</p>
          <ul className="list-disc list-inside mb-6">
            <li>To create and manage your account</li>
            <li>To provide learning content and track your course progress</li>
            <li>To measure engagement and time spent for academic analytics</li>
            <li>To process payments and issue invoices</li>
            <li>To send important updates, notifications, and promotional material (you may opt out)</li>
            <li>To improve platform performance, content, and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">3. Sharing of Information</h2>
          <p className="mb-6">We do not sell your personal information. Data may be shared only with:</p>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Service Providers:</strong> Payment gateways, cloud hosting, analytics tools.</li>
            <li><strong>Legal Authorities:</strong> If required by law, regulation, or court order.</li>
            <li><strong>Business Transfers:</strong> In case of merger, acquisition, or restructuring.</li>
          </ul>
          <p className="mb-6">All third-party service providers are contractually bound to safeguard your data.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">4. Data Storage & Retention</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Personal data is stored securely on cloud servers with restricted access.</li>
            <li>We retain data only as long as necessary for the purposes mentioned or as required by law.</li>
            <li>Usage and performance data may be anonymized and retained for research/analytics.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">5. Data Security</h2>
          <p className="mb-6">We use appropriate administrative, technical, and organizational measures to protect your data, including:</p>
          <ul className="list-disc list-inside mb-6">
            <li>Encryption of sensitive information</li>
            <li>Secure server infrastructure</li>
            <li>Restricted employee access</li>
            <li>Regular audits and monitoring</li>
          </ul>
          <p className="mb-6">However, no system is fully secure. Users are responsible for safeguarding their login credentials.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">6. Your Rights</h2>
          <p className="mb-6">You have the right to:</p>
          <ul className="list-disc list-inside mb-6">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccuracies</li>
            <li>Request deletion of your account and associated data (subject to retention obligations)</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p className="mb-6">To exercise these rights, contact us at support@acceleratorx.co.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">7. Children’s Privacy</h2>
          <p className="mb-6">Our Services are not intended for individuals under 16 years of age. We do not knowingly collect personal data from children.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">8. Purchases & Payments</h2>
          <ul className="list-disc list-inside mb-6">
            <li>All in-app purchases are processed through secure third-party payment gateways.</li>
            <li>AcceleratorX does not store sensitive financial information such as credit/debit card details.</li>
            <li>Refunds are governed by our Refund Policy.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">9. Changes to This Policy</h2>
          <p className="mb-6">We may update this Privacy Policy from time to time. Updates will be posted on this page with the revised “Last Updated” date.</p>
        </div>
      </div>
      </div>
    </>
  );
}
