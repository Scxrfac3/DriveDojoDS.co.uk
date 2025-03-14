import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
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
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
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
        {/* Hero Banner */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1800&q=80"
              alt="Driving instructor and student"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl"
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
                About Drive Dojo
              </motion.h1>

              <motion.p
                className="text-xl mb-8 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                We're more than just a driving school. We're your partners in
                building confidence, skills, and safety on the road.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <CertificationsBar />

        {/* Our Story */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                    alt="Drive Dojo Founder"
                    className="rounded-lg shadow-xl w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                    <p className="font-bold text-blue-600">Est. 2010</p>
                    <p className="text-sm text-gray-600">
                      13+ Years of Excellence
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Our Story
                </h2>
                <p className="text-gray-700 mb-6">
                  Drive Dojo was founded in 2010 by James Mitchell, a former
                  advanced driving instructor with the police force. After 15
                  years of training police officers in high-speed and defensive
                  driving techniques, James wanted to bring his expertise to
                  everyday drivers.
                </p>
                <p className="text-gray-700 mb-6">
                  What started as a one-man operation has grown into a team of
                  15 highly qualified instructors, all sharing the same passion
                  for road safety and driver education. Our mission has always
                  been to create confident, skilled, and safety-conscious
                  drivers who enjoy their time on the road.
                </p>
                <p className="text-gray-700 mb-6">
                  Today, Drive Dojo is proud to have helped over 10,000 students
                  pass their driving tests and become responsible road users.
                  Our 95% first-time pass rate speaks to our commitment to
                  excellence in driving instruction.
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
                    alt="James Mitchell"
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div>
                    <p className="font-bold">James Mitchell</p>
                    <p className="text-sm text-gray-600">
                      Founder & Head Instructor
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Values
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
                },
                {
                  icon: <Users className="h-8 w-8 text-white" />,
                  title: "Student-Centered",
                  description:
                    "We adapt our teaching methods to each student's learning style, pace, and specific needs.",
                  color: "from-purple-600 to-purple-800",
                  delay: 0.1,
                },
                {
                  icon: <Award className="h-8 w-8 text-white" />,
                  title: "Excellence",
                  description:
                    "We maintain the highest standards in our instruction, vehicles, and customer service.",
                  color: "from-green-600 to-green-800",
                  delay: 0.2,
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-white" />,
                  title: "Innovation",
                  description:
                    "We continuously improve our teaching methods and incorporate new technologies into our lessons.",
                  color: "from-red-600 to-red-800",
                  delay: 0.3,
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: value.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Locations */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Where We Operate
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We cover all major test centers in North and East London
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  {
                    area: "Chingford",
                    address: "Doric House, 128 Station Road, Chingford, E4 6AD",
                    features: [
                      "High pass rate",
                      "Experienced local instructors",
                    ],
                  },
                  {
                    area: "Wanstead",
                    address: "2 Devon House, Hermon Hill, Wanstead, E11 2AW",
                    features: ["Challenging roundabouts", "Complex junctions"],
                  },
                  {
                    area: "Hornchurch",
                    address: "42-44 Northolt Way, Hornchurch, RM11 1QX",
                    features: ["Suburban routes", "Varied road conditions"],
                  },
                  {
                    area: "Loughton",
                    address:
                      "Crown Buildings, 284 High Road, Loughton, IG10 1RB",
                    features: ["Rural roads nearby", "High-speed A roads"],
                  },
                ].map((location, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-blue-300 transition-colors"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          {location.area}
                        </h3>
                        <p className="text-gray-600 mb-3">{location.address}</p>
                        <div className="flex flex-wrap gap-2">
                          {location.features.map((feature, i) => (
                            <span
                              key={i}
                              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl h-[500px]">
                  <img
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?w=800&q=80"
                    alt="Map of London"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Covering Greater London
                    </h3>
                    <p className="text-white/90 mb-4">
                      Our instructors are familiar with all local test routes
                      and can provide specialized training for each area's
                      unique challenges.
                    </p>
                    <Button
                      className="bg-white text-blue-700 hover:bg-gray-100"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Find Your Nearest Instructor
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
                  className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg"
                  onClick={() => (window.location.href = "/booking")}
                >
                  Book a Lesson
                  <ChevronRight className="ml-2 h-5 w-5" />
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
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact Us
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

export default AboutPage;
