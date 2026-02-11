"use client";

import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');

  const handleGoogleLogin = () => {
    // Implement Google OAuth login
    console.log('Google login clicked');
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-white">
      {/* Background decorative elements - matching homepage */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#caf0f8] blur-[150px] rounded-full"></div>
        <div className="absolute top-[-15%] right-[-5%] w-[50%] h-[50%] bg-[#90e0ef] blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-[#00b4d8]/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Main login container */}
      <div className="relative z-10 w-full max-w-lg px-4 sm:px-6 md:px-8">
        {/* Cute octopus character */}
        <div className="flex justify-center -mb-15 relative z-20">
          <div className="relative">
            {/* Octopus head */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-full shadow-xl flex items-center justify-center relative">
              {/* Eyes */}
              <div className="flex gap-4 sm:gap-5 md:gap-6 mb-2">
                <div className="relative">
                  <div className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8 bg-gray-900 rounded-full"></div>
                  <div className="absolute top-1 left-1 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
                </div>
                <div className="relative">
                  <div className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8 bg-gray-900 rounded-full"></div>
                  <div className="absolute top-1 left-1 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
                </div>
              </div>
              {/* Smile */}
              <div className="absolute bottom-6 sm:bottom-7 md:bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-5 sm:w-11 sm:h-5.5 md:w-12 md:h-6 border-b-3 sm:border-b-3.5 md:border-b-4 border-gray-900 rounded-b-full"></div>
              </div>
            </div>

            {/* Octopus arms on sides */}
            <div className="absolute -left-6 sm:-left-7 md:-left-8 top-16 sm:top-18 md:top-20 w-16 h-12 sm:w-18 sm:h-14 md:w-20 md:h-16 bg-white rounded-full shadow-lg"></div>
            <div className="absolute -right-6 sm:-right-7 md:-right-8 top-16 sm:top-18 md:top-20 w-16 h-12 sm:w-18 sm:h-14 md:w-20 md:h-16 bg-white rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Login card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-[30px] sm:rounded-[35px] md:rounded-[40px] shadow-2xl border border-[#e2e8f0] p-6 pt-16 sm:p-8 sm:pt-18 md:p-10 md:pt-20">
          <h1 className="text-3xl sm:text-3.5xl md:text-4xl font-bold text-center mb-6 sm:mb-7 md:mb-8 bg-linear-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent">
            Login
          </h1>

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white border-2 border-gray-200 rounded-full py-3 px-4 sm:py-3.5 sm:px-5 md:py-4 md:px-6 flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg mb-4 sm:mb-5 md:mb-6"
          >
            <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="font-semibold text-sm sm:text-base text-gray-700">Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 sm:gap-3.5 md:gap-4 my-4 sm:my-5 md:my-6">
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
            <span className="text-xs sm:text-sm text-gray-400 font-medium">OR</span>
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Email form */}
          <form onSubmit={handleEmailSubmit} className="space-y-3 sm:space-y-3.5 md:space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-full py-3 px-4 sm:py-3.5 sm:px-5 md:py-4 md:px-6 text-sm sm:text-base focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8] text-white rounded-full py-3 px-4 sm:py-3.5 sm:px-5 md:py-4 md:px-6 font-bold text-base sm:text-lg shadow-lg hover:shadow-[0_20px_50px_rgba(0,119,182,0.4)] hover:scale-[1.05] transition-all duration-300"
            >
              Get Confirmation Code
            </button>
          </form>

          {/* Footer link */}
          <div className="text-center mt-4 sm:mt-5 md:mt-6">
            <button className="text-xs sm:text-sm text-[#0077b6] hover:text-[#03045e] transition-colors font-medium">
              Use email + password
            </button>
          </div>
        </div>

        {/* Terms and Privacy */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-7 md:mt-8">
          <a href="/terms-of-service" className="text-xs sm:text-sm text-gray-600 hover:text-[#03045e] font-medium transition-colors">
            Terms & Conditions
          </a>
          <a href="/privacy-policy" className="text-xs sm:text-sm text-gray-600 hover:text-[#03045e] font-medium transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
