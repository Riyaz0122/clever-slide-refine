import { useState } from "react";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slide1 } from "./slides/Slide1";
import { Slide2 } from "./slides/Slide2";
import { Slide3 } from "./slides/Slide3";
import { Slide4 } from "./slides/Slide4";
import { Slide5 } from "./slides/Slide5";
import { Slide6 } from "./slides/Slide6";
import { Slide7 } from "./slides/Slide7";
import { Slide8 } from "./slides/Slide8";
import { Slide9 } from "./slides/Slide9";
import { Slide10 } from "./slides/Slide10";
import { Slide11 } from "./slides/Slide11";

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, 
  Slide7, Slide8, Slide9, Slide10, Slide11
];

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: 'var(--gradient-primary)' }}>
      {/* Slide Content */}
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="w-full max-w-7xl h-full flex items-center justify-center animate-fade-in">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-card/80 backdrop-blur-sm hover:bg-card disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-card/80 backdrop-blur-sm hover:bg-card disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Home Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCurrentSlide(0)}
        className="absolute top-8 left-8 bg-card/80 backdrop-blur-sm hover:bg-card"
      >
        <Home className="h-5 w-5" />
      </Button>

      {/* Keyboard Navigation */}
      <div className="sr-only">
        Press Left/Right arrow keys to navigate
      </div>
    </div>
  );
};
