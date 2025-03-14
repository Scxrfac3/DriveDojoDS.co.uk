import React, { useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import StudentPortalPreview from "./sections/StudentPortalPreview";
import CertificationsBar from "./sections/CertificationsBar";
import GetStartedSection from "./sections/GetStartedSection";
import FAQSection from "./sections/FAQSection";
import DrivingGallery from "./sections/DrivingGallery";
import { Button } from "./ui/button";
import { Menu, X, Rocket, Zap, Sparkles, Star } from "lucide-react";
import Banner from "./ui/banner";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

      <Banner />
      <Navbar />

      <main className="pt-0 relative z-10">
        <HeroSection />
        <CertificationsBar />
        <ServicesSection />

        {/* Gen Z Interactive Driving Gallery */}
        <section className="relative py-4 overflow-hidden">
          <motion.div
            className="absolute top-5 right-5 z-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
              });
            }}
          >
            <Rocket className="h-4 w-4" />
            <span className="text-sm font-bold">Tap here 👆</span>
          </motion.div>

          <motion.div
            className="container mx-auto px-4 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center mb-3 bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="h-4 w-4 mr-2" />
              #SuccessStories
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Success Stories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet our proud graduates who passed their driving tests with
              flying colors 🎓🚗
            </p>
          </motion.div>

          <DrivingGallery />

          <motion.div
            className="container mx-auto flex justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#333" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open("/booking", "_blank");
              }}
            >
              <Star className="h-5 w-5" />
              <span>Become Our Next Success Story</span>
              <Zap className="h-4 w-4 ml-1" />
            </motion.button>
          </motion.div>
        </section>

        <TestimonialsSection />
        <StudentPortalPreview />
        <GetStartedSection />
        <FAQSection />

        {/* Call to Action Section */}
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

export default Home;
