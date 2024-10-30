"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cars = [
  {
    name: "Mercedes-Benz S-Class",
    image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&w=1200",
    description: "Ultimate luxury sedan for executive travel",
  },
  {
    name: "BMW 7 Series",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200",
    description: "Premium comfort for distinguished clients",
  },
];

export default function FleetSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % cars.length);
  const prev = () => setCurrent((current - 1 + cars.length) % cars.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {cars.map((car, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === current ? 1 : 0,
            scale: index === current ? 1 : 1.1,
          }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50" />
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold mb-4"
            >
              {car.name}
            </motion.h3>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl"
            >
              {car.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm p-2 rounded-full hover:bg-black/40 transition-colors"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm p-2 rounded-full hover:bg-black/40 transition-colors"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>
    </div>
  );
}