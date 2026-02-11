import React from 'react';
import Image from 'next/image';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: "High-performing design",
    holo: true,
    chatgpt: false,
    canva: false,
    competitor: false,
  },
  {
    feature: "Personalised for your brand",
    holo: true,
    chatgpt: true,
    canva: false,
    competitor: false,
  },
  {
    feature: "Works while you sleep",
    holo: true,
    chatgpt: false,
    canva: false,
    competitor: false,
  },
  {
    feature: "Easy-to-use, fun platform",
    holo: true,
    chatgpt: true,
    canva: true,
    competitor: false,
  },
  {
    feature: "Multi-language support",
    holo: true,
    chatgpt: false,
    canva: false,
    competitor: false,
  },
];

const ComparisonTable = () => {
  return (
    <section className="py-[160px] bg-[#FAFAFA] flex flex-col items-center px-6">
      <div className="text-center mb-[60px]">
        <h2 className="text-[48px] font-[700] leading-[1.2] tracking-[-0.01em] text-black mb-4">
          1 tool to do it all
        </h2>
        <p className="text-[20px] text-[#666666] font-[400]">
          Save $400/month. Just get adona.ai.
        </p>
      </div>

      <div className="w-full max-w-[1000px] bg-white rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-[#E6E6E6] relative overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#E6E6E6]">
                <th className="py-8 px-8 text-left w-[40%]"></th>
                <th className="py-8 px-4 text-center">
                  <div className="flex justify-center">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4cdbd617-1711-439d-a5f5-7af24b9a4f0b-tryholo-ai/assets/icons/wurhOh1li1JrmOIjGJ29HXSq7k-1.png" 
                      alt="adona.ai" 
                      width={48} 
                      height={48} 
                      className="object-contain"
                    />
                  </div>
                </th>
                <th className="py-8 px-4 text-center">
                  <div className="flex justify-center grayscale opacity-60">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.2819 9.81747C23.2104 8.21014 22.8427 6.13637 21.4616 4.96637C19.7825 3.54321 17.382 3.65593 15.8427 5.23485L14.7354 6.37194L13.6281 5.23485C12.0888 3.65593 9.68832 3.54321 8.0092 4.96637C6.62812 6.13637 6.26043 8.21014 7.1889 9.81747L12.7354 18.2348L18.2819 9.81747H22.2819Z" fill="black"/>
                    </svg>
                  </div>
                </th>
                <th className="py-8 px-4 text-center">
                  <div className="flex justify-center grayscale opacity-60">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2"/>
                      <path d="M12 7V17M7 12H17" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </th>
                <th className="py-8 px-4 text-center border-r-0">
                  <div className="flex justify-center grayscale opacity-60">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index !== comparisonData.length - 1 ? "border-b border-[#E6E6E6]" : ""}>
                  <td className="py-6 px-8 text-[16px] font-[500] text-[#000000]">
                    {row.feature}
                  </td>
                  <td className="py-6 px-4 text-center">
                    <div className="flex justify-center">
                      <div className="bg-[#2D8659] rounded-full p-1">
                        <Check className="text-white w-4 h-4" />
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <div className="flex justify-center">
                      {row.chatgpt ? (
                        <div className="bg-[#2D8659] rounded-full p-1">
                          <Check className="text-white w-4 h-4" />
                        </div>
                      ) : (
                        <div className="bg-[#E74C3C] rounded-full p-1">
                          <X className="text-white w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <div className="flex justify-center">
                      {row.canva ? (
                        <div className="bg-[#2D8659] rounded-full p-1">
                          <Check className="text-white w-4 h-4" />
                        </div>
                      ) : (
                        <div className="bg-[#E74C3C] rounded-full p-1">
                          <X className="text-white w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center border-r-0">
                    <div className="flex justify-center">
                      {row.competitor ? (
                        <div className="bg-[#2D8659] rounded-full p-1">
                          <Check className="text-white w-4 h-4" />
                        </div>
                      ) : (
                        <div className="bg-[#E74C3C] rounded-full p-1">
                          <X className="text-white w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="absolute bottom-4 right-8 pointer-events-none">
          <div className="relative group scale-110">
            <div className="absolute -inset-4 bg-accent-gradient blur-xl opacity-20 rounded-full animate-pulse"></div>
            <div className="flex flex-col items-center">
              <span className="text-[12px] font-bold text-black opacity-80 mb-[-4px] tracking-tight">Generated with</span>
              <span className="text-[32px] font-[800] text-accent-gradient tracking-[-0.04em]">adona.ai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
