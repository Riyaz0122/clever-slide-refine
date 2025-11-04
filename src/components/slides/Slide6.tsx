import ipv6Image from "@/assets/slide6-ipv6.jpg";

export const Slide6 = () => {
  const features = [
    "128-bit address format written in hexadecimal.",
    "Example: 2001:0db8:85a3::8a2e:0370:7334",
    "Provides huge address space (3.4 × 10³⁸ addresses).",
    "Supports auto-configuration, security (IPSec), and efficient routing.",
    "Eliminates need for NAT (Network Address Translation)."
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 animate-slide-in">
      <h2 className="text-5xl font-display font-bold text-accent mb-8">
        IPv6 (Internet Protocol version 6)
      </h2>
      
      <div className="grid grid-cols-2 gap-12 w-full max-w-6xl">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-background text-sm font-bold mt-1">
                {index + 1}
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold text-primary mb-6">128-Bits Address Structure</h3>
          <div className="bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-border shadow-lg w-full">
            <div className="flex items-center justify-center mb-6">
              <img src={ipv6Image} alt="IPv6 Diagram" className="max-w-sm h-auto object-contain" />
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="p-3 bg-background rounded border-l-4 border-primary">
                <div className="font-bold text-primary">Network part - 48 Bits</div>
                <div className="text-xs text-muted-foreground mt-1">Global routing prefix</div>
              </div>
              <div className="p-3 bg-background rounded border-l-4 border-accent">
                <div className="font-bold text-accent">Subnet ID - 16 Bits</div>
                <div className="text-xs text-muted-foreground mt-1">Subnet identifier</div>
              </div>
              <div className="p-3 bg-background rounded border-l-4 border-secondary">
                <div className="font-bold text-secondary">Client ID - 64 Bits</div>
                <div className="text-xs text-muted-foreground mt-1">Interface identifier</div>
              </div>
            </div>
            <p className="text-center text-base font-mono text-primary mt-4 p-2 bg-background rounded">
              2001:0db8:0000:0000:34f4:0000:0000:f3dd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
