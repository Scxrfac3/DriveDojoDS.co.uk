import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  ChevronRight,
  Heart,
  Share2,
  Sparkles,
  ZoomIn,
  Music,
  Volume2,
  VolumeX,
  Flame,
  Rocket,
  Star,
} from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  tag: string;
  description: string;
}

interface DrivingGalleryProps {
  title?: string;
  subtitle?: string;
  images?: GalleryImage[];
}

// Audio player for Gen Z vibes
const AudioPlayer = ({
  audioUrl = "https://storage.googleapis.com/tempo-public-assets/lofi-driving-beat.mp3",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <audio ref={audioRef} src={audioUrl} loop />
      <button onClick={togglePlay} className="focus:outline-none">
        {isPlaying ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </button>
      <span className="text-sm">
        {isPlaying ? "Mute Vibes" : "Play Driving Beats"}
      </span>
      <motion.div
        animate={{
          rotate: isPlaying ? [0, 360] : 0,
        }}
        transition={{
          repeat: isPlaying ? Infinity : 0,
          duration: 2,
          ease: "linear",
        }}
      >
        <Music className="h-4 w-4 text-blue-400" />
      </motion.div>
    </motion.div>
  );
};

const DrivingGallery = ({
  title = "Success Stories",
  subtitle = "Meet our proud graduates who passed their driving tests with flying colors",
  images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
      alt: "James, 19 - Passed First Time",
      tag: "First Attempt",
      description:
        "After just 20 hours of lessons, James passed his test with only 2 minor faults!",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      alt: "Sarah, 25 - Overcame Anxiety",
      tag: "Confidence Builder",
      description:
        "Sarah conquered her driving anxiety and passed after our specialized confidence-building course",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
      alt: "Emma, 30 - Career Change",
      tag: "Adult Learner",
      description:
        "Emma needed her license for a new job opportunity and passed within 2 months of intensive training",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      alt: "David, 18 - Passed with Zero Faults",
      tag: "Perfect Score",
      description:
        "David achieved a perfect test score with zero faults after completing our 20-hour package",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
      alt: "Priya, 22 - International Student",
      tag: "International",
      description:
        "Priya adapted to UK driving rules quickly and passed her test just 3 months after arriving in the country",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
      alt: "Michael, 45 - Refresher Course",
      tag: "Returning Driver",
      description:
        "After 15 years without driving, Michael regained his confidence and passed his test with our refresher program",
    },
  ],
}: DrivingGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate featured image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedImages.includes(id)) {
      setLikedImages(likedImages.filter((imageId) => imageId !== id));
    } else {
      setLikedImages([...likedImages, id]);
    }
  };

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-8 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Gen Z Audio Player */}
      <AudioPlayer />

      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Featured Image - Larger display */}
        <motion.div
          className="mb-8 relative rounded-xl overflow-hidden shadow-xl h-[400px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <motion.div
                  className="flex items-center mb-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mr-2">
                    {images[activeIndex].tag}
                  </span>
                  <div className="flex space-x-2">
                    <motion.button
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => handleLike(images[activeIndex].id, e)}
                    >
                      <Heart
                        className={`h-4 w-4 ${likedImages.includes(images[activeIndex].id) ? "fill-red-500 text-red-500" : "text-white"}`}
                      />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Share2 className="h-4 w-4 text-white" />
                    </motion.button>
                  </div>
                </motion.div>

                <motion.h2
                  className="text-2xl font-bold mb-1"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {images[activeIndex].alt}
                </motion.h2>

                <motion.p
                  className="text-white/80"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {images[activeIndex].description}
                </motion.p>
              </div>

              <div className="absolute right-6 bottom-6 flex space-x-2">
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => openLightbox(images[activeIndex])}
                >
                  <ZoomIn className="h-5 w-5" />
                </motion.button>

                <motion.button
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  onClick={() => {
                    // Simulate sharing to social media
                    alert("Shared to your social media! 📱✨");
                  }}
                >
                  <Share2 className="h-5 w-5" />
                </motion.button>

                <motion.button
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-2 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Flame className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-white" : "bg-white/50"}`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group rounded-lg overflow-hidden shadow-lg h-[250px] cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-white bg-blue-600/90 px-2 py-1 rounded-full">
                    {image.tag}
                  </span>

                  <motion.button
                    className="p-1.5 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => handleLike(image.id, e)}
                  >
                    <Heart
                      className={`h-3.5 w-3.5 ${likedImages.includes(image.id) ? "fill-red-500 text-red-500" : "text-white"}`}
                    />
                  </motion.button>
                </div>

                <h3 className="text-white font-bold text-sm md:text-base group-hover:text-blue-300 transition-colors">
                  {image.alt}
                </h3>

                <motion.div
                  className="mt-2 flex items-center text-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <span>View details</span>
                  <ChevronRight className="h-3 w-3 ml-1" />
                </motion.div>
              </div>

              {/* Animated highlight effect */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-400/0 rounded-lg"
                whileHover={{ borderColor: "rgba(96, 165, 250, 0.5)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Gen Z Interactive Elements */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.button
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-2 h-4 w-4" />
                Read More Success Stories
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.span>
              </span>
              <motion.span
                className="absolute inset-0 bg-white opacity-10"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.button>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full shadow-md"
                whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm">Instagram</span>
              </motion.button>

              <motion.button
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="text-sm">TikTok</span>
              </motion.button>

              <motion.button
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="h-4 w-4" />
                <span className="text-sm">VC Backed</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[80vh] bg-black rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              <div className="absolute top-4 right-4 flex space-x-2">
                <motion.button
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleLike(selectedImage.id, e)}
                >
                  <Heart
                    className={`h-5 w-5 ${likedImages.includes(selectedImage.id) ? "fill-red-500 text-red-500" : "text-white"}`}
                  />
                </motion.button>
                <motion.button
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Share2 className="h-5 w-5 text-white" />
                </motion.button>
                <motion.button
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeLightbox}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              <div className="p-4 bg-black/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-1">
                  {selectedImage.alt}
                </h3>
                <p className="text-white/80">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DrivingGallery;
