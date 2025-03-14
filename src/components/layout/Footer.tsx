import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Zap,
  Heart,
  Send,
  Globe,
  Music,
  Rocket,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FooterProps {
  logo?: string;
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
  quickLinks?: Array<{
    title: string;
    href: string;
  }>;
  socialLinks?: Array<{
    platform: "facebook" | "instagram" | "twitter" | "youtube";
    href: string;
  }>;
}

const Footer = ({
  logo = "/vite.svg",
  contactInfo = {
    email: "info@drivedojo.com",
    phone: "(555) 123-4567",
    address: "123 Driving Lane, Cartown, CT 12345",
  },
  quickLinks = [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "FAQ", href: "/" },
    { title: "Terms & Conditions", href: "/" },
    { title: "Privacy Policy", href: "/" },
    { title: "Careers", href: "/" },
  ],
  socialLinks = [
    { platform: "instagram", href: "https://www.instagram.com/drive.dojo" },
    { platform: "tiktok", href: "https://www.tiktok.com/@drivedojods" },
  ],
}: FooterProps) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-5 w-5" />;
      case "tiktok":
        return (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const socialColors = {
    instagram: "from-pink-500 via-purple-500 to-orange-500",
    tiktok: "from-black to-gray-800",
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 px-4 md:px-8 lg:px-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 10,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-full">
                <img src={logo} alt="Drive Dojo Logo" className="h-10 w-10" />
              </div>
              <motion.span
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Drive Dojo
              </motion.span>
            </motion.div>
            <p className="text-slate-300 text-sm">
              Professional driving instruction with a focus on safety,
              confidence, and skill development. Backed by venture capital to
              bring innovation to driver education.
            </p>
            <motion.div
              className="flex items-center space-x-2 text-sm text-blue-300"
              whileHover={{ x: 5 }}
            >
              <Rocket className="h-4 w-4" />
              <span>VC Backed Startup</span>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Connect With Us
            </h3>
            <ul className="space-y-3 text-slate-300">
              <motion.li
                className="flex items-center space-x-2"
                whileHover={{ x: 5, color: "#60a5fa" }}
              >
                <div className="bg-blue-900/50 p-2 rounded-full">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </motion.li>
              <motion.li
                className="flex items-center space-x-2"
                whileHover={{ x: 5, color: "#60a5fa" }}
              >
                <div className="bg-blue-900/50 p-2 rounded-full">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </motion.li>
              <motion.li
                className="flex items-start space-x-2"
                whileHover={{ x: 5, color: "#60a5fa" }}
              >
                <div className="bg-blue-900/50 p-2 rounded-full mt-0.5">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <span>{contactInfo.address}</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2 text-slate-300">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  onHoverStart={() => setHoveredLink(link.title)}
                  onHoverEnd={() => setHoveredLink(null)}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors flex items-center space-x-1"
                  >
                    <motion.span
                      animate={{
                        rotate:
                          hoveredLink === link.title ? [0, 15, -15, 0] : 0,
                        color:
                          hoveredLink === link.title ? "#60a5fa" : "#cbd5e1",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {hoveredLink === link.title ? "→" : "•"}
                    </motion.span>
                    <span>{link.title}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Get Exclusive Updates
            </h3>
            <p className="text-slate-300 text-sm">
              Subscribe for driving tips, special offers, and early access to
              new features.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="pl-10 bg-slate-800/50 border-slate-700 focus:border-blue-500 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
              <AnimatePresence>
                {isSubscribed ? (
                  <motion.div
                    className="bg-green-900/50 text-green-300 p-2 rounded-md flex items-center space-x-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>Thanks for subscribing!</span>
                  </motion.div>
                ) : (
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-md flex items-center justify-center space-x-2 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Subscribe</span>
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <Send className="h-4 w-4" />
                      </motion.span>
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-white opacity-10"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${socialColors[social.platform]} p-2 rounded-full hover:shadow-lg transition-all duration-300`}
                aria-label={`Follow us on ${social.platform}`}
                whileHover={{
                  y: -5,
                  scale: 1.1,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setHoveredSocial(social.platform)}
                onHoverEnd={() => setHoveredSocial(null)}
              >
                <motion.div
                  animate={{
                    rotate: hoveredSocial === social.platform ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {getSocialIcon(social.platform)}
                </motion.div>
              </motion.a>
            ))}
          </div>
          <div className="text-slate-400 text-sm flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ color: "#60a5fa" }}
            >
              <Globe className="h-4 w-4" />
              <span>English (US)</span>
            </motion.div>
            <span>© {new Date().getFullYear()} Drive Dojo Driving School</span>
            <motion.div
              className="text-xs bg-slate-800/50 px-2 py-1 rounded-full flex items-center space-x-1"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(30, 41, 59, 0.7)",
              }}
            >
              <Star className="h-3 w-3 text-yellow-400" />
              <span>VC Funded</span>
            </motion.div>
          </div>
        </div>

        {/* App Promotion */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-xl border border-blue-800/30 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-white">Get Our Mobile App</h4>
              <p className="text-sm text-slate-300">
                Schedule lessons, track progress, and more
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <motion.button
              className="bg-black px-4 py-2 rounded-lg flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-white"
                fill="currentColor"
              >
                <path d="M17.5,2 C17.5,2 14.2,2.2 12,4.2 C9.7,6.2 9.2,9.5 9.2,9.5 C9.2,9.5 11.8,9.8 14,7.8 C16.2,5.8 17.5,2 17.5,2 Z" />
                <path d="M12.8,4.6 C12.8,4.6 10.1,7.7 10.1,12.1 C10.1,17.5 14.4,19.5 14.4,19.5 C14.4,19.5 15.3,18.1 16.7,16.5 C18.1,14.9 19,13.5 19,13.5 C19,13.5 16.3,12.4 16.3,9.6 C16.3,6.8 18.2,5.1 18.2,5.1 C18.2,5.1 15.4,4.3 12.8,4.6 Z" />
                <path d="M12.8,19.6 C12.8,19.6 9.3,17.5 5.9,19.6 C2.5,21.7 2,24 2,24 C2,24 5.5,24 8.9,21.9 C12.3,19.8 12.8,19.6 12.8,19.6 Z" />
                <path d="M7.9,12.3 C7.9,12.3 6.1,10.4 2.9,10.8 C-0.3,11.2 2,15.3 2,15.3 C2,15.3 4.3,14.7 6.5,13.3 C8.7,11.9 7.9,12.3 7.9,12.3 Z" />
              </svg>
              <span className="text-white">App Store</span>
            </motion.button>
            <motion.button
              className="bg-black px-4 py-2 rounded-lg flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-white"
                fill="currentColor"
              >
                <path d="M3.18,20.83c0.12,0.31,0.29,0.61,0.5,0.89c0.34,0.44,0.78,0.81,1.34,1.06C5.57,23.06,6.15,23.17,6.73,23c0.58-0.17,1.17-0.54,1.77-1.12l2.25-2.14l-1.76-1.01L3.18,20.83z" />
                <path d="M20.97,10.32c-0.04-0.15-0.14-0.29-0.27-0.4l0,0c-0.13-0.11-0.29-0.17-0.45-0.17h-0.08L4.11,8.62L16.32,15l4.28-2.47c0.33-0.19,0.5-0.56,0.43-0.93C21.01,10.5,20.99,10.41,20.97,10.32z" />
                <path d="M3.18,3.17c-0.12,0.31-0.19,0.65-0.19,1v15.66c0,0.35,0.07,0.69,0.19,1l6.22-3.34l5.51-2.96L3.18,3.17z" />
                <path d="M10.82,6.95L6.73,1c-0.58-0.58-1.17-0.95-1.75-1.12C4.39-0.29,3.82-0.18,3.27,0.11C2.72,0.4,2.28,0.77,1.94,1.21C1.73,1.49,1.56,1.79,1.44,2.1l11.14,6.36L10.82,6.95z" />
              </svg>
              <span className="text-white">Google Play</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
