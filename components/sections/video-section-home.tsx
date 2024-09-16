"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Truck, Car, Wrench, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroContent = [
  {
    icon: Car,
    title: "Premium JDM Vehicles",
    description:
      "From classic treasures to modern marvels, we bring Japan's finest automobiles to your doorstep.",
  },
  {
    icon: Truck,
    title: "Industrial Machinery",
    description:
      "Elevate your business with cutting-edge Japanese industrial equipment and heavy machinery.",
  },
  {
    icon: Wrench,
    title: "Authentic Parts",
    description:
      "Maintain peak performance with genuine Japanese auto parts and components.",
  },
  {
    icon: Cog,
    title: "Expert Consultation",
    description:
      "Navigate the import process seamlessly with our specialized knowledge and support.",
  },
];

export default function EnhancedHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover opacity-30"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/liyo-trading-services.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/80   to-transparent opacity-90" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 text-center"
        >
          Unleash Japanese Engineering
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 text-center max-w-3xl"
        >
          Your premier gateway to Japan's finest vehicles and cutting-edge
          machinery
        </motion.p>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {heroContent.map(
              (content, index) =>
                index === currentIndex && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-2 md:col-span-1 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 flex items-start space-x-4"
                  >
                    <content.icon className="w-12 h-12 text-red-500 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {content.title}
                      </h2>
                      <p className="text-gray-300">{content.description}</p>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-3">
            Discover Our Inventory
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index
                ? "bg-red-600"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
