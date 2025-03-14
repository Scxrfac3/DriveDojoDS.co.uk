import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Sparkles } from "lucide-react";

interface BannerProps {
  message?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  duration?: number; // Duration in seconds before auto-dismissing
}

const Banner = ({
  message = "🔥 Special Offer: Save £50 on 10-hour packages! Limited time only.",
  buttonText = "Book Now",
  onButtonClick = () => console.log("Banner button clicked"),
  className = "",
  duration = 0, // 0 means no auto-dismiss
}: BannerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState<number | null>(
    duration > 0 ? duration : null,
  );

  useEffect(() => {
    if (timeLeft === 0) {
      setIsVisible(false);
      return;
    }

    if (!timeLeft) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 relative overflow-hidden ${className}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ filter: "blur(40px)" }}
          />

          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center relative z-10">
            <div className="flex items-center">
              {timeLeft && (
                <div className="mr-3 bg-white/20 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{timeLeft}s</span>
                </div>
              )}
              <motion.p
                className="text-center sm:text-left font-medium flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                  }}
                  className="mr-2 inline-block"
                >
                  <Sparkles className="h-4 w-4 text-yellow-300" />
                </motion.span>
                {message}
              </motion.p>
            </div>

            <div className="flex items-center mt-2 sm:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  onClick={onButtonClick}
                  size="sm"
                  className="bg-white text-blue-600 hover:bg-gray-100 shadow-md group mr-2"
                  asChild
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {buttonText}
                    <motion.span
                      className="ml-1 inline-block"
                      initial={{ x: 0 }}
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        repeatDelay: 0.5,
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </Button>
              </motion.div>

              <motion.button
                onClick={() => setIsVisible(false)}
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                aria-label="Close banner"
              >
                <X size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Banner;
