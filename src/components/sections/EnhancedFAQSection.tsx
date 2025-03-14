import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Sparkles,
  MessageCircleQuestion,
  ThumbsUp,
  Lightbulb,
  Clock,
  Car,
  CreditCard,
  CalendarX,
  Headphones,
  MapPin,
  Award,
  Zap,
  Heart,
  Share2,
  Bookmark,
  Send,
  Smile,
  Frown,
  Meh,
  Camera,
  Video,
  Music,
  Flame,
  Rocket,
  Star,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Slider } from "../ui/slider";
import confetti from "canvas-confetti";

interface FAQItemProps {
  question: string;
  answer: string;
  category: string;
  icon: React.ReactNode;
  bgImage?: string;
  gradientColors?: string;
  index: number;
  emoji?: string;
  videoUrl?: string;
  imageUrl?: string;
}

const FAQItem = ({
  question,
  answer,
  category,
  icon,
  bgImage = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
  gradientColors = "from-blue-900/95 to-slate-900/95",
  index,
  emoji = "💯",
  videoUrl,
  imageUrl,
}: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [helpfulRating, setHelpfulRating] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleVideoToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowVideo(!showVideo);
    if (!showVideo && videoRef.current) {
      setTimeout(() => {
        videoRef.current?.play();
      }, 300);
    }
  };

  const handleImageToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowImage(!showImage);
  };

  const getFeedbackEmoji = (rating: number) => {
    if (rating < 33) return <Frown className="h-6 w-6 text-red-500" />;
    if (rating < 66) return <Meh className="h-6 w-6 text-yellow-500" />;
    return <Smile className="h-6 w-6 text-green-500" />;
  };

  return (
    <motion.div
      className="overflow-hidden rounded-xl mb-4 relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={bgImage}
          alt={question}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradientColors} opacity-90 group-hover:opacity-95 transition-opacity duration-300`}
        ></div>
      </div>

      {/* Question Header */}
      <motion.button
        className="w-full p-5 flex items-center justify-between text-white relative z-10"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center">
          <motion.div
            className="mr-3 bg-white/20 p-2 rounded-full backdrop-blur-sm"
            animate={{
              rotate: isOpen ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <div className="text-left">
            <span className="text-xs font-medium text-blue-300 block mb-1 flex items-center">
              {category}
              <motion.span
                className="ml-2 text-xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "loop",
                  repeatDelay: 1,
                }}
              >
                {emoji}
              </motion.span>
            </span>
            <h3 className="font-bold text-lg pr-8">{question}</h3>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 p-1 rounded-full backdrop-blur-sm"
        >
          <ChevronDown className="h-5 w-5 text-white" />
        </motion.div>
      </motion.button>

      {/* Answer Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <div className="p-5 pt-0 text-white/90">
              <div className="border-t border-white/20 pt-4 mb-4"></div>

              {/* Media content (conditionally rendered) */}
              <AnimatePresence>
                {showVideo && videoUrl && (
                  <motion.div
                    className="mb-4 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <video
                      ref={videoRef}
                      src={videoUrl}
                      controls
                      className="w-full rounded-lg"
                      poster="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                    />
                  </motion.div>
                )}

                {showImage && imageUrl && (
                  <motion.div
                    className="mb-4 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <img
                      src={imageUrl}
                      alt="FAQ visual explanation"
                      className="w-full rounded-lg"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-white mb-4">{answer}</p>

              {/* Interactive elements */}
              <div className="mt-4 flex flex-wrap justify-between items-center gap-2">
                <div className="flex items-center space-x-2">
                  <motion.button
                    className={`flex items-center text-sm ${isLiked ? "text-red-400" : "text-white/70"} bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLike}
                  >
                    <Heart
                      className={`h-4 w-4 mr-1 ${isLiked ? "fill-red-400" : ""}`}
                    />
                    <span>{isLiked ? "Liked" : "Like"}</span>
                  </motion.button>

                  <motion.button
                    className={`flex items-center text-sm ${isBookmarked ? "text-yellow-400" : "text-white/70"} bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBookmark}
                  >
                    <Bookmark
                      className={`h-4 w-4 mr-1 ${isBookmarked ? "fill-yellow-400" : ""}`}
                    />
                    <span>{isBookmarked ? "Saved" : "Save"}</span>
                  </motion.button>

                  {videoUrl && (
                    <motion.button
                      className={`flex items-center text-sm ${showVideo ? "text-purple-400" : "text-white/70"} bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleVideoToggle}
                    >
                      <Video className="h-4 w-4 mr-1" />
                      <span>{showVideo ? "Hide Video" : "Watch Video"}</span>
                    </motion.button>
                  )}

                  {imageUrl && (
                    <motion.button
                      className={`flex items-center text-sm ${showImage ? "text-green-400" : "text-white/70"} bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleImageToggle}
                    >
                      <Camera className="h-4 w-4 mr-1" />
                      <span>{showImage ? "Hide Image" : "View Image"}</span>
                    </motion.button>
                  )}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>

              {/* Helpfulness rating */}
              <div className="mt-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm text-white/90 mb-2">
                  Was this answer helpful?
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex-grow">
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      step={1}
                      onValueChange={(value) => setHelpfulRating(value[0])}
                      className="w-full"
                    />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    {helpfulRating !== null ? (
                      getFeedbackEmoji(helpfulRating)
                    ) : (
                      <Meh className="h-6 w-6 text-white/50" />
                    )}
                  </div>
                </div>
                {helpfulRating !== null && (
                  <motion.div
                    className="mt-2 text-xs text-white/70 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Thanks for your feedback! We'll use it to improve our
                    answers.
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated highlight line at the bottom */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 z-10"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

interface EnhancedFAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: Partial<FAQItemProps>[];
  categories?: string[];
}

const EnhancedFAQSection = ({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our driving lessons and booking process",
  categories = [
    "All",
    "Lessons",
    "Pricing",
    "Booking",
    "Test Day",
    "Instructors",
  ],
  faqs = [
    {
      question: "How many lessons will I need?",
      answer:
        "The number of lessons varies for each student. The DVSA suggests an average of 45 hours of professional instruction, but this depends on your learning pace and previous experience. We'll assess your needs during your first lesson and provide a personalized recommendation.",
      category: "Lessons",
      icon: <Clock className="h-5 w-5 text-white" />,
      bgImage:
        "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
      gradientColors: "from-blue-900/95 to-slate-900/95",
      index: 0,
      emoji: "⏱️",
      videoUrl:
        "https://storage.googleapis.com/tempo-public-assets/driving-lesson-duration.mp4",
    },
    {
      question: "Can I use your car for my driving test?",
      answer:
        "Yes! All our students can use their instructor's car for their practical driving test. This is included in our test preparation packages. Using a familiar car helps reduce test-day anxiety and increases your chances of passing. We'll ensure the car meets all test requirements.",
      category: "Test Day",
      icon: <Car className="h-5 w-5 text-white" />,
      bgImage:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
      gradientColors: "from-green-900/95 to-blue-900/95",
      index: 1,
      emoji: "🚗",
      imageUrl:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
    },
    {
      question: "Do you offer discounts for block bookings?",
      answer:
        "Absolutely! We offer significant discounts when you book 10 or more lessons in advance. Our 10-hour package saves you £50, and our 20-hour package offers even greater savings. These packages also include additional benefits like theory test support and priority scheduling.",
      category: "Pricing",
      icon: <CreditCard className="h-5 w-5 text-white" />,
      bgImage:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      gradientColors: "from-purple-900/95 to-slate-900/95",
      index: 2,
      emoji: "💰",
      imageUrl:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    },
    {
      question: "What happens if I need to cancel a lesson?",
      answer:
        "We require 48 hours' notice for cancellations. Lessons cancelled with less notice may be charged at the full rate, except in exceptional circumstances. We understand that emergencies happen, so please contact your instructor as soon as possible if you need to reschedule.",
      category: "Booking",
      icon: <CalendarX className="h-5 w-5 text-white" />,
      bgImage:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      gradientColors: "from-red-900/95 to-orange-900/95",
      index: 3,
      emoji: "📅",
    },
    {
      question: "How do I know if my instructor is qualified?",
      answer:
        "All our instructors are DVSA-approved with a minimum of 5 years teaching experience. They display their instructor badge in their car windscreen during lessons. You can also check their qualifications on the DVSA website using their ADI number, which we're happy to provide upon request.",
      category: "Instructors",
      icon: <Award className="h-5 w-5 text-white" />,
      bgImage:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80",
      gradientColors: "from-blue-900/95 to-purple-900/95",
      index: 4,
      emoji: "🏆",
      videoUrl:
        "https://storage.googleapis.com/tempo-public-assets/instructor-qualifications.mp4",
    },
    {
      question: "Do you provide theory test preparation?",
      answer:
        "Yes, we offer comprehensive theory test preparation as part of our packages. This includes access to online practice tests, hazard perception training, and one-to-one coaching sessions. Our students have a 90% first-time pass rate for theory tests when using our preparation resources.",
      category: "Lessons",
      icon: <Lightbulb className="h-5 w-5 text-white" />,
      bgImage:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      gradientColors: "from-yellow-900/95 to-slate-900/95",
      index: 5,
      emoji: "💡",
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    },
    {
      question: "Which areas do you cover?",
      answer:
        "We cover all major test centers in North and East London, including Chingford, Wanstead, Hornchurch, Loughton, Goodmayes, and Barking. Our instructors are familiar with all local test routes and can provide specialized training for the specific challenges of each area.",
      category: "Booking",
      icon: <MapPin className="h-5 w-5 text-white" />,
      bgImage:
        "https://images.unsplash.com/photo-1503416997304-7f8bf166c121?w=800&q=80",
      gradientColors: "from-indigo-900/95 to-slate-900/95",
      index: 6,
      emoji: "🗺️",
      imageUrl:
        "https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?w=800&q=80",
    },
    {
      question: "How can I contact my instructor directly?",
      answer:
        "Once you're assigned an instructor, you'll receive their contact details for direct communication. You can call, text, or use our student portal messaging system. We encourage open communication between students and instructors to ensure the best learning experience.",
      category: "Instructors",
      icon: <Headphones className="h-5 w-5 text-white" />,
      bgImage:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      gradientColors: "from-teal-900/95 to-slate-900/95",
      index: 7,
      emoji: "📱",
    },
    {
      question: "What's the best way to prepare for my first lesson?",
      answer:
        "Before your first lesson, make sure you have your provisional license ready. Wear comfortable clothes and shoes suitable for driving. Get a good night's sleep and try to avoid caffeine right before your lesson. Don't worry about preparing any specific skills - we'll guide you through everything step by step!",
      category: "Lessons",
      icon: <Rocket className="h-5 w-5 text-white" />,
      bgImage:
        "https://images.unsplash.com/photo-1551022372-0bdac482a9c7?w=800&q=80",
      gradientColors: "from-orange-900/95 to-red-900/95",
      index: 8,
      emoji: "🚀",
      videoUrl:
        "https://storage.googleapis.com/tempo-public-assets/first-lesson-prep.mp4",
    },
    {
      question: "How long does it take to learn to drive?",
      answer:
        "The average learner takes around 45 hours of professional instruction to pass their test, but this varies greatly based on individual learning pace, previous experience, and how frequently you practice. Some students pass after just 20 hours, while others may need 60+ hours. We'll give you honest feedback on your progress throughout your lessons.",
      category: "Lessons",
      icon: <Clock className="h-5 w-5 text-white" />,
      bgImage:
        "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=800&q=80",
      gradientColors: "from-blue-900/95 to-purple-900/95",
      index: 9,
      emoji: "⏳",
    },
  ],
}: EnhancedFAQSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("popular");
  const [showConfetti, setShowConfetti] = useState(false);

  // Filter FAQs based on search term and active category
  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort FAQs based on active tab
  const sortedFAQs = [...filteredFAQs].sort((a, b) => {
    if (activeTab === "popular") {
      // For demo purposes, we'll just use the index as a proxy for popularity
      return (a.index || 0) - (b.index || 0);
    } else if (activeTab === "newest") {
      // For demo purposes, reverse the order
      return (b.index || 0) - (a.index || 0);
    }
    return 0;
  });

  // Trigger confetti when changing tabs
  useEffect(() => {
    if (showConfetti) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setTimeout(() => setShowConfetti(false), 1000);
    }
  }, [showConfetti]);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 10,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-3 bg-blue-900/30 text-blue-300 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MessageCircleQuestion className="inline-block h-4 w-4 mr-1 mb-0.5" />
            Got Questions?
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-10 max-w-3xl mx-auto">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search for questions... try 'test' or 'lessons'"
              className="pl-10 py-6 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category ? "bg-blue-600 text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredCategory(category)}
                onHoverEnd={() => setHoveredCategory(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {category}
                {hoveredCategory === category && (
                  <motion.span
                    className="absolute inset-0 bg-white/10 rounded-full z-0"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Tabs for sorting */}
          <Tabs
            defaultValue="popular"
            value={activeTab}
            onValueChange={(value) => {
              setActiveTab(value);
              setShowConfetti(true);
            }}
            className="w-full max-w-md mx-auto"
          >
            <TabsList className="grid w-full grid-cols-2 bg-white/10 border border-white/20">
              <TabsTrigger
                value="popular"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300"
              >
                <Flame className="h-4 w-4 mr-2" />
                Most Popular
              </TabsTrigger>
              <TabsTrigger
                value="newest"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300"
              >
                <Zap className="h-4 w-4 mr-2" />
                Newest First
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            {sortedFAQs.length > 0 ? (
              sortedFAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  category={faq.category}
                  icon={faq.icon}
                  bgImage={faq.bgImage}
                  gradientColors={faq.gradientColors}
                  index={index}
                  emoji={faq.emoji}
                  videoUrl={faq.videoUrl}
                  imageUrl={faq.imageUrl}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10 text-gray-400"
              >
                <Sparkles className="h-10 w-10 mx-auto mb-4 text-blue-500" />
                <p className="text-xl font-medium mb-2">
                  No matching questions found
                </p>
                <p>Try adjusting your search or category filter</p>
                <Button
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                >
                  Reset Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Ask a Question */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <motion.div
              className="inline-block mb-2"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <Star className="h-10 w-10 text-yellow-400 fill-yellow-400" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-4">
              Ask us directly and we'll get back to you ASAP!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Input
              placeholder="Type your question here..."
              className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
            />
            <Button
              className="bg-white text-blue-900 hover:bg-gray-100 flex-shrink-0 flex items-center gap-2"
              onClick={() => {
                confetti({
                  particleCount: 100,
                  spread: 70,
                  origin: { y: 0.6 },
                });
              }}
            >
              <Send className="h-4 w-4" />
              Send Question
            </Button>
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2"
            >
              <MessageCircleQuestion className="h-4 w-4" />
              Live Chat
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2"
            >
              <Headphones className="h-4 w-4" />
              Call Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedFAQSection;
