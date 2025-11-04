export const Slide9 = () => {
  const methods = [
    {
      title: "Dual Stack",
      description: "Devices run both IPv4 and IPv6.",
      icon: "🔄"
    },
    {
      title: "Tunneling",
      description: "IPv6 packets inside IPv4 packets.",
      icon: "🚇"
    },
    {
      title: "Translation",
      description: "Converts IPv6 to IPv4 using NAT64/DNS64.",
      icon: "⚙️"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 animate-slide-in">
      <h2 className="text-5xl font-display font-bold text-primary mb-16">
        Transition from IPv4 to IPv6
      </h2>
      
      <div className="w-full max-w-5xl grid grid-cols-3 gap-8">
        {methods.map((method, index) => (
          <div 
            key={index}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-all flex flex-col items-center text-center"
          >
            <div className="text-6xl mb-6">{method.icon}</div>
            <h3 className="text-2xl font-bold text-primary mb-4">{method.title}</h3>
            <p className="text-lg text-foreground leading-relaxed">{method.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-accent/10 backdrop-blur-sm p-6 rounded-xl border border-accent/30 max-w-4xl">
        <p className="text-lg text-center text-foreground">
          These transition mechanisms enable smooth migration from IPv4 to IPv6, 
          allowing both protocols to coexist during the gradual adoption of IPv6.
        </p>
      </div>
    </div>
  );
};
