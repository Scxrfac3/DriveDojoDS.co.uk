import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  MousePointerClick,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface StepProps {
  number: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

const Step = ({
  number,
  title,
  description,
  image,
  icon,
  color,
  delay,
}: StepProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 ${color} opacity-90 group-hover:opacity-80 transition-opacity duration-300`}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col text-white">
        <div className="flex items-center mb-4">
          <motion.div
            className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm"
            animate={{
              scale: isHovered ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
          >
            {icon}
          </motion.div>
          <div>
            <motion.div
              className="text-3xl font-bold mb-1 flex items-center"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {number}
              <motion.div
                className="ml-2 text-yellow-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <Sparkles className="h-5 w-5" />
              </motion.div>
            </motion.div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>

        <p className="text-white/90 mb-6">{description}</p>

        <motion.div
          className="mt-auto flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
        >
          <motion.div
            className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            {number === 3 ? "Final Step" : "Step " + number + " of 3"}
          </motion.div>

          <motion.div
            className="text-white/80 text-sm flex items-center"
            animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {number < 3 ? "Next" : "Start Now"}{" "}
            <ArrowRight className="h-4 w-4 ml-1" />
          </motion.div>
        </motion.div>

        {/* Animated highlight line at the bottom */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-white"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

interface GetStartedSectionProps {
  title?: string;
  subtitle?: string;
  steps?: Partial<StepProps>[];
  ctaText?: string;
  ctaLink?: string;
}

const GetStartedSection = ({
  title = "How to Get Started",
  subtitle = "Three simple steps to begin your driving journey with Drive Dojo",
  ctaText = "Book Your First Lesson Now",
  ctaLink = "/booking",
  steps = [
    {
      number: 1,
      title: "Choose Your Package",
      description:
        "Browse our lesson packages and select the one that matches your experience level and goals. Not sure? Take our quick quiz to find your perfect match!",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      icon: <MousePointerClick className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-br from-blue-900/95 to-purple-900/95",
      delay: 0.1,
    },
    {
      number: 2,
      title: "Book Your Lessons",
      description:
        "Use our interactive calendar to schedule your first lesson at a time that works for you. Choose your instructor and preferred location in just a few taps.",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
      icon: <Calendar className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-br from-green-900/95 to-blue-900/95",
      delay: 0.2,
    },
    {
      number: 3,
      title: "Start Learning",
      description:
        "Meet your instructor and begin your journey to becoming a confident driver. Track your progress in real-time through our student portal.",
      image:
        "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
      icon: <Zap className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-br from-red-900/95 to-yellow-900/95",
      delay: 0.3,
    },
  ],
}: GetStartedSectionProps) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
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
            <Clock className="inline-block h-4 w-4 mr-1 mb-0.5" />
            Quick & Easy Process
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              image={step.image}
              icon={step.icon}
              color={step.color}
              delay={step.delay}
            />
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block relative">
            <motion.div
              className="absolute -top-10 -right-10 text-yellow-500 rotate-12"
              animate={{
                y: [0, -10, 0],
                rotate: [12, 20, 12],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="h-8 w-8" />
            </motion.div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg group relative overflow-hidden"
              asChild
            >
              <a href={ctaLink}>
                <span className="relative z-10 flex items-center">
                  {ctaText}
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </span>
                <motion.span
                  className="absolute inset-0 bg-white opacity-10"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </a>
            </Button>
          </div>

          <motion.div
            className="mt-6 flex items-center justify-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <PhoneCall className="h-4 w-4 mr-2" />
            <span>Or call us directly at </span>
            <a
              href="tel:+441234567890"
              className="text-blue-600 font-medium ml-1 hover:underline"
            >
              (123) 456-7890
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-100 flex items-center justify-between flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            <CheckCircle2 className="h-6 w-6 text-green-500 mr-3" />
            <p className="text-gray-700">
              <span className="font-bold">97% of students</span> book their
              second lesson after trying their first!
            </p>
          </div>
          <Button
            variant="outline"
            className="border-green-200 text-green-700 hover:bg-green-50"
          >
            Read Success Stories
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
