const ContentIntelligenceStats = () => {
    return (
        <section className="bg-white py-[60px] md:py-[80px] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto border-t border-[#F1F1F1] pt-12">
                    <p className="text-center text-[18px] md:text-[22px] font-semibold mb-10 tracking-tight bg-gradient-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent">
                        This isn't just AI. It's content intelligence.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center lg:text-center px-4">
                        {[
                            { value: '10M+', label: 'various content assets processed' },
                            { value: '19,000+', label: 'high-performing ads analyzed' },
                            { value: '27%', label: 'average CTR lift across tested campaigns' },
                            { value: '95+', label: 'languages supported for global brands' },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-[36px] md:text-[52px] font-black bg-gradient-to-r from-[#03045e] via-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent leading-none mb-3 px-1 pb-1">
                                    {item.value}
                                </span>
                                <p className="text-[14px] md:text-[16px] text-[#6E6E73] leading-snug lg:max-w-[200px] font-medium">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentIntelligenceStats;
