"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Gauge,
  Fuel,
  Settings,
  Menu,
  ArrowRight,
  Zap,
  Shield,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeroSection from "../sections/hero-section";
import { url } from "inspector";
import VehicleCard from "../vehicle-card";
import EngagementSection from "../sections/engagement-section";
import FadeInWhenVisible from "../fade-in-when-visible";
import FeaturedVehicleMonth from "../sections/featured-vehicle-of-month";
import TestimonialsSection from "../sections/testimonials-section";
import WhyChooseUs from "../sections/why-choose-us";

export default function LandingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}

      {/* Hero Section */}
      <HeroSection />

      {/* Featured JDM Car of the Month Section */}
      <FeaturedVehicleMonth />
      <EngagementSection />
      {/* Why Choose Us */}
      <WhyChooseUs />
      {/* Vehicle Listings Section */}
      <section
        id="vehicles"
        className="py-20 px-4 md:px-8 text-gray-800 bg-gray-100"
      >
        <FadeInWhenVisible>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Vehicles
          </h2>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image: "/img/sample-car-1.webp",
              name: "Nissan Skyline GT-R",
              price: "$45,000",
              transmission: "Manual",
              mileage: "50,000 km",
              fuel: "Petrol",
              manufacturer: "Nissan",
              year: "1999",
              url: "/our-stock/nissan-skyline-gtr",
            },
            {
              image: "/img/sample-car-2.webp",
              name: "Toyota Supra",
              price: "$55,000",
              transmission: "Manual",
              mileage: "40,000 km",
              fuel: "Petrol",
              manufacturer: "Toyota",
              year: "1998",
              url: "/our-stock/toyota-supra",
            },
            {
              image: "/img/rx7.webp",
              name: "Mazda RX-7",
              price: "$38,000",
              transmission: "Manual",
              mileage: "60,000 km",
              fuel: "Petrol",
              manufacturer: "Mazda",
              year: "1992",
              url: "/our-stock/mazda-rx7",
            },
            {
              image: "/img/sample-car-3.webp",
              name: "Honda NSX",
              price: "$65,000",
              transmission: "Manual",
              mileage: "35,000 km",
              fuel: "Petrol",
              manufacturer: "Honda",
              year: "1995",
              url: "/our-stock/honda-nsx",
            },
            {
              image: "/img/ferrari.webp",
              name: "Subaru Impreza WRX STI",
              price: "$42,000",
              transmission: "Manual",
              mileage: "55,000 km",
              fuel: "Petrol",
              manufacturer: "Subaru",
              year: "2004",
              url: "/our-stock/subaru-impreza-wrx-sti",
            },
            {
              image: "/img/lancer.webp",
              name: "Mitsubishi Lancer Evolution",
              price: "$48,000",
              transmission: "Manual",
              mileage: "45,000 km",
              fuel: "Petrol",
              manufacturer: "Mitsubishi",
              year: "2006",
              url: "/our-stock/mitsubishi-lancer-evolution",
            },
          ].map((car, index) => (
            <FadeInWhenVisible key={index}>
              <VehicleCard key={index} car={car} />
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-100 text-gray-800">
        <div className="container mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Dream Vehicle And Machinery Today!
            </h2>
            <p className="text-xl mb-8">
              Start your journey with LIYO LLC and experience the power of
              Japanese engineering.
            </p>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-red-600 text-gray-100 hover:bg-red-500"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}
