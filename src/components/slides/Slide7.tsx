export const Slide7 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 animate-slide-in">
      <h2 className="text-5xl font-display font-bold text-primary mb-16">
        Comparison: IPv4 vs IPv6
      </h2>
      
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 gap-8">
          {/* IPv4 Column */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border-2 border-primary/50">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">IPv4</h3>
            <div className="space-y-4">
              <div className="p-4 bg-background rounded-lg">
                <div className="font-semibold text-primary mb-1">Address Size</div>
                <div className="text-foreground">32-bit</div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="font-semibold text-primary mb-1">Format</div>
                <div className="text-foreground">Decimal (192.168.1.1)</div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="font-semibold text-primary mb-1">Address Space</div>
                <div className="text-foreground">~4.3 Billion Addresses</div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="font-semibold text-primary mb-1">Security</div>
                <div className="text-foreground">No Built-in Security</div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="font-semibold text-primary mb-1">NAT</div>
                <div className="text-foreground">Uses NAT</div>
              </div>
            </div>
          </div>

          {/* IPv6 Column */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border-2 border-accent/50">
            <h3 className="text-3xl font-bold text-accent mb-8 text-center">IPv6</h3>
            <div className="space-y-4">
              <div className="p-4 bg-background rounded-lg">
                <div className="font-semibold text-accent mb-1">Address Size</div>
                <div className="text-foreground">128-bit</div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="font-semibold text-accent mb-1">Format</div>
                <div className="text-foreground">Hexadecimal (2001:db8::1)</div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="font-semibold text-accent mb-1">Address Space</div>
                <div className="text-foreground">Virtually Unlimited</div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="font-semibold text-accent mb-1">Security</div>
                <div className="text-foreground">Built-in IPSec Security</div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="font-semibold text-accent mb-1">NAT</div>
                <div className="text-foreground">No NAT Required</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
