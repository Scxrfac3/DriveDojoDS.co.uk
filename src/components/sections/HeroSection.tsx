import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  backgroundImages?: string[];
  onBookLesson?: () => void;
  onCheckPricing?: () => void;
}

const HeroSection = ({
  title = "Start Your Driving Journey Today",
  subtitle = "Learn to drive with confidence from DVSA-approved instructors. Flexible scheduling, competitive rates, and a high pass rate.",
  ctaPrimaryText = "Book a Lesson",
  ctaSecondaryText = "Check Pricing",
  backgroundImages = [
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80",
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80",
  ],
  onBookLesson = () => console.log("Book lesson clicked"),
  onCheckPricing = () => console.log("Check pricing clicked"),
}: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length,
    );
  };

  return (
    <section className="relative h-[700px] w-full overflow-hidden bg-slate-900">
      {/* Background Image Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Driving lesson ${index + 1}`}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Slideshow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl">
          {/* Logo Badge */}
          <div className="inline-flex items-center bg-primary/90 text-primary-foreground px-4 py-2 rounded-full mb-6">
            <span className="font-bold">Drive Dojo</span>
            <span className="ml-2 text-sm">Driving School</span>
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-lg">{subtitle}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold flex items-center gap-2"
              onClick={onBookLesson}
            >
              <Calendar className="w-5 h-5" />
              {ctaPrimaryText}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/20 hover:text-white flex items-center gap-2"
              onClick={onCheckPricing}
            >
              <span className="w-5 h-5 flex items-center justify-center font-bold">
                £
              </span>
              {ctaSecondaryText}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <span className="text-white text-sm">5-star rated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-white text-sm">Certified instructors</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <span className="text-white text-sm">10,000+ students</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
