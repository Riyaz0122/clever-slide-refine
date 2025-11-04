export const Slide4 = () => {
  const points = [
    "Every device on a network is assigned a unique IP address.",
    "IP address identifies both the host and the network.",
    "Two versions: IPv4 and IPv6."
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 animate-slide-in">
      <h2 className="text-5xl font-display font-bold text-primary mb-16">
        IP Addressing Basics
      </h2>
      
      <div className="w-full max-w-4xl space-y-6">
        {points.map((point, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:border-accent/50 transition-all"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-background font-bold text-lg">
              {index + 1}
            </div>
            <p className="text-2xl text-foreground leading-relaxed pt-2">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
