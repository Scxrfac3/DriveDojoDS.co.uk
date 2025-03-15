import React, { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/home";
import ServicesPage from "./components/pages/ServicesPage";
import PricingPage from "./components/pages/PricingPage";
import BookingPage from "./components/pages/BookingPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import routes from "tempo-routes";

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-blue-600 flex flex-col items-center justify-center z-50">
    <motion.div
      className="w-24 h-24 rounded-full border-8 border-white border-t-transparent"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
    <motion.p
      className="text-white text-lg font-medium mt-4"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      Loading Drive Dojo...
    </motion.p>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AnimatePresence mode="wait">
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage key="contact-page" />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
