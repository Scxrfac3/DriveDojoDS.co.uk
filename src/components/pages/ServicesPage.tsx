import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import ServicesSection from "../sections/ServicesSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import CertificationsBar from "../sections/CertificationsBar";
import GetStartedSection from "../sections/GetStartedSection";
import DrivingGallery from "../sections/DrivingGallery";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Calendar,
  Clock,
  Award,
  Shield,
  Car,
  Zap,
} from "lucide-react";
import FAQSection from "../sections/FAQSection";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

      <Helmet>
        <title>Our Services | Drive Dojo Driving School</title>
        <meta
          name="description"
          content="Professional driving instruction tailored to your needs, from first-time drivers to test preparation"
        />
      </Helmet>

      <Navbar />

      <main className="pt-[100px] relative z-10">
        {/* Hero Banner - Enhanced for Gen Z/X */}
        <section className="relative py-32 overflow-hidden">
          {/* Dynamic background with multiple images */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1800&q=80"
                alt="Modern driving lesson"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: 8, repeat: Infinity, delay: 4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1580273957611-46fd6e4b67b7?w=1800&q=80"
                alt="Urban driving"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 mix-blend-multiply"></div>

            {/* Animated particles/shapes */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/20 backdrop-blur-sm"
                  style={{
                    width: Math.random() * 60 + 20,
                    height: Math.random() * 60 + 20,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0.1, scale: 0 }}
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [0, 1, 0],
                    x: [0, Math.random() * 100 - 50, 0],
                    y: [0, Math.random() * 100 - 50, 0],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left side - Text content */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  <span className="mr-2">🔥</span> Most Popular Driving School
                  in 2024
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Level Up
                  </span>{" "}
                  Your Driving Skills
                </motion.h1>

                <motion.p
                  className="text-xl mb-8 text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  From zero to hero in record time. Our instructors are the real
                  MVPs who'll help you crush your driving test.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg group relative overflow-hidden"
                    asChild
                  >
                    <motion.a
                      href="/booking"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Your First Lesson
                      <motion.span
                        className="ml-2 inline-block"
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.4 }}
                        style={{ opacity: 0.2 }}
                      />
                    </motion.a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                    asChild
                  >
                    <motion.a
                      href="#pricing"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Pricing
                    </motion.a>
                  </Button>
                </motion.div>

                {/* Social proof */}
                <motion.div
                  className="mt-8 flex items-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=student${i}`}
                        alt="Student"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div className="text-white/90 text-sm">
                    <span className="font-bold">4.9/5</span> from over{" "}
                    <span className="font-bold">2,000+</span> happy students
                  </div>
                </motion.div>
              </motion.div>

              {/* Right side - Interactive visual element */}
              <motion.div
                className="relative hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-xl">
                  {/* Main image */}
                  <motion.div
                    className="absolute inset-0 p-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
                      alt="Driving instructor with student"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </motion.div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute -right-6 -top-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-4 shadow-lg"
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Car className="h-6 w-6 text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute left-4 -bottom-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-3 shadow-lg"
                    animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <Zap className="h-5 w-5 text-white" />
                  </motion.div>

                  {/* Stats card */}
                  <motion.div
                    className="absolute right-4 bottom-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 shadow-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-white text-sm font-medium">
                      Pass Rate
                    </div>
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full mt-1 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "98%" }}
                        transition={{ delay: 1, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Interactive scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 0.8, duration: 1.5, repeat: Infinity }}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-white/80 text-sm mb-2 font-medium">
              Swipe up to explore
            </span>
            <div className="w-10 h-14 border-2 border-white/30 rounded-full flex justify-center p-1 backdrop-blur-sm bg-white/5">
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        <CertificationsBar />

        {/* Why Choose Us */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Why Choose Drive Dojo?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award className="h-8 w-8 text-blue-600" />,
                  title: "Certified Instructors",
                  description:
                    "All our instructors are DVSA approved with years of teaching experience",
                  color: "from-blue-500 to-blue-600",
                  delay: 0,
                },
                {
                  icon: <Clock className="h-8 w-8 text-purple-600" />,
                  title: "Flexible Scheduling",
                  description:
                    "Book lessons at times that suit your schedule, including evenings and weekends",
                  color: "from-purple-500 to-purple-600",
                  delay: 0.1,
                },
                {
                  icon: <Shield className="h-8 w-8 text-green-600" />,
                  title: "Modern, Safe Vehicles",
                  description:
                    "Learn in dual-controlled cars with the latest safety features",
                  color: "from-green-500 to-green-600",
                  delay: 0.2,
                },
                {
                  icon: <Calendar className="h-8 w-8 text-red-600" />,
                  title: "Structured Learning",
                  description:
                    "Follow a personalized curriculum designed to help you progress efficiently",
                  color: "from-red-500 to-red-600",
                  delay: 0.3,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 rounded-xl text-center relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color}`}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="bg-gradient-to-br from-blue-50 to-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-2 text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Driving Gallery */}
        <DrivingGallery />

        {/* Services Section with Enhanced Content */}
        <ServicesSection
          title="Choose Your Perfect Lesson Package"
          subtitle="We offer a range of packages to suit every driver's needs and experience level"
        />

        {/* Booking Process */}
        <GetStartedSection />

        {/* Testimonials */}
        <TestimonialsSection
          title="What Our Students Say"
          subtitle="Join thousands of satisfied students who have successfully earned their license with Drive Dojo"
        />

        {/* FAQ Section */}
        <FAQSection />

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Driving Journey?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Book your first lesson today and take the first step towards
                driving confidence.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg group"
                  asChild
                >
                  <motion.a
                    href="/booking"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book a Lesson
                    <motion.span
                      className="ml-2 inline-block"
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                  asChild
                >
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
