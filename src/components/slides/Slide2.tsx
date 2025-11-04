export const Slide2 = () => {
  const points = [
    "IP (Internet Protocol) is a network layer protocol used for logical addressing.",
    "It defines how data packets are addressed and routed between source and destination.",
    "Works in conjunction with TCP or UDP.",
    "Operates in the Network Layer (Layer 3) of the OSI model."
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 animate-slide-in">
      <h2 className="text-5xl font-display font-bold text-primary mb-16">
        Introduction to IP Protocol
      </h2>
      
      <div className="w-full max-w-4xl space-y-6">
        {points.map((point, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold">
              {index + 1}
            </div>
            <p className="text-xl text-foreground leading-relaxed pt-1">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
