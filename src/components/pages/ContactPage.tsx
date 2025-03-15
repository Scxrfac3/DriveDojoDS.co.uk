import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  Star,
  ThumbsUp,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
    marketingConsent: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [activeTab, setActiveTab] = useState("message");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Emoji reactions for testimonials
  const [reactions, setReactions] = useState({
    love: 124,
    like: 89,
    star: 56,
    hasReacted: false,
    userReaction: null as string | null,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      marketingConsent: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear any previous errors
    setFormError("");

    // Validate form data
    if (!formData.name) {
      setFormError("Please enter your name");
      return;
    }

    if (!formData.email) {
      setFormError("Please enter your email address");
      return;
    }

    if (!formData.message) {
      setFormError("Please enter your message");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email address");
      return;
    }

    // Set submitting state to prevent multiple submissions
    setIsSubmitting(true);

    // In a real app, you would send the form data to your backend here
    console.log("Form submitted:", formData);

    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setShowConfetti(true);

      // Reset form after submission
      setTimeout(() => {
        setFormSubmitted(false);
        setShowConfetti(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "general",
          message: "",
          marketingConsent: false,
        });
      }, 5000);
    }, 1000);
  };

  const handleReaction = (type: string) => {
    if (!reactions.hasReacted) {
      setReactions({
        ...reactions,
        [type]: reactions[type as keyof typeof reactions] + 1,
        hasReacted: true,
        userReaction: type,
      });
    } else if (reactions.userReaction !== type) {
      // Change reaction
      setReactions({
        ...reactions,
        [reactions.userReaction as string]:
          (reactions[
            reactions.userReaction as keyof typeof reactions
          ] as number) - 1,
        [type]: (reactions[type as keyof typeof reactions] as number) + 1,
        userReaction: type,
      });
    }
  };

  // Animated background patterns
  const backgroundPatterns = [
    { top: "10%", left: "5%", size: "150px", delay: 0 },
    { top: "60%", left: "80%", size: "180px", delay: 0.2 },
    { top: "30%", left: "90%", size: "120px", delay: 0.4 },
    { top: "80%", left: "15%", size: "200px", delay: 0.6 },
    { top: "20%", left: "40%", size: "100px", delay: 0.8 },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Alex J.",
      age: 19,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      text: "Drive Dojo helped me pass my test first time! The instructors are so patient and make learning fun. 10/10 would recommend to any nervous first-timers!",
      passed: "First attempt",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Taylor K.",
      age: 17,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor",
      text: "The app makes booking lessons so easy! I can just pick times that work for me and my instructor confirms right away. No more texting back and forth!",
      passed: "In training",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Jordan M.",
      age: 22,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan",
      text: "After failing twice with another school, I switched to Drive Dojo and passed within a month! Their teaching methods just clicked with me.",
      passed: "Third attempt",
      date: "3 months ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Animated background elements */}
      {backgroundPatterns.map((pattern, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-10 bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl"
          style={{
            top: pattern.top,
            left: pattern.left,
            width: pattern.size,
            height: pattern.size,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.05, 0.2, 0.05],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            delay: pattern.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Confetti effect on form submission */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: [
                    "#FF5733",
                    "#33FF57",
                    "#3357FF",
                    "#FF33A8",
                    "#33FFF5",
                  ][Math.floor(Math.random() * 5)],
                  top: `${Math.random() * -10}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, window.innerHeight],
                  x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
                  rotate: [0, Math.random() * 360],
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  ease: "easeOut",
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </motion.div>
        </div>
      )}

      <Helmet>
        <title>Contact Us | Drive Dojo Driving School</title>
        <meta
          name="description"
          content="Get in touch with Drive Dojo Driving School. Contact us for booking inquiries, instructor information, or general questions."
        />
      </Helmet>

      <Navbar />

      <main className="pt-[100px] relative z-10">
        {/* Hero Banner */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?w=1800&q=80"
              alt="Contact us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-slate-900/90"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="inline-block mb-6 bg-gradient-to-r from-pink-500 to-purple-500 p-1 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-black/30 backdrop-blur-md px-6 py-2 rounded-full">
                  <span className="text-white font-medium flex items-center">
                    <Sparkles className="mr-2 h-4 w-4 text-yellow-300" />
                    Get 20% off your first lesson when you contact us today!
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Let's Get You On The Road
              </motion.h1>

              <motion.p
                className="text-xl mb-8 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Have questions? Ready to book? Our team responds within minutes
                during business hours.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.a
                  href="tel:+441234567890"
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-3 rounded-full flex items-center transition-all"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (555) 123-4567
                </motion.a>
                <motion.a
                  href="mailto:info@drivedojo.com"
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-3 rounded-full flex items-center transition-all"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  info@drivedojo.com
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating social proof */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md py-3 px-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="container mx-auto flex flex-wrap items-center justify-center md:justify-between gap-4 text-white">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-bold">4.9</span>
                  <span className="text-white/70 ml-1">rating</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-1" />
                  <span className="font-bold">98%</span>
                  <span className="text-white/70 ml-1">pass rate</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-400 mr-1" />
                  <span className="font-bold">10K+</span>
                  <span className="text-white/70 ml-1">students</span>
                </div>
              </div>
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 px-4" id="contact-form">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                  <Tabs
                    defaultValue="message"
                    className="w-full"
                    onValueChange={setActiveTab}
                  >
                    <TabsList className="grid w-full grid-cols-3 bg-black/20 rounded-lg p-1">
                      <TabsTrigger
                        value="message"
                        className="data-[state=active]:bg-white data-[state=active]:text-blue-600"
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Message
                      </TabsTrigger>
                      <TabsTrigger
                        value="call"
                        className="data-[state=active]:bg-white data-[state=active]:text-blue-600"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Back
                      </TabsTrigger>
                      <TabsTrigger
                        value="chat"
                        className="data-[state=active]:bg-white data-[state=active]:text-blue-600"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Live Chat
                      </TabsTrigger>
                    </TabsList>
                    <div className="mt-4">
                      {activeTab === "message" && (
                        <h2 className="text-2xl font-bold flex items-center">
                          <MessageSquare className="mr-3 h-6 w-6" />
                          Send Us a Message
                        </h2>
                      )}
                      {activeTab === "call" && (
                        <h2 className="text-2xl font-bold flex items-center">
                          <Phone className="mr-3 h-6 w-6" />
                          Request a Call Back
                        </h2>
                      )}
                      {activeTab === "chat" && (
                        <h2 className="text-2xl font-bold flex items-center">
                          <MessageCircle className="mr-3 h-6 w-6" />
                          Start Live Chat
                        </h2>
                      )}
                      <p className="mt-2 text-white/80">
                        We'll get back to you within 2 hours
                      </p>
                    </div>
                  </Tabs>
                </div>

                <div className="p-6">
                  <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <AnimatePresence mode="wait">
                      {formSubmitted ? (
                        <motion.div
                          className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 p-6 rounded-lg flex items-start border border-green-100"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5 text-green-500" />
                          <div>
                            <h3 className="font-bold text-lg mb-1">
                              Message Sent Successfully!
                            </h3>
                            <p className="mb-4">
                              Thank you for contacting Drive Dojo. We'll be in
                              touch with you shortly.
                            </p>
                            <div className="flex space-x-2">
                              <motion.div
                                className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                              >
                                Average response time: 28 minutes
                              </motion.div>
                              <motion.div
                                className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                              >
                                98% satisfaction rate
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <TabsContent
                          value={activeTab}
                          forceMount={true}
                          className="mt-0"
                        >
                          {activeTab === "message" && (
                            <motion.form
                              onSubmit={handleSubmit}
                              className="space-y-6"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <Label htmlFor="name" className="mb-2 block">
                                    Your Name
                                  </Label>
                                  <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    className="w-full"
                                    required
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="email" className="mb-2 block">
                                    Email Address
                                  </Label>
                                  <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john.doe@example.com"
                                    className="w-full"
                                    required
                                  />
                                </div>
                              </div>

                              <div>
                                <Label htmlFor="phone" className="mb-2 block">
                                  Phone Number (Optional)
                                </Label>
                                <Input
                                  id="phone"
                                  name="phone"
                                  type="tel"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  placeholder="(123) 456-7890"
                                  className="w-full"
                                />
                              </div>

                              <div>
                                <Label className="mb-2 block">
                                  What are you contacting us about?
                                </Label>
                                <RadioGroup
                                  value={formData.subject}
                                  onValueChange={handleRadioChange}
                                  className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:space-x-4"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value="general"
                                      id="general"
                                    />
                                    <Label htmlFor="general">
                                      General Inquiry
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value="booking"
                                      id="booking"
                                    />
                                    <Label htmlFor="booking">
                                      Booking Lesson
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value="instructor"
                                      id="instructor"
                                    />
                                    <Label htmlFor="instructor">
                                      Instructor Info
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value="feedback"
                                      id="feedback"
                                    />
                                    <Label htmlFor="feedback">Feedback</Label>
                                  </div>
                                </RadioGroup>
                              </div>

                              <div>
                                <Label htmlFor="message" className="mb-2 block">
                                  Your Message
                                </Label>
                                <Textarea
                                  id="message"
                                  name="message"
                                  value={formData.message}
                                  onChange={handleInputChange}
                                  placeholder="Please provide details about your inquiry..."
                                  className="w-full h-32"
                                  required
                                />
                              </div>

                              <div className="flex items-start space-x-2">
                                <Checkbox
                                  id="marketingConsent"
                                  checked={formData.marketingConsent}
                                  onCheckedChange={handleCheckboxChange}
                                />
                                <div className="grid gap-1.5 leading-none">
                                  <label
                                    htmlFor="marketingConsent"
                                    className="text-sm font-medium leading-none"
                                  >
                                    I agree to receive marketing communications
                                  </label>
                                  <p className="text-sm text-gray-500">
                                    You can unsubscribe at any time. Read our{" "}
                                    <a
                                      href="/"
                                      className="text-blue-600 hover:underline"
                                    >
                                      Privacy Policy
                                    </a>
                                    .
                                  </p>
                                </div>
                              </div>

                              {formError && (
                                <div className="text-red-500 text-sm mb-4">
                                  {formError}
                                </div>
                              )}
                              <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg text-lg flex items-center justify-center group ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                              >
                                {isSubmitting ? (
                                  <>
                                    Sending...
                                    <motion.div
                                      className="ml-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                                      animate={{ rotate: 360 }}
                                      transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "linear",
                                      }}
                                    />
                                  </>
                                ) : (
                                  <>
                                    Send Message
                                    <motion.span
                                      className="ml-2 inline-block"
                                      animate={{ x: [0, 5, 0] }}
                                      transition={{
                                        repeat: Infinity,
                                        duration: 1.5,
                                      }}
                                    >
                                      <Send className="h-5 w-5" />
                                    </motion.span>
                                  </>
                                )}
                              </motion.button>
                            </motion.form>
                          )}

                          {activeTab === "call" && (
                            <motion.form
                              onSubmit={handleSubmit}
                              className="space-y-6"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <Label htmlFor="name" className="mb-2 block">
                                    Your Name
                                  </Label>
                                  <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    className="w-full"
                                    required
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="phone" className="mb-2 block">
                                    Phone Number
                                  </Label>
                                  <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="(123) 456-7890"
                                    className="w-full"
                                    required
                                  />
                                </div>
                              </div>

                              <div>
                                <Label className="mb-2 block">
                                  Best time to call you back
                                </Label>
                                <RadioGroup
                                  value={formData.subject}
                                  onValueChange={handleRadioChange}
                                  className="grid grid-cols-2 gap-2"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value="morning"
                                      id="morning"
                                    />
                                    <Label htmlFor="morning">
                                      Morning (9AM-12PM)
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value="afternoon"
                                      id="afternoon"
                                    />
                                    <Label htmlFor="afternoon">
                                      Afternoon (12PM-5PM)
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value="evening"
                                      id="evening"
                                    />
                                    <Label htmlFor="evening">
                                      Evening (5PM-8PM)
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value="anytime"
                                      id="anytime"
                                    />
                                    <Label htmlFor="anytime">Anytime</Label>
                                  </div>
                                </RadioGroup>
                              </div>

                              <div>
                                <Label htmlFor="message" className="mb-2 block">
                                  What would you like to discuss? (Optional)
                                </Label>
                                <Textarea
                                  id="message"
                                  name="message"
                                  value={formData.message}
                                  onChange={handleInputChange}
                                  placeholder="Brief description of your inquiry..."
                                  className="w-full h-24"
                                />
                              </div>

                              {formError && (
                                <div className="text-red-500 text-sm mb-4">
                                  {formError}
                                </div>
                              )}
                              <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg text-lg flex items-center justify-center group ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                              >
                                {isSubmitting ? (
                                  <>
                                    Sending...
                                    <motion.div
                                      className="ml-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                                      animate={{ rotate: 360 }}
                                      transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "linear",
                                      }}
                                    />
                                  </>
                                ) : (
                                  <>
                                    Request Call Back
                                    <motion.span
                                      className="ml-2 inline-block"
                                      animate={{ x: [0, 5, 0] }}
                                      transition={{
                                        repeat: Infinity,
                                        duration: 1.5,
                                      }}
                                    >
                                      <Phone className="h-5 w-5" />
                                    </motion.span>
                                  </>
                                )}
                              </motion.button>
                            </motion.form>
                          )}

                          {activeTab === "chat" && (
                            <motion.div
                              className="space-y-6"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div className="flex items-center mb-4">
                                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                  <p className="text-sm text-gray-500">
                                    Our chat agents are online now
                                  </p>
                                </div>

                                <div className="space-y-4">
                                  <div className="flex items-start">
                                    <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                                      <p className="text-sm">
                                        Hi there! How can we help you with your
                                        driving lessons today?
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex items-start justify-end">
                                    <div className="bg-gray-200 rounded-lg p-3 max-w-[80%]">
                                      <p className="text-sm">
                                        I'd like to know more about your pricing
                                        and availability.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex items-start">
                                    <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                                      <p className="text-sm">
                                        I'd be happy to help with that! Our
                                        standard lessons start at $45/hour with
                                        discounts for block bookings.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="relative">
                                <Input
                                  placeholder="Type your message here..."
                                  className="pr-24"
                                />
                                <Button
                                  className="absolute right-1 top-1 h-8 bg-blue-600 hover:bg-blue-700"
                                  size="sm"
                                >
                                  <Send className="h-4 w-4 mr-1" /> Send
                                </Button>
                              </div>

                              <p className="text-xs text-gray-500 text-center">
                                By starting a chat, you agree to our{" "}
                                <a
                                  href="/"
                                  className="text-blue-600 hover:underline"
                                >
                                  Terms of Service
                                </a>{" "}
                                and{" "}
                                <a
                                  href="/"
                                  className="text-blue-600 hover:underline"
                                >
                                  Privacy Policy
                                </a>
                                .
                              </p>
                            </motion.div>
                          )}
                        </TabsContent>
                      )}
                    </AnimatePresence>
                  </Tabs>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Testimonials */}
                <motion.div
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
                    <h3 className="text-xl font-bold flex items-center">
                      <Star className="h-5 w-5 text-yellow-300 mr-2" />
                      What Our Students Say
                    </h3>
                  </div>
                  <div className="p-4">
                    {testimonials.map((testimonial, index) => (
                      <motion.div
                        key={testimonial.id}
                        className={`p-4 ${index !== testimonials.length - 1 ? "border-b border-gray-100" : ""}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start space-x-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full border-2 border-blue-100"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <h4 className="font-semibold">
                                {testimonial.name}, {testimonial.age}
                              </h4>
                              <span className="text-xs text-gray-500">
                                {testimonial.date}
                              </span>
                            </div>
                            <div className="flex mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 text-yellow-400"
                                  fill="currentColor"
                                />
                              ))}
                            </div>
                            <p className="text-gray-700 text-sm mb-2">
                              {testimonial.text}
                            </p>
                            <div className="flex justify-between items-center">
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                {testimonial.passed}
                              </span>
                              <div className="flex space-x-2">
                                <motion.button
                                  className={`p-1.5 rounded-full ${reactions.userReaction === "love" ? "bg-pink-100 text-pink-600" : "text-gray-400 hover:text-pink-500 hover:bg-pink-50"}`}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleReaction("love")}
                                >
                                  <Heart
                                    className="h-4 w-4"
                                    fill={
                                      reactions.userReaction === "love"
                                        ? "currentColor"
                                        : "none"
                                    }
                                  />
                                </motion.button>
                                <motion.button
                                  className={`p-1.5 rounded-full ${reactions.userReaction === "like" ? "bg-blue-100 text-blue-600" : "text-gray-400 hover:text-blue-500 hover:bg-blue-50"}`}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleReaction("like")}
                                >
                                  <ThumbsUp
                                    className="h-4 w-4"
                                    fill={
                                      reactions.userReaction === "like"
                                        ? "currentColor"
                                        : "none"
                                    }
                                  />
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    <div className="mt-4 text-center">
                      <Button
                        variant="outline"
                        className="text-blue-600 border-blue-200 hover:bg-blue-50"
                      >
                        See All 240+ Reviews
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Office Information */}
                <motion.div
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                      Find Us
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-gray-600">
                            123 Driving Lane
                            <br />
                            Roadville, CA 90210
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-gray-600">(555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">info@drivedojo.com</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Office Hours</p>
                          <div className="text-gray-600 space-y-1">
                            <div className="flex justify-between">
                              <span>Monday - Friday:</span>
                              <span className="font-medium">
                                9:00 AM - 6:00 PM
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Saturday:</span>
                              <span className="font-medium">
                                10:00 AM - 4:00 PM
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Sunday:</span>
                              <span className="font-medium">Closed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Map */}
                <motion.div
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="h-[300px] relative group">
                    <img
                      src="https://images.unsplash.com/photo-1577086664693-894d8405334a?w=800&q=80"
                      alt="Office Location Map"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-between p-4">
                      <div className="text-white">
                        <h4 className="font-bold">Drive Dojo HQ</h4>
                        <p className="text-sm">Roadville, CA</p>
                      </div>
                      <motion.button
                        className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg px-4 py-2 rounded-lg font-medium flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          window.open(
                            "https://maps.google.com/?q=123+Driving+Lane+Roadville+CA+90210",
                            "_blank",
                          )
                        }
                      >
                        Directions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Social Media */}
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-center relative overflow-hidden">
          {/* Animated decorative elements */}
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
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
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 8,
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
              <motion.div
                className="inline-block mb-6 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-white font-medium flex items-center">
                  <Sparkles className="mr-2 h-4 w-4 text-yellow-300" />
                  Limited Time Offer: First Lesson 50% Off
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Start Your Driving Journey Today
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                Join thousands of successful drivers who started with Drive
                Dojo. Book your first lesson and take the first step towards
                driving freedom.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg group px-8 py-4 rounded-full text-lg font-medium flex items-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "/booking")}
              >
                Book Your First Lesson
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </motion.button>

              <motion.button
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Us
                <MessageCircle className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
