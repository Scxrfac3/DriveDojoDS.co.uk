import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Check, ArrowRight, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  onBookNow?: () => void;
  emoji?: string;
  bgImage?: string;
  gradientColors?: string;
}

const ServiceCard = ({
  title = "Standard Driving Lesson",
  price = "£45",
  description = "Perfect for beginners looking to build confidence on the road",
  features = [
    "60-minute lesson",
    "Experienced instructor",
    "Flexible scheduling",
    "Progress tracking",
  ],
  popular = false,
  onBookNow = () => (window.location.href = "/booking"),
  emoji = "🚗",
  bgImage = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
  gradientColors = "from-blue-600/95 to-indigo-900/95",
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  return (
    <motion.div
      className="w-full max-w-[350px] h-[450px] rounded-xl overflow-hidden relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradientColors} opacity-90 group-hover:opacity-95 transition-opacity duration-300`}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-6 text-white">
        {popular && (
          <motion.div
            className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 text-sm font-bold rounded-full flex items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.3 }}
          >
            <Sparkles className="h-3 w-3 mr-1" />
            Most Popular
          </motion.div>
        )}

        <div className="mb-2 flex items-center">
          <motion.span
            className="text-2xl mr-2"
            animate={{
              rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {emoji}
          </motion.span>
          <motion.h3
            className="text-2xl font-bold"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
        </div>

        <motion.div
          className="flex items-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-white/80 ml-2 text-sm">/ lesson</span>
        </motion.div>

        <motion.p
          className="text-white/90 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="space-y-2 mb-6 flex-grow overflow-y-auto max-h-[180px] pr-2 scrollbar-thin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {features
            .slice(0, showAllFeatures ? features.length : 3)
            .map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/90">{feature}</span>
              </motion.div>
            ))}
          {features.length > 3 && (
            <motion.button
              className="text-yellow-400 text-sm flex items-center hover:text-yellow-300 transition-colors"
              whileHover={{ x: 5 }}
              onClick={() => setShowAllFeatures(!showAllFeatures)}
            >
              {showAllFeatures
                ? "Show less"
                : `Show all ${features.length} features`}
            </motion.button>
          )}
        </motion.div>

        {/* Rating Stars */}
        <motion.div
          className="flex items-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          ))}
          <span className="ml-2 text-sm text-white/80">5.0 (120+ reviews)</span>
        </motion.div>

        <motion.div
          className="mt-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/booking"
            className="block w-full"
            onClick={(e) => {
              e.preventDefault();
              onBookNow();
            }}
          >
            <motion.div
              className={`w-full ${popular ? "bg-gradient-to-r from-yellow-500 to-amber-500" : "bg-gradient-to-r from-blue-600 to-purple-600"} text-white font-medium py-3 rounded-full shadow-lg flex items-center justify-center group overflow-hidden relative`}
            >
              <span className="relative z-10">Book Now</span>
              <motion.span
                className="ml-2 relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
              <motion.span
                className="absolute inset-0 bg-white opacity-10"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          repeatType: "reverse",
          delay: 1,
        }}
      />
    </motion.div>
  );
};

export default ServiceCard;
