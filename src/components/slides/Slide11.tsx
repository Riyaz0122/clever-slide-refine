export const Slide11 = () => {
  const conclusions = [
    "IP protocol is vital for global communication.",
    "IPv6 solves IPv4's limitations and ensures scalability.",
    "Understanding IP addressing helps design efficient networks."
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 animate-slide-in text-center">
      <h2 className="text-6xl font-display font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-16">
        Conclusion
      </h2>
      
      <div className="w-full max-w-4xl space-y-8 mb-16">
        {conclusions.map((conclusion, index) => (
          <div 
            key={index}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-all"
          >
            <p className="text-2xl text-foreground leading-relaxed">
              {conclusion}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="text-5xl font-display font-bold text-primary">
          Thank You!
        </div>
        <div className="text-2xl text-muted-foreground">
          Questions & Discussion
        </div>
        <div className="mt-8 text-lg text-muted-foreground">
          Presented by: <span className="text-foreground font-semibold">Shaik Riyaz</span>
        </div>
      </div>
    </div>
  );
};
