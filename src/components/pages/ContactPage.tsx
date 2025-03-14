import React, { useState } from "react";
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
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Twitter,
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
    // In a real app, you would send the form data to your backend here
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
        marketingConsent: false,
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

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
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1800&q=80"
              alt="Contact us"
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
                Get In Touch
              </motion.h1>

              <motion.p
                className="text-xl mb-8 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Have questions about our driving lessons? Ready to book? We're
                here to help you start your driving journey.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href="tel:+441234567890"
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-3 rounded-full flex items-center transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (555) 123-4567
                </a>
                <a
                  href="mailto:info@drivedojo.com"
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-3 rounded-full flex items-center transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  info@drivedojo.com
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-600 text-white p-6">
                  <h2 className="text-2xl font-bold flex items-center">
                    <MessageSquare className="mr-3 h-6 w-6" />
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-white/80">
                    We'll get back to you within 24 hours
                  </p>
                </div>

                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {formSubmitted ? (
                      <motion.div
                        className="bg-green-100 text-green-800 p-6 rounded-lg flex items-start"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-lg mb-1">
                            Message Sent Successfully!
                          </h3>
                          <p>
                            Thank you for contacting Drive Dojo. We'll be in
                            touch with you shortly.
                          </p>
                        </div>
                      </motion.div>
                    ) : (
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
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="general" id="general" />
                              <Label htmlFor="general">General Inquiry</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="booking" id="booking" />
                              <Label htmlFor="booking">
                                Booking Information
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="instructor"
                                id="instructor"
                              />
                              <Label htmlFor="instructor">
                                Instructor Inquiry
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="feedback" id="feedback" />
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

                        <Button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg flex items-center justify-center"
                        >
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </Button>
                      </motion.form>
                    )}
                  </AnimatePresence>
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
                {/* Office Information */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Main Office</h3>
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
                          <p className="text-gray-600">
                            Monday - Friday: 9:00 AM - 6:00 PM
                            <br />
                            Saturday: 10:00 AM - 4:00 PM
                            <br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="h-[300px] relative">
                    <img
                      src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?w=800&q=80"
                      alt="Office Location Map"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg"
                        onClick={() =>
                          window.open(
                            "https://maps.google.com/?q=123+Driving+Lane+Roadville+CA+90210",
                            "_blank",
                          )
                        }
                      >
                        Open in Google Maps
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                    <div className="flex flex-wrap gap-4">
                      {[
                        {
                          icon: <Instagram className="h-5 w-5" />,
                          name: "Instagram",
                          url: "https://www.instagram.com/drive.dojo",
                          color: "bg-pink-600 hover:bg-pink-700",
                        },
                        {
                          icon: (
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                          ),
                          name: "TikTok",
                          url: "https://www.tiktok.com/@drivedojods",
                          color: "bg-black hover:bg-gray-800",
                        },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${social.color} text-white px-4 py-2 rounded-lg flex items-center`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {social.icon}
                          <span className="ml-2">{social.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "Book a Lesson", href: "/booking" },
                        { name: "Pricing & Packages", href: "/pricing" },
                        { name: "About Us", href: "/about" },
                        { name: "FAQ", href: "/" },
                        { name: "Student Portal", href: "/" },
                        { name: "Careers", href: "/" },
                      ].map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.href}
                          className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                          whileHover={{ x: 5 }}
                        >
                          <ChevronRight className="h-4 w-4 mr-1" />
                          {link.name}
                        </motion.a>
                      ))}
                    </div>
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg group px-8 py-6 text-lg"
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
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
