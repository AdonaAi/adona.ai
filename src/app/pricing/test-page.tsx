"use client";

import React from 'react';
import Link from 'next/link';

const TestPricingPage = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">Pricing Test Page</h1>
      <p>If you can see this, the routing works!</p>
      <Link href="/" className="text-blue-500 underline">Go back home</Link>
    </div>
  );
};

export default TestPricingPage;
