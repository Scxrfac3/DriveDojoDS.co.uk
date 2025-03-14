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
        {/* Hero Banner */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1800&q=80"
              alt="Driving lesson"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Our Driving Lesson Services
              </motion.h1>

              <motion.p
                className="text-xl mb-8 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Professional instruction tailored to your needs, from first-time
                drivers to test preparation
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg group"
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
                  </motion.a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 0.8, duration: 1.5, repeat: Infinity }}
          >
            <span className="text-white/80 text-sm mb-2">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
              <motion.div
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ y: [0, 12, 0] }}
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
