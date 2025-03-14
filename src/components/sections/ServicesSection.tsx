import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Check,
  ChevronRight,
  Clock,
  Award,
  Shield,
  Car,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
  tag?: string;
  tagColor?: string;
  emoji?: string;
  bgImage: string;
  gradientColors: string;
  index: number;
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services?: ServiceCardProps[];
}

const ServiceCard = ({
  title,
  price,
  originalPrice,
  description,
  features,
  popular = false,
  tag,
  tagColor = "bg-yellow-500",
  emoji,
  bgImage,
  gradientColors,
  index,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      className="w-full max-w-[350px] h-[450px] rounded-xl overflow-hidden relative group perspective-1000"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setShowDetails(!showDetails)}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 ${gradientColors} opacity-90 group-hover:opacity-95 transition-opacity duration-300`}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-6 text-white">
        {tag && (
          <motion.div
            className={`${tagColor} text-white px-3 py-1 text-sm font-medium rounded-full self-start mb-2`}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {tag}
          </motion.div>
        )}

        {popular && (
          <motion.div
            className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-full flex items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 500,
              delay: 0.3 + index * 0.1,
            }}
          >
            <Sparkles className="h-3 w-3 mr-1" />
            Popular
          </motion.div>
        )}

        <div className="mb-2 flex items-center">
          {emoji && (
            <motion.span
              className="text-2xl mr-2"
              animate={{ rotate: isHovered ? [0, -10, 10, -10, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              {emoji}
            </motion.span>
          )}
          <motion.h3
            className="text-2xl font-bold"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
        </div>

        <motion.p
          className="text-white/90 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 + index * 0.1 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex items-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {originalPrice && (
            <span className="text-white/70 line-through text-lg mr-2">
              {originalPrice}
            </span>
          )}
          <span className="text-3xl font-bold">{price}</span>
        </motion.div>

        <AnimatePresence>
          {!showDetails ? (
            <motion.ul
              className="space-y-2 mb-6 flex-grow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {features.slice(0, 3).map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 + index * 0.05 }}
                >
                  <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </motion.li>
              ))}
              {features.length > 3 && (
                <motion.button
                  className="text-white/80 text-sm flex items-center hover:text-white"
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDetails(true);
                  }}
                >
                  See all features <ChevronRight className="h-4 w-4 ml-1" />
                </motion.button>
              )}
            </motion.ul>
          ) : (
            <motion.ul
              className="space-y-2 mb-6 flex-grow overflow-y-auto max-h-[180px] pr-2 scrollbar-thin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </motion.li>
              ))}
              <motion.button
                className="text-white/80 text-sm flex items-center hover:text-white"
                whileHover={{ x: 5 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDetails(false);
                }}
              >
                Show less
              </motion.button>
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="w-full flex justify-center mt-auto">
          <motion.div
            className="w-full max-w-[200px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="/booking"
              className="block w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-full shadow-lg flex items-center justify-center group overflow-hidden relative">
                <span className="relative z-10">Book Now</span>
                <motion.span
                  className="ml-2 relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
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

const SpecializedCourseCard = ({
  title,
  description,
  features,
  price,
  icon,
  index,
}: {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: React.ReactNode;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="border border-gray-200 rounded-lg overflow-hidden relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Gradient background that appears on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 transition-opacity duration-300 z-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      <div className="p-6 relative z-10">
        <div className="flex items-start mb-4">
          <motion.div
            className="mr-4 p-3 bg-blue-100 rounded-lg text-blue-600"
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <div>
            <motion.h3
              className="text-xl font-bold mb-1"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>

        <motion.ul
          className="space-y-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <span className="text-primary mr-2 font-bold">•</span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-semibold text-lg">{price}</p>
          <motion.a
            href="/booking"
            className="text-blue-600 font-medium flex items-center hover:text-blue-800"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
            <ChevronRight className="h-4 w-4 ml-1" />
          </motion.a>
        </motion.div>
      </div>

      {/* Animated highlight line at the bottom */}
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-0"
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const ServicesSection = ({
  title = "Choose Your Perfect Lesson Package",
  subtitle = "Select the package that best suits your needs and experience level",
  services = [
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
      tag: "New Students",
      tagColor: "bg-blue-600",
      emoji: "🚀",
      bgImage:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
      gradientColors: "bg-gradient-to-br from-blue-900/95 to-slate-900/95",
      index: 0,
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
      tag: "Save £50",
      tagColor: "bg-yellow-500",
      emoji: "🔥",
      bgImage:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      gradientColors: "bg-gradient-to-br from-red-900/95 to-yellow-900/95",
      index: 1,
    },
    {
      title: "20-Hour Package",
      price: "£570.00",
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
      tag: "Best Value",
      tagColor: "bg-green-600",
      emoji: "💯",
      bgImage:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      gradientColors: "bg-gradient-to-br from-green-900/95 to-slate-900/95",
      index: 2,
    },
  ],
}: ServicesProps) => {
  const specializedCourses = [
    {
      title: "Refresher Courses",
      description:
        "Haven't driven for a while? Our refresher courses help you regain confidence.",
      features: [
        "Flexible hours based on your needs",
        "Focus on specific areas you want to improve",
        "Build confidence in challenging situations",
      ],
      price: "From £55 per hour",
      icon: <Car className="h-6 w-6" />,
      index: 0,
    },
    {
      title: "Intensive Courses",
      description:
        "Need to pass quickly? Our intensive courses can get you test-ready in one week.",
      features: [
        "20, 30, or 40-hour packages available",
        "Daily lessons with consistent instructor",
        "Test booking service included",
      ],
      price: "From £995 for 20 hours",
      icon: <Zap className="h-6 w-6" />,
      index: 1,
    },
    {
      title: "Motorway Confidence",
      description:
        "Specialized lessons focused on building confidence for motorway driving.",
      features: [
        "Safe entry and exit techniques",
        "Lane discipline and overtaking",
        "Handling high-speed driving safely",
      ],
      price: "£75 per 2-hour session",
      icon: <Shield className="h-6 w-6" />,
      index: 2,
    },
    {
      title: "Theory Test Preparation",
      description:
        "Comprehensive support to help you pass your theory test with confidence.",
      features: [
        "Access to online practice tests",
        "Hazard perception training",
        "One-to-one coaching sessions",
      ],
      price: "£120 for complete package",
      icon: <Award className="h-6 w-6" />,
      index: 3,
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-3 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Clock className="inline-block h-4 w-4 mr-1 mb-0.5" />
            Limited Time Offers
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-3 bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="inline-block h-4 w-4 mr-1 mb-0.5" />
            Specialized Training
          </motion.div>

          <h2 className="text-3xl font-bold mb-4">
            Specialized Driving Courses
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tailored courses to meet your specific driving needs and goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {specializedCourses.map((course, index) => (
            <SpecializedCourseCard key={index} {...course} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-100"
        >
          <p className="text-yellow-800 text-sm flex items-center justify-center">
            <Sparkles className="h-4 w-4 mr-2 text-yellow-600" />
            Special offer for new learner drivers only. Limited time offer.
            Terms and conditions apply.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
