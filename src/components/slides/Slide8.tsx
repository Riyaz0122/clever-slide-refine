export const Slide8 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 animate-slide-in">
      <h2 className="text-5xl font-display font-bold text-primary mb-16">
        IP Address Structure
      </h2>
      
      <div className="w-full max-w-5xl space-y-12">
        {/* IPv4 Structure */}
        <div className="bg-card/50 backdrop-blur-sm p-10 rounded-xl border border-border/50">
          <h3 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
            <span className="px-4 py-1 bg-primary/20 rounded-lg">IPv4</span>
            Network ID + Host ID
          </h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex-1 p-6 bg-primary/20 rounded-lg border-2 border-primary">
              <div className="text-center text-primary font-bold mb-2">Network ID</div>
              <div className="text-center text-3xl font-mono text-foreground">192.168</div>
            </div>
            <div className="text-4xl text-primary">.</div>
            <div className="flex-1 p-6 bg-accent/20 rounded-lg border-2 border-accent">
              <div className="text-center text-accent font-bold mb-2">Host ID</div>
              <div className="text-center text-3xl font-mono text-foreground">1.10</div>
            </div>
          </div>
          <p className="text-center text-xl font-mono text-muted-foreground">
            Example: <span className="text-primary font-bold">192.168.1.10</span>
          </p>
        </div>

        {/* IPv6 Structure */}
        <div className="bg-card/50 backdrop-blur-sm p-10 rounded-xl border border-border/50">
          <h3 className="text-3xl font-bold text-accent mb-8 flex items-center gap-3">
            <span className="px-4 py-1 bg-accent/20 rounded-lg">IPv6</span>
            8 Groups of 16-bit Blocks
          </h3>
          <div className="grid grid-cols-8 gap-2 mb-6">
            {['2001', '0db8', '0000', '0000', '0000', '0000', '0000', '0001'].map((block, index) => (
              <div 
                key={index}
                className="p-3 bg-accent/20 rounded-lg border border-accent text-center"
              >
                <div className="text-xs text-muted-foreground mb-1">Block {index + 1}</div>
                <div className="text-sm font-mono text-foreground font-bold">{block}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xl font-mono text-muted-foreground">
            Example: <span className="text-accent font-bold">2001:db8::1</span>
          </p>
        </div>
      </div>
    </div>
  );
};
