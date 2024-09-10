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

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </Link>
  </motion.li>
);

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const testimonials = [
    {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
      quote: "Amazing service! I got my dream JDM car with ease.",
    },
    {
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      quote: "The import process was smooth and hassle-free.",
    },
    {
      name: "Mike Johnson",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
      quote: "Excellent selection of rare JDM models!",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <motion.nav
        className="bg-gray-900 text-white py-4 px-6 fixed w-full z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            LIYO LLC
          </Link>
          <div className="hidden md:block">
            <ul className="flex space-x-6">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#featured">Featured</NavItem>
              <NavItem href="#vehicles">Vehicles</NavItem>
              <NavItem href="#testimonials">Testimonials</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </ul>
          </div>
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4"
          >
            <ul className="flex flex-col space-y-2">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#featured">Featured</NavItem>
              <NavItem href="#vehicles">Vehicles</NavItem>
              <NavItem href="#testimonials">Testimonials</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </ul>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <HeroSection />
      {/* Featured JDM Car of the Month Section */}
      <section
        id="featured"
        className="py-16 px-4 md:px-8 text-gray-800 bg-gray-100"
      >
        <div className="container mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured JDM Car of the Month
            </h2>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <FadeInWhenVisible>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=800&h=600&fit=crop"
                  alt="Featured JDM Car"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Nissan Skyline GT-R R34</h3>
                <p className="text-gray-600">
                  Experience the legend that defined a generation of JDM
                  enthusiasts. With its iconic design and unparalleled
                  performance, the R34 GT-R is a true collector's dream.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-red-600" />{" "}
                    Twin-turbocharged RB26DETT engine
                  </li>
                  <li className="flex items-center">
                    <Gauge className="w-5 h-5 mr-2 text-red-600" /> ATTESA E-TS
                    all-wheel drive system
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-red-600" /> Advanced
                    aerodynamics for optimal performance
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white mt-4"
                >
                  Learn More
                </Button>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Why Choose JDM Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900  text-white">
        <div className="container mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose JDM?
            </h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Unmatched Performance",
                description:
                  "Experience cutting-edge engineering and speed that defines the JDM legacy.",
              },
              {
                icon: Zap,
                title: "Iconic Designs",
                description:
                  "Own a piece of automotive history with timeless Japanese aesthetics.",
              },
              {
                icon: Users,
                title: "Passionate Community",
                description:
                  "Join a global network of enthusiasts who share your love for JDM cars.",
              },
            ].map((item, index) => (
              <FadeInWhenVisible key={index}>
                <motion.div
                  className="bg-gray-800 rounded-lg p-6 shadow-lg h-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-red-500" />
                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {item.description}
                  </p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Listings Section */}
      <section
        id="vehicles"
        className="py-16 px-4 md:px-8 text-gray-800 bg-gray-100"
      >
        <FadeInWhenVisible>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Vehicles
          </h2>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image:
                "https://images.unsplash.com/photo-1611016186353-9af58c69a533?w=600&h=400&fit=crop",
              name: "Nissan Skyline GT-R",
              price: "$45,000",
              transmission: "Manual",
              mileage: "50,000 km",
              fuel: "Petrol",
              manufacturer: "Nissan",
              year: "1999",
            },
            {
              image:
                "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop",
              name: "Toyota Supra",
              price: "$55,000",
              transmission: "Manual",
              mileage: "40,000 km",
              fuel: "Petrol",
              manufacturer: "Toyota",
              year: "1998",
            },
            {
              image:
                "https://images.unsplash.com/photo-1595953453746-1f88d8c1a871?w=600&h=400&fit=crop",
              name: "Mazda RX-7",
              price: "$38,000",
              transmission: "Manual",
              mileage: "60,000 km",
              fuel: "Petrol",
              manufacturer: "Mazda",
              year: "1992",
            },
            {
              image:
                "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=600&h=400&fit=crop",
              name: "Honda NSX",
              price: "$65,000",
              transmission: "Manual",
              mileage: "35,000 km",
              fuel: "Petrol",
              manufacturer: "Honda",
              year: "1995",
            },
            {
              image:
                "https://images.unsplash.com/photo-1603385937173-49f8cf7dda8c?w=600&h=400&fit=crop",
              name: "Subaru Impreza WRX STI",
              price: "$42,000",
              transmission: "Manual",
              mileage: "55,000 km",
              fuel: "Petrol",
              manufacturer: "Subaru",
              year: "2004",
            },
            {
              image:
                "https://images.unsplash.com/photo-1570733117311-d990c3816c47?w=600&h=400&fit=crop",
              name: "Mitsubishi Lancer Evolution",
              price: "$48,000",
              transmission: "Manual",
              mileage: "45,000 km",
              fuel: "Petrol",
              manufacturer: "Mitsubishi",
              year: "2006",
            },
          ].map((car, index) => (
            <FadeInWhenVisible key={index}>
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ y: -10 }}
              >
                <Image
                  src={car.image}
                  alt={car.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-red-600 font-bold mb-4">{car.price}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Settings className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center">
                      <Gauge className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{car.mileage}</span>
                    </div>
                    <div className="flex items-center">
                      <Fuel className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{car.year}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      Inquire
                    </Button>
                  </div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section
        id="testimonials"
        className="py-16 px-4 md:px-8 bg-gray-900 text-white"
      >
        <FadeInWhenVisible>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
        </FadeInWhenVisible>
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg shadow-lg p-8 text-center"
          >
            <Image
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4"
            />
            <p className="text-xl italic mb-4">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <p className="font-semibold">
              {testimonials[currentTestimonial].name}
            </p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </motion.div>
          <button
            onClick={() =>
              setCurrentTestimonial((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )
            }
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-600 rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() =>
              setCurrentTestimonial((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Dream JDM Today!
            </h2>
            <p className="text-xl mb-8">
              Don't miss out on owning a piece of automotive history. Our expert
              team is ready to help you find the perfect JDM car.
            </p>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                Start Your JDM Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-900 text-white py-12 px-4 md:px-8"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">LIYO LLC</h3>
            <p className="text-gray-400">
              Your trusted source for authentic Japanese sports cars.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Buy a Car
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest offers and arrivals.
            </p>
            <form className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none"
              />
              <Button
                type="submit"
                className="bg-red-600 hover:bg-red-700 rounded-l-none"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2023 JDM Imports. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
