"use client";

import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import FleetSlider from "@/components/FleetSlider";
import BookingForm from "@/components/BookingForm";
import { motion } from "framer-motion";
import { Phone, Mail, Shield, Clock, Award, HeartHandshake } from "lucide-react";

const services = [
  {
    title: "Airport Transfer",
    price: "$150",
    description: "Reliable airport pickup and drop-off service",
  },
  {
    title: "Wedding Service",
    price: "$500",
    description: "Make your special day more memorable",
  },
  {
    title: "City Tour",
    price: "$300",
    description: "Explore the city in luxury and comfort",
  },
  {
    title: "Corporate Service",
    price: "$200/hr",
    description: "Professional chauffeur service for business needs",
  },
];

const reasons = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Professional drivers with extensive safety training and clean records",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service to meet your transportation needs",
  },
  {
    icon: Award,
    title: "Premium Fleet",
    description: "Luxury vehicles maintained to the highest standards",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description: "Tailored experience to meet your specific requirements",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />

      {/* Services Section */}
      <section className="py-24 px-4 bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-black">Our Services</h2>
            <p className="text-xl text-gray-600">
              Experience luxury transportation tailored to your needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-semibold mb-2 text-black">{service.title}</h3>
                <p className="text-3xl font-bold text-black mb-4">
                  {service.price}
                </p>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rent From Us Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-black">Why Rent From Us</h2>
            <p className="text-xl text-gray-600">
              Discover the advantages of choosing our premium service
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 pt-16"
          >
            <h2 className="text-5xl font-bold mb-4">Our Fleet</h2>
            <p className="text-xl text-gray-300">
              Discover our collection of premium vehicles
            </p>
          </motion.div>
        </div>
        <FleetSlider />
      </section>

      {/* Booking Section */}
      <section className="py-24 px-4 bg-white" id="booking">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-black">Book Your Ride</h2>
            <p className="text-xl text-gray-600">
              Reserve your luxury experience today
            </p>
          </motion.div>
          <BookingForm />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6" />
              <span className="text-xl">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6" />
              <span className="text-xl">booking@luxurycarservice.ca</span>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}