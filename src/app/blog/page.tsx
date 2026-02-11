import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export const metadata = {
    title: "Blog | Coming Soon - Adona AI",
    description: "Our blog is coming soon. Stay tuned for the latest updates, tips, and insights on AI-powered marketing.",
};

export default function BlogPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            
            {/* Coming Soon Hero */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f9ff]">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 mb-8">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                            </span>
                            <span className="text-sm font-medium text-blue-600">Coming Soon</span>
                        </div>

                        {/* Main heading */}
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Our Blog is
                            <span className="bg-gradient-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent"> Launching Soon</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We're working on amazing content about AI-powered marketing, industry insights, 
                            tips & tricks, and success stories. Stay tuned!
                        </p>

                        {/* Email signup */}
                        <div className="max-w-md mx-auto mb-12">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-[#0077b6] text-gray-800 placeholder:text-gray-500"
                                />
                                <button className="px-6 py-3 bg-transparent border-2 border-[#0077b6] text-[#0077b6] text-sm font-semibold rounded-full hover:bg-[#0077b6] hover:text-white transition-all duration-300 whitespace-nowrap">
                                    Notify Me
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-3">
                                Be the first to know when we launch. No spam, we promise.
                            </p>
                        </div>

                        {/* Topics coming */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "AI Marketing Tips",
                                "Case Studies", 
                                "Product Updates",
                                "Industry Trends",
                                "How-to Guides"
                            ].map((topic, index) => (
                                <span 
                                    key={index}
                                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 border border-gray-200 shadow-sm"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Animated dots decoration */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <div className="flex gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
