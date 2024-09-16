"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Car, PhoneCall, Wrench } from "lucide-react";
import { GiMechanicGarage } from "react-icons/gi";
import Container from "../Container";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white overflow-hidden"
    >
      <Container>
        <motion.div
          style={{ opacity, scale }}
          className=" flex flex-col-reverse md:flex-row items-center"
        >
          <div className="md:w-1/2 mt-8 md:mt-0 z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Import Your Dream{" "}
              <motion.span
                className="text-red-500 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Vehicles
              </motion.span>{" "}
              &{" "}
              <motion.span
                className="text-red-500 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Machinery
              </motion.span>{" "}
              from Japan{" "}
              <motion.img
                src="/img/jp_flag.png"
                alt="Japanese Flag"
                className="inline-block w-10 h-10 -ml-2 align-text-top"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience the thrill of owning authentic JDM vehicles. Our
              step-by-step guidance ensures a smooth import process from
              Japanese markets and auctions.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300 transform hover:scale-105"
              >
                <GiMechanicGarage className="mr-2 h-5 w-5" />
                Explore Our Stock
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full filter blur-3xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <Image
              src="/img/gtr-nobg.png"
              alt="JDM Sports Car"
              width={800}
              height={600}
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="fixed bottom-4 right-4 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            size="icon"
            className="rounded-full bg-green-500 hover:bg-green-600 text-white w-16 h-16 shadow-lg transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
