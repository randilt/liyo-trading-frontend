"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FadeInWhenVisible from "../fade-in-when-visible";

const EngagementSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-red-600 py-20">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side - Image */}
            <motion.div
              className="w-full md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/img/jp-car-1.png"
                  alt="Sleek JDM Vehicle"
                  width={800}
                  height={600}
                  className="w-full h-auto max-w-lg mx-auto"
                  style={{
                    filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.3))",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Right side - Text content */}
            <motion.div
              className="w-full md:w-1/2 text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Own the Road, Own Your Dream, Straight from Japan
              </h2>
              <p className="text-xl mb-8">
                Discover iconic vehicles and machinery that power your passion.
                High-performance, precision-engineered, just a click away.
              </p>
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 transition-colors duration-300"
              >
                Explore
              </Button>
            </motion.div>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <motion.path
            d="M0,0 C40,20 60,80 100,100 L100,0 Z"
            fill="rgba(255,255,255,0.1)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default EngagementSection;
