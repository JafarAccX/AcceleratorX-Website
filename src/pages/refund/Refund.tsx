import { SEO } from "../../components/seo/SEO";

export default function Refund() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Refund <span className="text-blue-500">Policy</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              This Refund Policy explains our terms and conditions regarding the
              refund of course fees. Please review it carefully before making a
              request.
            </p>
          <p className="text-sm text-gray-500 mt-4">Last Updated: 2024-10-18</p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-gray-300">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            1. General Policy
          </h2>
          <p className="mb-6">
            AcceleratorX understands that circumstances may arise that require
            you to consider a refund. Our general policy is that all course
            fees, including booking amounts and total course fees, are
            non-refundable. This is because a significant amount of effort and
            resources are invested in preparing and delivering our programs from
            the moment you enroll.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            2. Special Circumstances
          </h2>
          <p className="mb-6">
            We recognize that unforeseen situations may occur. In special
            circumstances, we are willing to consider refund requests on a
            case-by-case basis. These circumstances may include, but are not
            limited to:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Unforeseen Hardships:</strong> Exceptional circumstances
              beyond your control that significantly impact your ability to
              continue the program.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            3. Refund Request Process
          </h2>
          <p className="mb-6">
            If you believe your situation warrants a refund due to special
            circumstances, please submit a detailed request to{" "}
            <a
              href="mailto:support@acceleratorx.co"
              className="text-blue-400 underline"
            >
              support@acceleratorx.co
            </a>
            . Your request should include:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Your full name and enrollment details</li>
            <li>A clear explanation of the special circumstances</li>
            <li>Supporting documentation (if applicable)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            4. Review and Decision
          </h2>
          <p className="mb-6">
            Each refund request will be carefully reviewed by our team. We will
            consider the specific circumstances and supporting documentation
            provided. Our decision on refund requests is final.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            5. No Guarantee of Refund
          </h2>
          <p className="mb-6">
            Please note that submitting a refund request does not guarantee a
            refund. We will assess each case individually and make a decision
            based on the specific circumstances.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            6. Contact Us
          </h2>
          <p>
            If you have any questions about this Refund Policy, please contact
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
