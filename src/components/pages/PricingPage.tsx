import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import {
  ArrowRight,
  Check,
  X,
  Sparkles,
  Zap,
  Clock,
  Calendar,
  Car,
  Shield,
  Award,
  ThumbsUp,
  Flame,
  Rocket,
  Star,
  TrendingUp,
  DollarSign,
  Gift,
  Music,
  Volume2,
  VolumeX,
  Share2,
  Heart,
  MessageCircle,
  Instagram,
  Twitter,
  Youtube,
  Smartphone,
  Headphones,
  Crown,
  Lightbulb,
  Calculator,
} from "lucide-react";
import { Button } from "../ui/button";
import { MagnetButton } from "../ui/magnetic-button";
import confetti from "canvas-confetti";

interface PricingTierProps {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
  emoji?: string;
  bgImage: string;
  gradientColors: string;
  index: number;
  ctaText?: string;
  ctaLink?: string;
  badge?: string;
  badgeColor?: string;
  discount?: string;
  vcBacked?: boolean;
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

// Floating social proof notification
const FloatingNotification = () => {
  const [notifications, setNotifications] = useState([
    {
      name: "Alex",
      action: "just booked a 10-hour package",
      time: "2 minutes ago",
    },
    {
      name: "Sarah",
      action: "passed their test today!",
      time: "5 minutes ago",
    },
    {
      name: "Jamie",
      action: "saved £50 with our package deal",
      time: "12 minutes ago",
    },
    {
      name: "Taylor",
      action: "booked their first lesson",
      time: "15 minutes ago",
    },
  ]);
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification every 10 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      // Hide after 5 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
      }, 5000);
      return () => clearTimeout(hideTimer);
    }, 10000);

    return () => clearTimeout(showTimer);
  }, [currentNotification, notifications.length]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-6 z-50 bg-white shadow-xl rounded-lg overflow-hidden max-w-xs"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="p-4 flex items-start gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
              {currentNotification % 2 === 0 ? (
                <Zap className="h-5 w-5" />
              ) : (
                <Star className="h-5 w-5" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                {notifications[currentNotification].name}{" "}
                <span className="font-normal text-gray-600">
                  {notifications[currentNotification].action}
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {notifications[currentNotification].time}
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const PricingTier = ({
  title,
  price,
  originalPrice,
  description,
  features,
  popular = false,
  emoji,
  bgImage,
  gradientColors,
  index,
  ctaText = "Book Now",
  ctaLink = "/booking",
  badge,
  badgeColor = "bg-blue-600",
  discount,
  vcBacked = false,
}: PricingTierProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLiked) {
      // Trigger confetti when liking
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
    setIsLiked(!isLiked);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowShareOptions(!showShareOptions);
  };

  return (
    <motion.div
      className="h-[500px] perspective-1000 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div
              className={`absolute inset-0 ${gradientColors} opacity-90 group-hover:opacity-95 transition-opacity duration-300`}
            ></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              {/* Badges and labels */}
              <div className="flex justify-between items-start">
                {badge && (
                  <motion.div
                    className={`${badgeColor} text-white px-3 py-1 text-sm font-bold rounded-full flex items-center`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
                  >
                    {badge}
                  </motion.div>
                )}

                {popular && (
                  <motion.div
                    className="bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-full flex items-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, delay: 0.3 }}
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    Most Popular
                  </motion.div>
                )}

                {vcBacked && (
                  <motion.div
                    className="bg-black text-white px-3 py-1 text-sm font-bold rounded-full flex items-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, delay: 0.3 }}
                  >
                    <Rocket className="h-3 w-3 mr-1" />
                    VC Backed
                  </motion.div>
                )}
              </div>

              <div>
                <motion.div
                  className="flex items-center mb-2"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="text-2xl mr-2"
                    animate={{ rotate: isHovered ? [0, -10, 10, -10, 0] : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {emoji}
                  </motion.span>
                  <h3 className="text-2xl font-bold drop-shadow-md">{title}</h3>
                </motion.div>

                <div className="flex items-center mb-4">
                  {originalPrice && (
                    <span className="text-white/70 line-through text-lg mr-2">
                      {originalPrice}
                    </span>
                  )}
                  <span className="text-3xl font-bold">{price}</span>

                  {discount && (
                    <motion.span
                      className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      Save {discount}
                    </motion.span>
                  )}
                </div>

                <p className="text-white/90 drop-shadow-md">{description}</p>
              </div>

              <div className="space-y-2 mb-6">
                {features.slice(0, 3).map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </motion.div>
                ))}
                {features.length > 3 && (
                  <motion.div
                    className="text-xs text-white/80 italic text-center mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Tap card to see all features 👆
                  </motion.div>
                )}
              </div>

              {/* Social actions */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <motion.button
                    className={`p-2 rounded-full ${isLiked ? "bg-red-500/20" : "bg-white/20"} hover:bg-white/30`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleLike}
                  >
                    <Heart
                      className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : "text-white"}`}
                    />
                  </motion.button>

                  <motion.div className="relative">
                    <motion.button
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4 text-white" />
                    </motion.button>

                    <AnimatePresence>
                      {showShareOptions && (
                        <motion.div
                          className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-lg p-2 flex space-x-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                        >
                          <motion.button
                            className="p-2 rounded-full bg-blue-500 text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Twitter className="h-4 w-4" />
                          </motion.button>
                          <motion.button
                            className="p-2 rounded-full bg-pink-600 text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Instagram className="h-4 w-4" />
                          </motion.button>
                          <motion.button
                            className="p-2 rounded-full bg-green-500 text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MessageCircle className="h-4 w-4" />
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  <span className="text-xs ml-1 text-white/80">5.0</span>
                </div>
              </div>

              <motion.button
                className="w-full bg-white text-black hover:bg-white/90 font-bold text-sm py-3 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = ctaLink;
                }}
              >
                {ctaText}
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden rotate-y-180 bg-gradient-to-br from-blue-900 to-indigo-900 p-6 text-white shadow-lg">
          <div className="h-full flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 p-2 rounded-full mr-3">
                {emoji && (
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {emoji}
                  </motion.span>
                )}
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
            </div>

            <div className="space-y-2 mb-6 flex-grow overflow-y-auto max-h-[280px] pr-2 scrollbar-thin">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="w-full bg-white text-black hover:bg-white/90 font-bold text-sm py-3 rounded-lg flex items-center justify-center mt-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = ctaLink;
              }}
            >
              {ctaText}
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.button>

            <motion.p
              className="text-xs text-white/80 italic text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Tap to flip back
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface ComparisonFeatureProps {
  feature: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
  index: number;
}

const ComparisonFeature = ({
  feature,
  basic,
  standard,
  premium,
  index,
}: ComparisonFeatureProps) => {
  return (
    <motion.div
      className="grid grid-cols-4 py-3 border-b border-gray-200 last:border-b-0"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="text-sm text-gray-600">{feature}</div>
      <div className="flex justify-center">
        {basic ? (
          <motion.div whileHover={{ scale: 1.2 }} className="text-green-500">
            <Check className="h-5 w-5" />
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.2 }} className="text-red-500">
            <X className="h-5 w-5" />
          </motion.div>
        )}
      </div>
      <div className="flex justify-center">
        {standard ? (
          <motion.div whileHover={{ scale: 1.2 }} className="text-green-500">
            <Check className="h-5 w-5" />
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.2 }} className="text-red-500">
            <X className="h-5 w-5" />
          </motion.div>
        )}
      </div>
      <div className="flex justify-center">
        {premium ? (
          <motion.div whileHover={{ scale: 1.2 }} className="text-green-500">
            <Check className="h-5 w-5" />
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.2 }} className="text-red-500">
            <X className="h-5 w-5" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Interactive price calculator
const PriceCalculator = () => {
  const [hours, setHours] = useState(10);
  const [includeTheory, setIncludeTheory] = useState(false);
  const [includeMockTest, setIncludeMockTest] = useState(false);
  const [totalPrice, setTotalPrice] = useState(300);
  const [savings, setSavings] = useState(50);

  useEffect(() => {
    // Base price calculation
    let basePrice = hours * 30; // £30 per hour
    let discountedPrice = basePrice;
    let totalSavings = 0;

    // Apply bulk discount
    if (hours >= 20) {
      discountedPrice = hours * 28.5; // £28.50 per hour for 20+ hours
      totalSavings += basePrice - discountedPrice;
    } else if (hours >= 10) {
      discountedPrice = hours * 30; // £30 per hour for 10-19 hours
      totalSavings += 50; // Flat £50 discount for 10+ hours
      discountedPrice -= 50;
    }

    // Add theory test support
    if (includeTheory) {
      discountedPrice += 30;
    }

    // Add mock test
    if (includeMockTest) {
      discountedPrice += 45;
    }

    setTotalPrice(Math.round(discountedPrice));
    setSavings(Math.round(totalSavings));
  }, [hours, includeTheory, includeMockTest]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-4 flex items-center">
        <CalculatorIcon className="h-6 w-6 mr-2 text-blue-600" />
        Custom Package Calculator
      </h3>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Hours: {hours}
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="1"
            max="40"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-lg font-bold">{hours}h</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="theory"
            checked={includeTheory}
            onChange={() => setIncludeTheory(!includeTheory)}
            className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2"
          />
          <label htmlFor="theory" className="text-gray-700">
            Include Theory Test Support (+£30)
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="mockTest"
            checked={includeMockTest}
            onChange={() => setIncludeMockTest(!includeMockTest)}
            className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2"
          />
          <label htmlFor="mockTest" className="text-gray-700">
            Include Mock Driving Test (+£45)
          </label>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Total Price:</span>
          <span className="text-2xl font-bold text-blue-700">
            £{totalPrice}
          </span>
        </div>

        {savings > 0 && (
          <motion.div
            className="flex justify-between items-center text-green-700"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: 3, duration: 0.5 }}
          >
            <span>You Save:</span>
            <span className="font-bold">£{savings}</span>
          </motion.div>
        )}
      </div>

      <motion.button
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg flex items-center justify-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={triggerConfetti}
      >
        Book This Custom Package
        <ArrowRight className="ml-2 h-4 w-4" />
      </motion.button>
    </motion.div>
  );
};

// Interactive price comparison chart
const PriceComparisonChart = () => {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  const competitors = [
    { name: "Drive Dojo", hourlyRate: 30, color: "bg-blue-600" },
    { name: "Competitor A", hourlyRate: 35, color: "bg-gray-400" },
    { name: "Competitor B", hourlyRate: 38, color: "bg-gray-400" },
    { name: "Competitor C", hourlyRate: 32, color: "bg-gray-400" },
  ];

  const maxRate = Math.max(...competitors.map((c) => c.hourlyRate)) + 5;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-4 flex items-center">
        <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
        Price Comparison
      </h3>

      <p className="text-gray-600 mb-6">
        See how our hourly rates compare to other driving schools in the area
      </p>

      <div className="h-64 flex items-end justify-around gap-6 mb-4">
        {competitors.map((competitor) => {
          const barHeight = (competitor.hourlyRate / maxRate) * 100;
          return (
            <motion.div
              key={competitor.name}
              className="relative flex flex-col items-center w-full"
              onHoverStart={() => setHoveredBar(competitor.name)}
              onHoverEnd={() => setHoveredBar(null)}
            >
              <motion.div
                className={`w-full ${competitor.color} rounded-t-lg relative group`}
                style={{ height: `${barHeight}%` }}
                initial={{ height: 0 }}
                whileInView={{ height: `${barHeight}%` }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredBar === competitor.name ? 1 : 0,
                    y: hoveredBar === competitor.name ? 0 : 10,
                  }}
                >
                  £{competitor.hourlyRate}/hour
                </motion.div>

                {competitor.name === "Drive Dojo" && (
                  <motion.div
                    className="absolute -top-6 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap"
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    Best Value!
                  </motion.div>
                )}
              </motion.div>
              <p
                className={`mt-2 text-sm font-medium ${competitor.name === "Drive Dojo" ? "text-blue-600" : "text-gray-600"}`}
              >
                {competitor.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

// Testimonial component with video
const VideoTestimonial = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <div className="aspect-video bg-gray-900 relative overflow-hidden">
          <video
            ref={videoRef}
            poster="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
            className="w-full h-full object-cover"
            onClick={togglePlay}
          >
            <source
              src="https://storage.googleapis.com/tempo-public-assets/student-testimonial.mp4"
              type="video/mp4"
            />
          </video>

          {!isPlaying && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/40"
              whileHover={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              onClick={togglePlay}
            >
              <motion.div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6 text-blue-600 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          ))}
          <span className="ml-2 text-gray-600">5.0</span>
        </div>

        <h3 className="text-xl font-bold mb-2">"Passed my test first time!"</h3>
        <p className="text-gray-600 mb-4">
          I was so nervous about learning to drive, but my instructor at Drive
          Dojo made me feel comfortable from day one. The 10-hour package was
          perfect for me, and I passed my test first time!
        </p>

        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold mr-3">
            JD
          </div>
          <div>
            <p className="font-medium">Jamie Davis</p>
            <p className="text-sm text-gray-500">Passed in April 2023</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CalculatorIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" x2="16" y1="6" y2="6" />
    <line x1="8" x2="8" y1="14" y2="14" />
    <line x1="12" x2="12" y1="14" y2="14" />
    <line x1="16" x2="16" y1="14" y2="14" />
    <line x1="8" x2="8" y1="18" y2="18" />
    <line x1="12" x2="12" y1="18" y2="18" />
    <line x1="16" x2="16" y1="18" y2="18" />
  </svg>
);

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState<"packages" | "comparison">(
    "packages",
  );
  const [showVCBadge, setShowVCBadge] = useState(false);

  useEffect(() => {
    // Show VC badge after 2 seconds
    const timer = setTimeout(() => {
      setShowVCBadge(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const pricingTiers = [
    {
      title: "2-Hour Introductory Lesson",
      price: "£60.00",
      originalPrice: "£75.00",
      description: "Special offer for new students only - first lesson!",
      features: [
        "Manual or Automatic",
        "Flexible scheduling",
        "Door-to-door service",
        "Professional instructor",
        "Personalized feedback",
        "Progress tracking app",
      ],
      emoji: "🚀",
      bgImage:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
      gradientColors: "bg-gradient-to-br from-blue-900/95 to-slate-900/95",
      index: 0,
      ctaText: "Book First Lesson",
      ctaLink: "/booking",
      badge: "New Students",
      badgeColor: "bg-blue-600",
      discount: "£15",
    },
    {
      title: "10-Hour Package",
      price: "£300.00",
      originalPrice: "£350.00",
      description: "Special offer for new learners - Save £50!",
      features: [
        "Save £50 on individual lessons",
        "Structured learning plan",
        "Progress tracking",
        "Theory test support",
        "Flexible booking system",
        "Priority scheduling",
        "Free lesson rescheduling",
      ],
      popular: true,
      emoji: "🔥",
      bgImage:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      gradientColors: "bg-gradient-to-br from-red-900/95 to-yellow-900/95",
      index: 1,
      ctaText: "Choose This Package",
      ctaLink: "/booking",
      badge: "Most Popular",
      badgeColor: "bg-red-600",
      discount: "£50",
      vcBacked: true,
    },
    {
      title: "20-Hour Package",
      price: "£570.00",
      originalPrice: "£650.00",
      description: "Best value for complete beginners",
      features: [
        "Maximum savings",
        "Comprehensive training",
        "Theory test support",
        "Mock test included",
        "Hazard perception training",
        "Video feedback sessions",
        "Dedicated instructor",
      ],
      emoji: "💯",
      bgImage:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      gradientColors: "bg-gradient-to-br from-green-900/95 to-slate-900/95",
      index: 2,
      ctaText: "Choose This Package",
      ctaLink: "/booking",
      badge: "Best Value",
      badgeColor: "bg-green-600",
      discount: "£80",
    },
  ];

  const specializedPackages = [
    {
      title: "Pass Plus Course",
      price: "£200.00",
      description: "Advanced training for newly qualified drivers",
      features: [
        "6 hours of advanced training",
        "Motorway driving experience",
        "Night driving practice",
        "Rural roads navigation",
        "All-weather driving conditions",
        "Insurance discounts available",
      ],
      emoji: "🏆",
      bgImage:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      gradientColors: "bg-gradient-to-br from-purple-900/95 to-pink-900/95",
      index: 0,
      ctaText: "Book Pass Plus",
      ctaLink: "/booking",
      badge: "Advanced",
      badgeColor: "bg-purple-600",
    },
    {
      title: "Refresher Course",
      price: "£150.00",
      description: "Regain confidence if you haven't driven for a while",
      features: [
        "5 hours of personalized training",
        "Focus on areas you need help with",
        "Confidence building exercises",
        "Modern driving techniques",
        "Update on current road laws",
        "Flexible scheduling",
      ],
      emoji: "⚡",
      bgImage:
        "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
      gradientColors: "bg-gradient-to-br from-blue-900/95 to-cyan-900/95",
      index: 1,
      ctaText: "Book Refresher Course",
      ctaLink: "/booking",
      badge: "Quick Refresh",
      badgeColor: "bg-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

      {/* Gen Z Audio Player */}
      <AudioPlayer />

      {/* Floating social proof notification */}
      <FloatingNotification />

      <Helmet>
        <title>Pricing & Packages | Drive Dojo Driving School</title>
        <meta
          name="description"
          content="View our driving lesson packages and pricing. Flexible options for all learner drivers with special discounts for block bookings."
        />
      </Helmet>

      <Navbar />

      <main className="pt-[100px] pb-20 relative z-10">
        {/* VC Backed Badge */}
        <AnimatePresence>
          {showVCBadge && (
            <motion.div
              className="fixed top-24 right-6 z-50 bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-bold">VC Backed Startup 🚀</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1800&q=80"
                  alt="Driving lesson"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
              </div>

              <div className="relative z-10 py-20 px-6 md:px-12 max-w-4xl">
                <motion.div
                  className="inline-flex items-center mb-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  Transparent Pricing
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Driving Lesson Packages & Pricing
                </motion.h1>

                <motion.p
                  className="text-xl mb-8 text-white/90 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Flexible options for all learner drivers with special
                  discounts for block bookings
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <MagnetButton
                    href="/booking"
                    className="bg-white text-blue-700 hover:bg-gray-100"
                  >
                    Book Your First Lesson
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </MagnetButton>

                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/20"
                    onClick={() => {
                      const calculatorSection =
                        document.getElementById("price-calculator");
                      if (calculatorSection) {
                        calculatorSection.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    <Calculator className="mr-2 h-4 w-4" />
                    Try Price Calculator
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Tabs for switching between packages and comparison */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-md inline-flex">
              <motion.button
                className={`px-6 py-2 rounded-full text-sm font-medium ${activeTab === "packages" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                onClick={() => setActiveTab("packages")}
                whileHover={{ scale: activeTab !== "packages" ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
              >
                Lesson Packages
              </motion.button>
              <motion.button
                className={`px-6 py-2 rounded-full text-sm font-medium ${activeTab === "comparison" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                onClick={() => setActiveTab("comparison")}
                whileHover={{ scale: activeTab !== "comparison" ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
              >
                Price Comparison
              </motion.button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "packages" ? (
              <motion.div
                key="packages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Standard Packages */}
                <section className="mb-16">
                  <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="inline-block mb-3 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Sparkles className="inline-block h-4 w-4 mr-1 mb-0.5" />
                      Most Popular Options
                    </motion.div>

                    <h2 className="text-3xl font-bold mb-4">
                      Standard Lesson Packages
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                      Choose the package that best suits your needs and
                      experience level
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {pricingTiers.map((tier) => (
                      <PricingTier key={tier.title} {...tier} />
                    ))}
                  </div>
                </section>

                {/* Specialized Packages */}
                <section className="mb-16">
                  <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="inline-block mb-3 bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Crown className="inline-block h-4 w-4 mr-1 mb-0.5" />
                      Specialized Training
                    </motion.div>

                    <h2 className="text-3xl font-bold mb-4">
                      Specialized Driving Courses
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                      Advanced options for specific driving needs
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                    {specializedPackages.map((tier) => (
                      <PricingTier key={tier.title} {...tier} />
                    ))}
                  </div>
                </section>

                {/* Interactive Price Calculator */}
                <section id="price-calculator" className="mb-16">
                  <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="inline-block mb-3 bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Calculator className="inline-block h-4 w-4 mr-1 mb-0.5" />
                      Interactive Tools
                    </motion.div>

                    <h2 className="text-3xl font-bold mb-4">
                      Build Your Custom Package
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                      Use our calculator to create a personalized lesson package
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <PriceCalculator />
                    <VideoTestimonial />
                  </div>
                </section>
              </motion.div>
            ) : (
              <motion.div
                key="comparison"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Price Comparison Section */}
                <section className="mb-16">
                  <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="inline-block mb-3 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <TrendingUp className="inline-block h-4 w-4 mr-1 mb-0.5" />
                      Market Comparison
                    </motion.div>

                    <h2 className="text-3xl font-bold mb-4">How We Compare</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                      See how our prices stack up against other driving schools
                      in the area
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <PriceComparisonChart />

                    <motion.div
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl font-bold mb-4 flex items-center">
                        <ThumbsUp className="h-6 w-6 mr-2 text-blue-600" />
                        Why We're Better Value
                      </h3>

                      <p className="text-gray-600 mb-6">
                        We pride ourselves on offering the best value driving
                        lessons in the area. Here's why:
                      </p>

                      <div className="space-y-4">
                        {[
                          "Full 2-hour lessons - no wasted time",
                          "Door-to-door service included in price",
                          "No hidden fees or charges",
                          "Bulk booking discounts",
                          "Free theory test materials",
                          "Flexible rescheduling policy",
                        ].map((point, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            viewport={{ once: true }}
                          >
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100"
                        whileHover={{ scale: 1.02 }}
                      >
                        <p className="font-medium text-blue-800">
                          Price Match Promise
                        </p>
                        <p className="text-sm text-blue-600 mt-1">
                          Found a better price? Let us know and we'll match it,
                          plus give you a free 30-minute lesson!
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                </section>

                {/* Feature Comparison Table */}
                <section className="mb-16">
                  <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold mb-4">
                      Feature Comparison
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                      See what's included in each of our packages compared to
                      competitors
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-4 pb-3 border-b border-gray-200">
                        <div className="font-bold text-gray-800">Feature</div>
                        <div className="text-center font-bold text-gray-800">
                          Basic (Competitors)
                        </div>
                        <div className="text-center font-bold text-gray-800">
                          Standard (Competitors)
                        </div>
                        <div className="text-center font-bold text-blue-600">
                          Drive Dojo
                        </div>
                      </div>

                      <div className="divide-y divide-gray-200">
                        <ComparisonFeature
                          feature="Full 2-hour lessons"
                          basic={false}
                          standard={false}
                          premium={true}
                          index={0}
                        />
                        <ComparisonFeature
                          feature="Door-to-door pickup"
                          basic={false}
                          standard={true}
                          premium={true}
                          index={1}
                        />
                        <ComparisonFeature
                          feature="Theory test materials"
                          basic={false}
                          standard={true}
                          premium={true}
                          index={2}
                        />
                        <ComparisonFeature
                          feature="Video feedback"
                          basic={false}
                          standard={false}
                          premium={true}
                          index={3}
                        />
                        <ComparisonFeature
                          feature="Mock tests"
                          basic={false}
                          standard={true}
                          premium={true}
                          index={4}
                        />
                        <ComparisonFeature
                          feature="Free rescheduling"
                          basic={false}
                          standard={false}
                          premium={true}
                          index={5}
                        />
                        <ComparisonFeature
                          feature="Progress tracking app"
                          basic={false}
                          standard={false}
                          premium={true}
                          index={6}
                        />
                        <ComparisonFeature
                          feature="Instructor choice"
                          basic={false}
                          standard={false}
                          premium={true}
                          index={7}
                        />
                      </div>
                    </div>
                  </motion.div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>

          {/* FAQ Section */}
          <section className="mb-16">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-block mb-3 bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Lightbulb className="inline-block h-4 w-4 mr-1 mb-0.5" />
                Common Questions
              </motion.div>

              <h2 className="text-3xl font-bold mb-4">Pricing FAQs</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Answers to common questions about our pricing and packages
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="divide-y divide-gray-200">
                {[
                  {
                    question: "Do you offer discounts for block bookings?",
                    answer:
                      "Yes! We offer significant discounts when you book 10 or more lessons in advance. Our 10-hour package saves you £50, and our 20-hour package saves you £80.",
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer:
                      "We accept all major credit and debit cards, PayPal, Apple Pay, and bank transfers. You can pay in full or choose our flexible payment plans.",
                  },
                  {
                    question:
                      "Is there an additional fee for using your car in my test?",
                    answer:
                      "No, there's no additional fee for using your instructor's car during your practical driving test if you've purchased one of our packages.",
                  },
                  {
                    question: "Do your prices include VAT?",
                    answer:
                      "Yes, all our prices are inclusive of VAT. There are no hidden fees or additional charges.",
                  },
                  {
                    question:
                      "Can I get a refund if I don't use all my lessons?",
                    answer:
                      "Yes, unused lessons are refundable minus a small administration fee. Please give us at least 48 hours notice before cancelling your remaining lessons.",
                  },
                  {
                    question: "Do you offer student discounts?",
                    answer:
                      "Yes, we offer a 5% discount for full-time students. Just show your valid student ID when booking.",
                  },
                ].map((faq, index) => (
                  <motion.details
                    key={index}
                    className="group p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ChevronDown className="h-5 w-5" />
                      </span>
                    </summary>
                    <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                      {faq.answer}
                    </p>
                  </motion.details>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Call to Action */}
          <section>
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full"
                animate={{ scale: [1, 1.2, 1], x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{ filter: "blur(40px)" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full"
                animate={{ scale: [1, 1.3, 1], x: [0, -10, 0], y: [0, 10, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{ filter: "blur(40px)" }}
              />

              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center mb-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Gift className="h-4 w-4 mr-2" />
                  Limited Time Offer
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Start Your Driving Journey?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Book your first lesson today and get a free 30-minute
                  assessment worth £15!
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <MagnetButton
                    href="/booking"
                    className="bg-white text-blue-700 hover:bg-gray-100"
                  >
                    Book Your First Lesson
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </MagnetButton>

                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/20"
                    asChild
                  >
                    <a href="/contact">Contact Us</a>
                  </Button>
                </div>

                <p className="text-sm text-white/80 mt-6">
                  Offer valid for new students only. Limited availability.
                </p>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
