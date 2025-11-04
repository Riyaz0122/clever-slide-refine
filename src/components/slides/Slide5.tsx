import ipv4Image from "@/assets/slide5-ipv4.png";

export const Slide5 = () => {
  const features = [
    "32-bit address format divided into four octets.",
    "Written in decimal, e.g., 192.168.1.1",
    "Total ~4.3 billion unique addresses.",
    "Uses classes (A, B, C, D, E) for different network sizes.",
    "Limitations: address exhaustion, manual configuration, no built-in security."
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 animate-slide-in">
      <h2 className="text-5xl font-display font-bold text-primary mb-8">
        IPv4 (Internet Protocol version 4)
      </h2>
      
      <div className="grid grid-cols-2 gap-12 w-full max-w-6xl">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-background text-sm font-bold mt-1">
                {index + 1}
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold text-accent mb-6">IPv4 Address Format</h3>
          <div className="bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-border shadow-lg">
            <img src={ipv4Image} alt="IPv4 Address Format" className="w-full h-auto" />
            <div className="mt-6 grid grid-cols-4 gap-4 text-center font-mono">
              <div className="p-3 bg-background rounded">
                <div className="text-2xl font-bold text-primary">192</div>
                <div className="text-xs text-muted-foreground mt-1">1st Octet</div>
              </div>
              <div className="p-3 bg-background rounded">
                <div className="text-2xl font-bold text-primary">168</div>
                <div className="text-xs text-muted-foreground mt-1">2nd Octet</div>
              </div>
              <div className="p-3 bg-background rounded">
                <div className="text-2xl font-bold text-primary">43</div>
                <div className="text-xs text-muted-foreground mt-1">3rd Octet</div>
              </div>
              <div className="p-3 bg-background rounded">
                <div className="text-2xl font-bold text-primary">241</div>
                <div className="text-xs text-muted-foreground mt-1">4th Octet</div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">32 Bits (4 Bytes)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
