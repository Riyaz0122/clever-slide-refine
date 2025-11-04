import slideIcon from "@/assets/slide1-icon.jpg";

export const Slide1 = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center gap-8 animate-slide-in">
      <div className="flex items-center justify-center mb-4">
        <img src={slideIcon} alt="Network Icon" className="w-32 h-32 object-contain" />
      </div>
      
      <h1 className="text-6xl font-display font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
        IP Protocol and Addressing<br />on the Internet
      </h1>
      
      <div className="mt-8 space-y-4">
        <p className="text-2xl font-semibold text-muted-foreground">
          Seminar Topic: <span className="text-accent">Computer Networks</span>
        </p>
        <p className="text-xl text-muted-foreground">
          Presented by: <span className="text-foreground font-medium">Shaik Riyaz</span>
        </p>
      </div>
      
      <p className="mt-8 text-lg text-muted-foreground max-w-3xl">
        Overview of Internet Protocol (IP) and its addressing system used for communication between networked devices.
      </p>
      
      <div className="mt-4 flex gap-4 font-mono text-sm text-primary">
        <span className="px-3 py-1 bg-card rounded">192.256.468</span>
        <span className="px-3 py-1 bg-card rounded">192.265.345</span>
        <span className="px-3 py-1 bg-card rounded">192.245.324</span>
        <span className="px-3 py-1 bg-card rounded">192.256.424</span>
        <span className="px-3 py-1 bg-card rounded">192.256.458</span>
      </div>
    </div>
  );
};
