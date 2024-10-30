"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen hero-section">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/492583514.hd.mp4?s=749a3d1d2c2487b59831f2fd99e50e3ed9e0acf9&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 p-8"
        >
          <h1 className="text-7xl font-bold text-white tracking-tight">
            Luxury Car Service
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Experience unparalleled chauffeur services across Canada
          </p>
          <Button
            size="lg"
            onClick={scrollToBooking}
            className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
          >
            Reserve Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}