import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import CertificationsBar from "../sections/CertificationsBar";
import { Button } from "../ui/button";
import {
  Award,
  Calendar,
  Car,
  CheckCircle,
  ChevronRight,
  Clock,
  MapPin,
  Shield,
  Sparkles,
  Users,
  ThumbsUp,
  Zap,
  Heart,
  Star,
  TrendingUp,
  Smile,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

const AboutPage = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: "", content: "" });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [likeCount, setLikeCount] = useState({
    story: 243,
    values: [156, 189, 201, 178],
  });

  // Track scroll progress for progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate stories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePopup = (title, content) => {
    setPopupContent({ title, content });
    setShowPopup(true);
  };

  const handleLike = (type, index = -1) => {
    if (type === "story") {
      setLikeCount((prev) => ({ ...prev, story: prev.story + 1 }));
    } else if (type === "value" && index >= 0) {
      const newValues = [...likeCount.values];
      newValues[index] += 1;
      setLikeCount((prev) => ({ ...prev, values: newValues }));
    }
  };

  const stories = [
    {
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1800&q=80",
      title: "Our Beginning",
      content:
        "Founded in 2015 by Mamunur Siddique, an Autonomous Vehicle safety operator with 8+ years of experience as a driving instructor and over 500 successful students, with a vision to transform driver education.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1800&q=80",
      title: "Our Growth",
      content:
        "From one instructor to a team of 12 experts, we've helped over 10,000 students become confident drivers.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092160607-ee52d65c7ce7?w=1800&q=80",
      title: "Our Future",
      content:
        "Embracing new technologies and teaching methods to create the next generation of safe, skilled drivers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Fixed progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50"
        style={{ scaleX: scrollProgress / 100, transformOrigin: "left" }}
      />

      {/* Social media floating buttons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-40">
        <motion.a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Instagram size={20} />
        </motion.a>
        <motion.a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center text-white shadow-lg"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Youtube size={20} />
        </motion.a>
        <motion.a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center text-white shadow-lg"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle size={20} />
        </motion.a>
      </div>

      {/* Popup modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {popupContent.title}
              </h3>
              <p className="text-gray-700 mb-4">{popupContent.content}</p>
              <div className="flex justify-end">
                <Button onClick={() => setShowPopup(false)}>Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

      <Helmet>
        <title>About Us | Drive Dojo Driving School</title>
        <meta
          name="description"
          content="Learn about Drive Dojo's mission, our expert instructors, and our approach to driving education."
        />
      </Helmet>

      <Navbar />

      <main className="pt-[100px] relative z-10">
        {/* Interactive Hero Banner with Story Slider */}
        <section className="relative py-32 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory}
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={stories[activeStory].image}
                alt="Drive Dojo story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
            </motion.div>
          </AnimatePresence>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white text-sm font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  #DriveDojo
                </motion.div>
                <motion.div
                  className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-sm font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  #DriveWithConfidence
                </motion.div>
              </div>

              <motion.h1
                className="text-4xl md:text-7xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  About
                </span>{" "}
                Drive Dojo
              </motion.h1>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {stories[activeStory].title}
                  </h2>
                  <p className="text-xl text-white/90">
                    {stories[activeStory].content}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex gap-2">
                  {stories.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-3 h-3 rounded-full ${activeStory === index ? "bg-white" : "bg-white/40"}`}
                      onClick={() => setActiveStory(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                <motion.div
                  className="flex items-center gap-2 ml-auto bg-white/10 px-3 py-1.5 rounded-full cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLike("story")}
                >
                  <Heart className="h-4 w-4 text-red-400 fill-red-400" />
                  <span className="text-white text-sm">{likeCount.story}</span>
                </motion.div>
              </div>

              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                  onClick={() => (window.location.href = "/booking")}
                >
                  Book Now
                  <Zap className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating stats */}
          <motion.div
            className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex gap-6">
              <div>
                <p className="text-sm text-white/70">Students</p>
                <p className="text-2xl font-bold">10,000+</p>
              </div>
              <div>
                <p className="text-sm text-white/70">Pass Rate</p>
                <p className="text-2xl font-bold">95%</p>
              </div>
              <div>
                <p className="text-sm text-white/70">Reviews</p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <p className="text-2xl font-bold">4.9</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <CertificationsBar />

        {/* Our Story - Interactive Timeline */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent z-10"></div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div
                  className="relative group cursor-pointer"
                  onClick={() =>
                    handlePopup(
                      "Meet Our Founder",
                      "Mamunur Siddique has spent 8+ years as a driving instructor helping over 500 students pass their tests. She also worked as an Autonomous Vehicle safety operator, helping build and test self-driving technology. Her vision was to bring professional-level driving instruction to everyday drivers, focusing on building confidence and safety awareness.",
                    )
                  }
                >
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                      alt="Drive Dojo Founder"
                      className="rounded-xl shadow-xl w-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white">
                        <p className="font-bold text-xl">Mamunur Siddique</p>
                        <p>Founder & Head Instructor</p>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                  >
                    <p className="font-bold text-blue-600">Est. 2015</p>
                    <p className="text-sm text-gray-600">
                      8+ Years of Excellence
                    </p>
                  </motion.div>
                </div>

                {/* Interactive timeline */}
                <div className="mt-16 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

                  {[
                    {
                      year: "2015",
                      title: "Founded",
                      desc: "Started with just one instructor and one car",
                    },
                    {
                      year: "2017",
                      title: "Expansion",
                      desc: "Grew to 5 instructors and introduced specialized courses",
                    },
                    {
                      year: "2019",
                      title: "Recognition",
                      desc: "Named 'Best Driving School in East London'",
                    },
                    {
                      year: "2022",
                      title: "Innovation",
                      desc: "Launched digital learning platform for theory test prep",
                    },
                    {
                      year: "2023",
                      title: "Milestone",
                      desc: "Celebrated 10,000th successful student",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="ml-8 mb-8 relative cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      onClick={() => handlePopup(item.title, item.desc)}
                    >
                      <div className="absolute -left-12 top-1 w-6 h-6 bg-white rounded-full border-2 border-blue-600 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm font-bold text-purple-600">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-3">Our Beginning</h3>
                  <p className="text-gray-700">
                    Drive Dojo was founded in 2015 by Mamunur Siddique, an
                    Autonomous Vehicle safety operator who helped build and test
                    autonomous vehicles on the road. With over 8+ years of
                    experience as a driving instructor and more than 500
                    successful students, Mamunur wanted to bring her expertise
                    to even more everyday drivers.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-3">Our Growth</h3>
                  <p className="text-gray-700">
                    What started as a one-man operation has grown into a team of
                    12 highly qualified instructors, all sharing the same
                    passion for road safety and driver education. Our mission
                    has always been to create confident, skilled, and
                    safety-conscious drivers who enjoy their time on the road.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-3">Our Success</h3>
                  <p className="text-gray-700">
                    Today, Drive Dojo is proud to have helped over 10,000
                    students pass their driving tests and become responsible
                    road users. Our 95% first-time pass rate speaks to our
                    commitment to excellence in driving instruction.
                  </p>
                </motion.div>

                {/* Interactive stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Users className="h-6 w-6 text-blue-600" />,
                      label: "Students Taught",
                      value: "10,000+",
                    },
                    {
                      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
                      label: "Pass Rate",
                      value: "95%",
                    },
                    {
                      icon: <Award className="h-6 w-6 text-purple-600" />,
                      label: "Qualified Instructors",
                      value: "12",
                    },
                    {
                      icon: <Star className="h-6 w-6 text-yellow-500" />,
                      label: "Average Rating",
                      value: "4.9/5",
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg shadow p-4 flex items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        boxShadow:
                          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <div className="p-2 bg-gray-100 rounded-full">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className="text-xl font-bold">{stat.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Join Our Success Story
                  </h3>
                  <p className="mb-4">
                    Ready to become our next success story? Book your first
                    lesson today and experience the Drive Dojo difference.
                  </p>
                  <Button
                    className="bg-white text-blue-600 hover:bg-gray-100"
                    onClick={() => (window.location.href = "/booking")}
                  >
                    Book Your First Lesson
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values - Interactive Cards */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-100 to-transparent z-10"></div>

          {/* Decorative elements */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Core Values
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                These principles guide everything we do at Drive Dojo
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-white" />,
                  title: "Safety First",
                  description:
                    "We prioritize safety in every lesson, teaching defensive driving techniques that last a lifetime.",
                  color: "from-blue-600 to-blue-800",
                  delay: 0,
                  index: 0,
                },
                {
                  icon: <Users className="h-8 w-8 text-white" />,
                  title: "Student-Centered",
                  description:
                    "We adapt our teaching methods to each student's learning style, pace, and specific needs.",
                  color: "from-purple-600 to-purple-800",
                  delay: 0.1,
                  index: 1,
                },
                {
                  icon: <Award className="h-8 w-8 text-white" />,
                  title: "Excellence",
                  description:
                    "We maintain the highest standards in our instruction, vehicles, and customer service.",
                  color: "from-green-600 to-green-800",
                  delay: 0.2,
                  index: 2,
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-white" />,
                  title: "Innovation",
                  description:
                    "We continuously improve our teaching methods and incorporate new technologies into our lessons.",
                  color: "from-red-600 to-red-800",
                  delay: 0.3,
                  index: 3,
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: value.delay }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  onClick={() => handlePopup(value.title, value.description)}
                >
                  <div
                    className={`bg-gradient-to-br ${value.color} p-6 h-full`}
                  >
                    <motion.div
                      className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      {value.icon}
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {value.title}
                    </h3>

                    <p className="text-white/90">{value.description}</p>

                    <div className="mt-4 flex justify-between items-center">
                      <motion.button
                        className="text-white/80 text-sm flex items-center hover:text-white"
                        whileHover={{ x: 5 }}
                      >
                        Learn more
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </motion.button>

                      <motion.div
                        className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike("value", value.index);
                        }}
                      >
                        <ThumbsUp className="h-3 w-3 text-white" />
                        <span className="text-white text-xs">
                          {likeCount.values[value.index]}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive testimonial */}
            <motion.div
              className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-xl italic text-gray-700 mb-6">
                    "Drive Dojo's values aren't just words on their website.
                    Their instructors truly embody these principles, making
                    learning to drive an amazing experience. I went from nervous
                    beginner to confident driver in just 20 lessons!"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie"
                      alt="Student"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">Sophie Chen</p>
                      <p className="text-sm text-gray-600">
                        Passed first time, April 2023
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex flex-col justify-center text-white">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Smile className="h-6 w-6" />
                    Our Promise To You
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Personalized learning experience tailored to your needs",
                      "Patient, friendly instructors who truly care about your progress",
                      "Flexible scheduling to fit around your commitments",
                      "Transparent pricing with no hidden fees",
                      "Continuous support throughout your learning journey",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    className="mt-6 bg-white text-blue-600 py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Get in Touch
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Test Centres We Cover - Interactive Map */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent z-10"></div>

          {/* Decorative elements */}
          <div className="absolute top-40 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-800 font-medium text-sm">
                #PassWithConfidence
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Test Centres
                </span>{" "}
                We Cover
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Drive Dojo covers the following practical test centres in East
                London and surrounding areas
              </p>
            </motion.div>

            {/* Interactive filter tabs */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { label: "All Centres", color: "bg-blue-100 text-blue-800" },
                {
                  label: "Highest Pass Rate",
                  color: "bg-green-100 text-green-800",
                },
                {
                  label: "East London",
                  color: "bg-purple-100 text-purple-800",
                },
                { label: "Essex", color: "bg-orange-100 text-orange-800" },
              ].map((filter, index) => (
                <motion.button
                  key={index}
                  className={`${filter.color} px-4 py-2 rounded-full font-medium text-sm ${index === 0 ? "ring-2 ring-blue-400 ring-offset-2" : ""}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  area: "Chingford Test Centre",
                  address: "Doric House, 128 Station Road, Chingford, E4 6AD",
                  description:
                    "Known for its mix of urban and residential routes.",
                  passRate: "37%",
                  image:
                    "https://images.unsplash.com/photo-1573013721259-2ea9735d2381?w=600&q=80",
                  tips: [
                    "Practice hill starts on Kings Road",
                    "Be prepared for the busy Station Road junction",
                    "Watch for pedestrians near the shopping areas",
                  ],
                },
                {
                  area: "Wanstead Test Centre",
                  address: "2 Devon House, Hermon Hill, Wanstead, E11 2AW",
                  description:
                    "Features various road types and challenging roundabouts.",
                  passRate: "35%",
                  image:
                    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80",
                  tips: [
                    "Master the Redbridge roundabout approach",
                    "Practice lane discipline on the A12",
                    "Be aware of speed changes on Hermon Hill",
                  ],
                },
                {
                  area: "Hornchurch Test Centre",
                  address: "42-44 Northolt Way, Hornchurch, RM11 1QX",
                  description: "Suburban location with complex roundabouts.",
                  passRate: "42%",
                  image:
                    "https://images.unsplash.com/photo-1600320402788-e8bac2ba23a9?w=600&q=80",
                  tips: [
                    "Practice the Gallows Corner roundabout",
                    "Be prepared for rural roads toward Upminster",
                    "Watch for school zones on Suttons Lane",
                  ],
                },
                {
                  area: "Loughton Test Centre",
                  address: "Crown Buildings, 284 High Road, Loughton, IG10 1RB",
                  description:
                    "Diverse road types, including high-speed A roads.",
                  passRate: "45%",
                  image:
                    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=80",
                  tips: [
                    "Practice merging onto the M11",
                    "Be confident with the Wake Arms roundabout",
                    "Watch for cyclists on Epping New Road",
                  ],
                },
                {
                  area: "Goodmayes Test Centre",
                  address: "98 Goodmayes Road, Ilford, IG3 9UZ",
                  description: "Challenging urban routes and junctions.",
                  passRate: "39%",
                  image:
                    "https://images.unsplash.com/photo-1600320401241-cb97b0e78516?w=600&q=80",
                  tips: [
                    "Master the A12 Eastern Avenue junction",
                    "Practice busy pedestrian crossings on High Road",
                    "Be prepared for the Redbridge roundabout",
                  ],
                },
                {
                  area: "Barking Test Centre",
                  address: "84 Town Quay, Barking, IG11 7BZ",
                  description:
                    "High-speed dual carriageways and complex routes.",
                  passRate: "41%",
                  image:
                    "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?w=600&q=80",
                  tips: [
                    "Practice the Lodge Avenue roundabout",
                    "Be confident with the A13 slip roads",
                    "Watch for bus lanes on Barking Road",
                  ],
                },
              ].map((location, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-300 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={location.image}
                      alt={`${location.area} area`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full flex items-center">
                      <CheckCircle className="h-3.5 w-3.5 mr-1" />
                      Pass rate: {location.passRate}
                    </div>

                    {/* Floating action button */}
                    <motion.div
                      className="absolute bottom-3 right-3 bg-blue-600 text-white p-2 rounded-full shadow-lg cursor-pointer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>
                        handlePopup(
                          `${location.area} Tips`,
                          <div>
                            <p className="mb-3">
                              Our instructors' top tips for passing at this
                              centre:
                            </p>
                            <ul className="space-y-2">
                              {location.tips.map((tip, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>,
                        )
                      }
                    >
                      <Sparkles className="h-5 w-5" />
                    </motion.div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-2 text-gray-800">
                      {location.area}
                    </h3>
                    <div className="flex items-start mb-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">
                        {location.address}
                      </p>
                    </div>
                    <p className="text-gray-700 mb-4">{location.description}</p>

                    <div className="flex justify-between items-center">
                      <motion.button
                        className="text-blue-600 font-medium text-sm flex items-center hover:text-blue-800 transition-colors"
                        whileHover={{ x: 5 }}
                        onClick={() =>
                          window.open(
                            `https://maps.google.com/?q=${encodeURIComponent(location.address)}`,
                            "_blank",
                          )
                        }
                      >
                        View on map
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </motion.button>

                      <div className="flex space-x-2">
                        <motion.div
                          className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => (window.location.href = "/booking")}
                        >
                          <Calendar className="h-4 w-4 text-blue-600" />
                        </motion.div>
                        <motion.div
                          className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => (window.location.href = "/contact")}
                        >
                          <Car className="h-4 w-4 text-purple-600" />
                        </motion.div>
                        <motion.div
                          className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => (window.location.href = "/pricing")}
                        >
                          <Clock className="h-4 w-4 text-green-600" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive CTA */}
            <motion.div
              className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Master These Test Routes?
                  </h3>
                  <p className="mb-6">
                    Our instructors are familiar with all local test routes and
                    can provide specialized training for each area's unique
                    challenges.
                  </p>

                  <div className="space-y-4 mb-6">
                    {[
                      "Personalized route training for your chosen test center",
                      "Practice on the exact roads you'll face in your test",
                      "Expert tips to handle challenging junctions and roundabouts",
                      "Mock tests to build your confidence before the big day",
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                    onClick={() => (window.location.href = "/booking")}
                  >
                    Book Your First Lesson
                    <Zap className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="relative h-full min-h-[300px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
                    alt="Student driving with instructor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>

                  {/* Floating stats */}
                  <motion.div
                    className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="text-center">
                      <p className="text-sm font-medium">
                        Our Students' Average
                      </p>
                      <p className="text-3xl font-bold">1.4</p>
                      <p className="text-sm">
                        Fewer attempts than national average
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Follow Our Journey - Social Media */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Follow Our Journey
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Join us on social media for driving tips, student success
                stories, and exclusive offers
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Instagram className="h-5 w-5 text-pink-500 mr-2" />
                  Follow Our Journey
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&q=80",
                    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=300&q=80",
                    "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=300&q=80",
                    "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=300&q=80",
                    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=300&q=80",
                    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=300&q=80",
                  ].map((img, index) => (
                    <motion.div
                      key={index}
                      className="aspect-square overflow-hidden rounded-lg relative group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={img}
                        alt={`Social media post ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2">
                        <span className="text-white text-xs font-medium">
                          View post
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    {
                      icon: <Instagram className="h-5 w-5" />,
                      name: "Instagram",
                      url: "https://www.instagram.com/drive.dojo",
                      color:
                        "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
                      followers: "15.2K",
                    },
                    {
                      icon: <MessageCircle className="h-5 w-5" />,
                      name: "TikTok",
                      url: "https://www.tiktok.com/@drivedojods",
                      color: "bg-black hover:bg-gray-800",
                      followers: "24.8K",
                    },
                    {
                      icon: <Youtube className="h-5 w-5" />,
                      name: "YouTube",
                      url: "https://www.youtube.com/drivedojo",
                      color: "bg-red-600 hover:bg-red-700",
                      followers: "8.5K",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white px-4 py-2 rounded-lg flex items-center flex-1 justify-center`}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {social.icon}
                      <span className="mx-2">{social.name}</span>
                      <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                        {social.followers}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white text-center relative overflow-hidden">
          {/* Animated decorative elements */}
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -5, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Level Up</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-pink-500 rounded-full z-0 opacity-70"
                    animate={{
                      width: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  ></motion.span>
                </span>{" "}
                Your Driving Skills?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Book your first lesson today and take the first step towards
                driving confidence. #DriveLikeAPro
              </p>
            </motion.div>

            {/* Interactive countdown timer */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="font-bold text-lg mb-3">Limited Time Offer! 🔥</p>
              <p className="mb-4">
                Get 20% off your first 5 lessons when you book this week
              </p>

              <div className="flex justify-center gap-4 mb-4">
                {[
                  { label: "Days", value: "02" },
                  { label: "Hours", value: "18" },
                  { label: "Minutes", value: "45" },
                  { label: "Seconds", value: "32" },
                ].map((unit, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/20 rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
                      {unit.value}
                    </div>
                    <p className="text-xs mt-1">{unit.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm mb-2">
                Use code: <span className="font-bold">DRIVEGEN20</span>
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg px-8 py-6 text-lg"
                  onClick={() => (window.location.href = "/booking")}
                >
                  Book a Lesson
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>

            {/* Social proof */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=person${i}`}
                      alt="Student"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <p className="text-sm">Joined in the last 24 hours</p>
              </div>

              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                <p className="text-sm">4.9/5 from 500+ reviews</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
