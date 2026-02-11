import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';

export default function RefundPolicy() {
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
            Refund Policy
          </h1>
          <p className="text-xl text-gray-600">
            Fair and transparent refund process
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            At Adona Ai, we're confident you'll love how effortlessly our AI-powered platform helps you create high-performing ad creatives, marketing visuals, and content. However, if you're not 100% satisfied, we offer a clear and fair refund policy.
          </p>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">How It Works</h2>

            <h3 className="text-2xl font-bold text-[#03045e] mb-4">Eligibility</h3>
            <p className="text-gray-700 mb-4">
              Our refund guarantee applies to all Adona Ai subscriptions purchased directly from <a href="https://adona.ai" className="text-[#0077b6] hover:underline">https://adona.ai</a>.
            </p>
            <p className="text-gray-700 mb-4">To qualify for a full refund, all of the following conditions must be met:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li>The refund request is submitted within 14 days of your subscription start date</li>
              <li>You have not created more than 25 content pieces using the platform</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#03045e] mb-4">Time Frame</h3>
            <p className="text-gray-700 mb-4">You have 14 days from the date of purchase to request a refund.</p>
            <p className="text-gray-700 mb-3">Refunds cannot be issued if:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li>More than 14 days have passed since purchase, or</li>
              <li>More than 25 content pieces have been generated after onboarding</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#03045e] mb-4">Requesting a Refund</h3>
            <p className="text-gray-700 mb-4">To request a refund, please contact us at:</p>

            <div className="bg-[#caf0f8]/20 p-6 rounded-2xl border border-[#90e0ef]/30 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#0077b6]" />
                <a href="mailto:adona.creative@gmail.com" className="text-xl font-bold text-[#0077b6] hover:underline">
                  adona.creative@gmail.com
                </a>
              </div>
              <p className="text-gray-700 mb-3"><strong>Include:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Your account email or order reference</li>
                <li>A brief reason for your request</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-8">Our team will review your request and respond within 1–2 business days.</p>

            <h3 className="text-2xl font-bold text-[#03045e] mb-4">Refund Processing</h3>
            <p className="text-gray-700 mb-4">Once approved:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Refunds are issued to the original payment method</li>
              <li>Processing typically takes 5–7 business days, depending on your payment provider</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="text-gray-800">
                <strong>Please note:</strong> All payments made after the 14-day period or after generating more than 35 content pieces are non-refundable.
              </p>
            </div>
          </section>

          {/* Conditions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">Conditions</h2>

            <h3 className="text-2xl font-bold text-[#03045e] mb-4">After the Refund Period</h3>
            <p className="text-gray-700 mb-4">Refunds are not available in any of the following cases:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>More than 14 days have passed since the initial subscription purchase</li>
              <li>More than 35 content pieces have been created</li>
              <li>Any renewals, upgrades, or subsequent billing cycles</li>
              <li>Subscription cancellation after the refund eligibility window</li>
            </ul>

            <p className="text-gray-700 mb-8">
              After this point, all payments are final and non-refundable, regardless of usage, plan type, or cancellation status.
            </p>

            <h3 className="text-2xl font-bold text-[#03045e] mb-4">Digital Subscriptions</h3>
            <p className="text-gray-700 mb-8">
              Adona Ai is a digital SaaS platform. As such, once access is granted and usage thresholds are exceeded, refunds cannot be provided. We may request feedback to help improve our services.
            </p>

            <h3 className="text-2xl font-bold text-[#03045e] mb-4">Non-Refundable Items</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Custom services</li>
              <li>Consulting</li>
              <li>Any manually delivered or personalized services</li>
            </ul>
            <p className="text-gray-700 mb-8">These items are strictly non-refundable.</p>
          </section>

          {/* Need Help */}
          <section className="mb-12 bg-gradient-to-br from-[#03045e] to-[#0077b6] text-white p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
            <p className="text-lg mb-6">If you have questions about this Refund Policy, contact us at:</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                <a href="mailto:adona.creative@gmail.com" className="text-xl font-semibold hover:underline">
                  adona.creative@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href="https://adona.ai" className="text-xl font-semibold hover:underline">
                  https://adona.ai
                </a>
              </div>
            </div>
          </section>

          {/* Quick Reference Box */}
          <section className="bg-[#caf0f8]/20 p-8 rounded-3xl border border-[#90e0ef]/30">
            <h3 className="text-2xl font-bold text-[#03045e] mb-6">Quick Reference</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-[#03045e] mb-2">✅ Refund Available</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Within 14 days of purchase</li>
                  <li>Less than 25 content pieces created</li>
                  <li>Request sent to support email</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#03045e] mb-2">❌ No Refund</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>After 14 days from purchase</li>
                  <li>More than 35 pieces created</li>
                  <li>Renewal periods</li>
                  <li>Custom/consulting services</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
