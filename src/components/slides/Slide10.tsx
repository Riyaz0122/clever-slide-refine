export const Slide10 = () => {
  const roles = [
    "IP enables end-to-end communication between devices.",
    "Provides logical addressing for packet delivery.",
    "Ensures packets reach correct destination via routing.",
    "Foundation of the Internet architecture."
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 animate-slide-in">
      <h2 className="text-5xl font-display font-bold text-primary mb-16">
        Role of IP in Internet Communication
      </h2>
      
      <div className="w-full max-w-4xl space-y-6">
        {roles.map((role, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:border-accent/50 transition-all group"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold text-lg group-hover:scale-110 transition-transform">
              {index + 1}
            </div>
            <p className="text-2xl text-foreground leading-relaxed pt-2">
              {role}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-primary/10 backdrop-blur-sm p-8 rounded-xl border border-primary/30 max-w-4xl">
        <p className="text-xl text-center text-foreground font-medium">
          IP is the cornerstone protocol that makes global Internet communication possible, 
          enabling billions of devices to connect and exchange information seamlessly.
        </p>
      </div>
    </div>
  );
};
