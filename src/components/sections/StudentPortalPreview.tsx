import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  BarChart,
  Smartphone,
  Award,
  Zap,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

interface StudentPortalPreviewProps {
  title?: string;
  description?: string;
  features?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  ctaText?: string;
  ctaLink?: string;
  screenshotUrl?: string;
  mobileScreenshotUrl?: string;
  testimonials?: {
    name: string;
    text: string;
    avatar: string;
  }[];
}

const StudentPortalPreview = ({
  title = "Level Up Your Driving Skills 🚀",
  description = "Our student portal isn't just another app - it's your personal driving coach! Track progress, access exclusive content, and book lessons in seconds.",
  features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Instant Feedback",
      description: "Get real-time tips after each lesson to improve faster.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Visual Progress",
      description:
        "See your skills level up with interactive charts and badges.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Quick Booking",
      description:
        "Book your next lesson in under 30 seconds - no phone calls needed.",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Unlock Achievements",
      description: "Earn badges and rewards as you master new driving skills.",
    },
  ],
  ctaText = "Get Started Free",
  ctaLink = "/student-login",
  screenshotUrl = "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80",
  mobileScreenshotUrl = "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80",
  testimonials = [
    {
      name: "Alex, 19",
      text: "Passed my test first try after using the app for 2 months! The progress tracking kept me motivated.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      name: "Mia, 22",
      text: "Being able to book lessons at 1am when I remembered was a lifesaver. No more waiting for office hours!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
    },
    {
      name: "Jordan, 20",
      text: "The practice quizzes helped me ace the theory test. Way better than just reading the handbook.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    },
  ],
}: StudentPortalPreviewProps) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showMobile, setShowMobile] = useState(false);

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-start p-4 rounded-xl cursor-pointer transition-all duration-300 ${activeFeature === index ? "bg-primary/20 border border-primary/30" : "hover:bg-slate-800/50"}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex-shrink-0 mr-4 p-3 bg-primary/20 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 flex items-center">
                      {feature.title}
                      {activeFeature === index && (
                        <CheckCircle className="ml-2 h-4 w-4 text-primary" />
                      )}
                    </h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <span>⭐⭐⭐⭐⭐</span>
              <span>4.9/5 from 2,400+ students</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full w-20 h-20 blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full w-20 h-20 blur-3xl opacity-30"></div>

            <div className="flex justify-center mb-4">
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full ${!showMobile ? "bg-primary text-white" : "bg-slate-700 text-slate-300"}`}
                  onClick={() => setShowMobile(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9.75 7L15.25 12L9.75 17Z"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full ${showMobile ? "bg-primary text-white" : "bg-slate-700 text-slate-300"}`}
                  onClick={() => setShowMobile(true)}
                >
                  <Smartphone className="h-6 w-6" />
                </motion.button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {showMobile ? (
                <div className="relative mx-auto w-[280px] h-[580px] bg-black rounded-[3rem] border-[14px] border-black overflow-hidden shadow-2xl">
                  <div className="absolute top-0 w-[40%] h-[30px] bg-black left-1/2 transform -translate-x-1/2 rounded-b-xl z-20"></div>
                  <img
                    src={mobileScreenshotUrl}
                    alt="Student Portal Mobile View"
                    className="w-full h-full object-cover rounded-[2rem]"
                  />
                </div>
              ) : (
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-8 border-slate-800 bg-slate-800">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-slate-900 flex items-center px-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <img
                    src={screenshotUrl}
                    alt="Student Portal Screenshot"
                    className="w-full h-auto object-cover pt-6"
                  />
                </div>
              )}

              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-3 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <p className="font-semibold">Works on all devices 📱💻</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">
            What our students are saying:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-primary"
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <div className="flex text-yellow-400 text-sm">
                      <span>★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentPortalPreview;
