import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#caf0f8]/30 via-[#90e0ef]/20 to-white py-20">
        <div className="container mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0077b6] hover:text-[#03045e] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-[#03045e] mb-4">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600">
            Effective Date: January 22, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            These Terms of Service ("Terms") govern your access to and use of the Services provided by Adona Ai ("Adona", "Company", "we", "us", "our") to you ("Client", "Customer", "you", "your").
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must immediately cease using our Services.
          </p>

          {/* 1. Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">1. Definitions</h2>

            <div className="space-y-4">
              <div>
                <p className="text-gray-700"><strong>1.1 "Account"</strong> means the user profile required to access the Services, created by registering at <a href="https://adona.ai" className="text-[#0077b6] hover:underline">https://adona.ai</a></p>
              </div>
              <div>
                <p className="text-gray-700"><strong>1.2 "Brand"</strong> means your trademark and associated visual identity submitted for use with the Services</p>
              </div>
              <div>
                <p className="text-gray-700"><strong>1.3 "Credits"</strong> means virtual credits enabling you to generate and download Content</p>
              </div>
              <div>
                <p className="text-gray-700"><strong>1.4 "Content"</strong> means all marketing materials (texts, images, emails, ads) generated through the Services</p>
              </div>
              <div>
                <p className="text-gray-700"><strong>1.5 "Services"</strong> means Adona's AI-powered content creation platform enabling you to generate Content</p>
              </div>
              <div>
                <p className="text-gray-700"><strong>1.6 "Subscription"</strong> means your enrollment and agreement to pay fees for ongoing access to the Services</p>
              </div>
              <div>
                <p className="text-gray-700"><strong>1.7 "Subscription Plan"</strong> means the specific plan level you subscribe to (Starter, Professional, or Scale)</p>
              </div>
            </div>
          </section>

          {/* 2. Access and Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">2. Access and Use</h2>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">2.1 Grant of Rights</h3>
            <p className="text-gray-700 mb-6">We grant you a non-exclusive, non-transferable right to access and use the Services during your Subscription period solely for your internal business purposes.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">2.2 Restrictions</h3>
            <p className="text-gray-700 mb-3">You shall not:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Copy, reproduce, or reverse engineer the Services</li>
              <li>Use the Services for illegal purposes</li>
              <li>Upload content that violates third-party rights</li>
              <li>Attempt unauthorized access to our systems</li>
              <li>Use the Services to transmit harmful or inappropriate content</li>
              <li>Resell or sublicense the Services</li>
            </ul>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">2.3 Account Security</h3>
            <p className="text-gray-700">You are responsible for maintaining the confidentiality of your Account credentials and for all activities conducted under your Account.</p>
          </section>

          {/* 3. Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">3. Services</h2>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">3.1 Service Delivery</h3>
            <p className="text-gray-700 mb-6">Services are deemed delivered upon providing access credentials, regardless of actual usage.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">3.2 AI-Generated Content</h3>
            <p className="text-gray-700 mb-6">Due to the nature of AI, Content may not be unique and similar results may be generated for other users.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">3.3 Account Management</h3>
            <p className="text-gray-700">You may cancel your Account at any time by emailing adona.creative@gmail.com</p>
          </section>

          {/* 4. Subscription and Payment */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">4. Subscription and Payment</h2>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">4.1 Fees</h3>
            <p className="text-gray-700 mb-6">Current pricing is displayed at <a href="https://adona.ai" className="text-[#0077b6] hover:underline">https://adona.ai</a>. We may modify fees with 30 days' notice.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">4.2 Billing Cycles</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Monthly plans: Billed monthly in advance</li>
              <li>Quarterly plans: Billed every 3 months in advance</li>
              <li>Annual plans: Billed annually in advance</li>
              <li>Automatic renewal unless cancelled</li>
            </ul>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">4.3 Cancellation</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Cancellation takes effect at the end of your current billing period</li>
              <li>You retain access to the Services until the end of your paid period</li>
              <li>No partial refunds for unused time (except as provided in Section 4.6)</li>
            </ul>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">4.4 Payment Methods</h3>
            <p className="text-gray-700 mb-6">We accept major credit cards (Visa, Mastercard, American Express, Discover). You must provide accurate billing information.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">4.5 Credits</h3>
            <p className="text-gray-700 mb-6">Unused Credits do not roll over between billing periods.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">4.6 Refund Policy</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Full refund available within 14 days of subscription date</li>
              <li>Eligibility: You must not have created more than 35 content pieces</li>
              <li>Refund requests must be sent to adona.creative@gmail.com</li>
              <li>No refunds after 14 days or after creating more than 35 ads post-onboarding</li>
            </ul>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">4.7 Promotional Pricing and Discounts</h3>
            <p className="text-gray-700">Any discount, promotional code, or reduced pricing applied at checkout applies only to the first billing cycle unless explicitly stated otherwise. After the initial discounted period, your Subscription will automatically renew at the then-current standard rate. By completing your purchase with a promotional discount, you acknowledge and agree to this pricing structure.</p>
          </section>

          {/* 5. Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">5. Intellectual Property</h2>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">5.1 Adona Property</h3>
            <p className="text-gray-700 mb-6">All Services, including software, algorithms, and platform elements, remain our exclusive property.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">5.2 Your Content</h3>
            <p className="text-gray-700 mb-6">You retain rights to your Brand and input materials. You grant us a license to use them solely to provide the Services.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">5.3 Generated Content</h3>
            <p className="text-gray-700">You own the Content generated for you, subject to the non-exclusivity provisions in Section 3.2.</p>
          </section>

          {/* 6. Disclaimers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">6. Disclaimers</h2>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">6.1 "AS IS" BASIS</h3>
            <p className="text-gray-700 mb-6 uppercase">The services are provided "as is" and "as available" without warranties of any kind.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">6.2 No Guarantee</h3>
            <p className="text-gray-700 mb-6">We do not guarantee the Services will be uninterrupted, error-free, or meet your specific requirements.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">6.3 Limitation of Liability</h3>
            <p className="text-gray-700">Our total liability shall not exceed the fees paid by you in the six months preceding any claim.</p>
          </section>

          {/* Continue with remaining sections... */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">7. Data Privacy</h2>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">7.1 Data Use</h3>
            <p className="text-gray-700 mb-6">We process your data solely to provide the Services, as detailed in our Privacy Policy.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">7.2 Data Security</h3>
            <p className="text-gray-700 mb-6">We implement industry-standard security measures to protect your data.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">7.3 GDPR Compliance</h3>
            <p className="text-gray-700">We comply with applicable data protection laws, including GDPR.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">8. Termination</h2>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">8.1 By You</h3>
            <p className="text-gray-700 mb-6">You may terminate at any time subject to the cancellation requirements in Section 4.3.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">8.2 By Us</h3>
            <p className="text-gray-700 mb-3">We may suspend or terminate your access for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Breach of these Terms</li>
              <li>Non-payment</li>
              <li>Illegal or harmful use</li>
              <li>Violation of third-party rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">9. Confidentiality</h2>
            <p className="text-gray-700">Each party shall maintain the confidentiality of the other party's Confidential Information using reasonable care and shall not disclose it to third parties.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">10. General Provisions</h2>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">10.1 Entire Agreement</h3>
            <p className="text-gray-700 mb-6">These Terms constitute the entire agreement between the parties.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">10.2 Modifications</h3>
            <p className="text-gray-700 mb-6">We may update these Terms with 30 days' notice. Continued use constitutes acceptance.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">10.3 Governing Law</h3>
            <p className="text-gray-700 mb-6">These Terms are governed by the laws of Romania, without regard to conflict of law provisions.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">10.4 Severability</h3>
            <p className="text-gray-700 mb-6">If any provision is unenforceable, the remaining provisions continue in effect.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">10.5 Assignment</h3>
            <p className="text-gray-700 mb-6">You may not assign these Terms without our written consent.</p>

            <h3 className="text-xl font-bold text-[#03045e] mb-4">10.6 Force Majeure</h3>
            <p className="text-gray-700">Neither party is liable for delays due to circumstances beyond reasonable control.</p>
          </section>

          {/* Contact Information */}
          <section className="mb-12 bg-[#caf0f8]/20 p-8 rounded-3xl border border-[#90e0ef]/30">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">11. Contact Information</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Company:</strong> World Age Inno S.R.L</p>
              <p><strong>Address:</strong> Bulveradul Unirii 60</p>
              <p><strong>Country:</strong> Bucharest, Romania</p>
              <p><strong>Email:</strong> <a href="mailto:adona.creative@gmail.com" className="text-[#0077b6] hover:underline">adona.creative@gmail.com</a></p>
              <p><strong>Website:</strong> <a href="https://adona.ai" className="text-[#0077b6] hover:underline">https://adona.ai</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
