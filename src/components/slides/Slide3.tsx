import slideDiagram from "@/assets/slide3-diagram.jpg";

export const Slide3 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 animate-slide-in">
      <h2 className="text-5xl font-display font-bold text-primary mb-12">
        Types of IP
      </h2>
      
      <div className="flex items-center justify-center mb-12">
        <img src={slideDiagram} alt="IP Types Diagram" className="max-w-md h-auto object-contain rounded-xl shadow-lg" />
      </div>
      
      <h3 className="text-3xl font-semibold text-accent mb-8">
        Four types of IP Addresses
      </h3>
      
      <div className="grid grid-cols-2 gap-8 max-w-3xl">
        <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50">
          <h4 className="text-2xl font-bold text-primary mb-4">Public</h4>
          <p className="text-muted-foreground">Accessible from the internet</p>
        </div>
        
        <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50">
          <h4 className="text-2xl font-bold text-accent mb-4">Private</h4>
          <p className="text-muted-foreground">Used within local networks</p>
        </div>
        
        <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50">
          <h4 className="text-2xl font-bold text-primary mb-4">Static</h4>
          <p className="text-muted-foreground">Permanently assigned address</p>
        </div>
        
        <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50">
          <h4 className="text-2xl font-bold text-accent mb-4">Dynamic</h4>
          <p className="text-muted-foreground">Temporarily assigned via DHCP</p>
        </div>
      </div>
    </div>
  );
};
