"use client";

import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Truck,
  Car,
  Building2,
  Tractor,
  Gauge,
  Heart,
  Globe,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const ServiceCard = ({ title, image, description }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? "opacity-70" : "opacity-40"
          } flex items-center justify-center`}
        >
          <h3
            className={`text-white text-2xl font-bold transition-all duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          >
            {title}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const RotatingIcon = ({ Icon }: any) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ rotate: 0 }}
      animate={inView ? { rotate: 360 } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Icon className="h-12 w-12 text-[#E53935]" />
    </motion.div>
  );
};

export default function EnhancedAboutPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          preload="auto"
          poster="/videos/liyo-services-poster.png"
        >
          <source src="/videos/liyo-trading-services.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Welcome to LIYO Trading
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your Gateway to Premium Japanese Vehicles and Machinery
          </p>
          <Button className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-lg px-8 py-3">
            Discover Our Story
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>

      <section
        ref={targetRef}
        className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          style={{ opacity, scale }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-[#1E2738] mb-6">
              Our Passion, Your Dream
            </h2>
            <p className="text-gray-700 mb-4">
              At LIYO Trading, we're more than just an import company. We're
              dream-makers, connecting enthusiasts worldwide with the finest
              Japanese vehicles and machinery. Our journey began in 2010 with a
              simple vision: to bridge the gap between Japan's automotive
              excellence and global admirers.
            </p>
            <p className="text-gray-700 mb-4">
              Today, we've turned countless automotive fantasies into driveway
              realities. Our team of dedicated experts works tirelessly to
              ensure that each vehicle we import meets the highest standards of
              quality and performance. We understand that these aren't just
              machines – they're dreams, aspirations, and for many, a piece of
              Japan's rich automotive culture.
            </p>
            <Button className="bg-[#E53935] hover:bg-[#D32F2F] text-white">
              Explore Our Legacy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1611016186353-9af58c69a533?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Luxury Japanese car"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-[#1E2738] to-[#2A3547] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Our Premium Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Vehicles"
              image="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              description="Quality vehicles imported directly from Japan, meeting the highest standards of performance and reliability."
            />
            <ServiceCard
              title="Parts"
              image="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              description="Genuine Japanese auto parts to keep your vehicle running at its best."
            />
            <ServiceCard
              title="Motorcycles"
              image="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              description="Experience the thrill of Japanese motorcycles, from classic designs to cutting-edge models."
            />
            <ServiceCard
              title="Trucks"
              image="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              description="Reliable and efficient Japanese trucks for all your commercial needs."
            />
            <ServiceCard
              title="Construction Machinery"
              image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              description="Top-quality construction equipment to power your projects."
            />
            <ServiceCard
              title="Agricultural Machinery"
              image="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              description="Advanced agricultural machinery to boost your farm's productivity."
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1E2738] mb-16">
            The LIYO Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Unmatched Expertise",
                description:
                  "Our team of automotive specialists brings years of experience and passion to every import.",
                icon: Gauge,
              },
              {
                title: "Global Reach",
                description:
                  "We've successfully delivered dreams to customers in over 50 countries worldwide.",
                icon: Globe,
              },
              {
                title: "Timely Delivery",
                description:
                  "We understand the excitement of waiting for your dream machine. That's why we ensure swift, on-time deliveries.",
                icon: Clock,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <RotatingIcon Icon={item.icon} />
                <h3 className="text-xl font-semibold text-[#1E2738] my-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Happy businessman with his imported machinery"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1E2738] mb-6">
                Turning Dreams into Reality
              </h2>
              <p className="text-gray-700 mb-4">
                At LIYO Trading, we don't just import vehicles and machinery –
                we import smiles, satisfaction, and success. Our clients, from
                passionate car enthusiasts to savvy business owners, trust us to
                deliver not just products, but experiences that transform their
                lives and businesses.
              </p>
              <p className="text-gray-700 mb-4">
                Whether it's the thrill of sitting behind the wheel of a classic
                JDM sports car or the efficiency boost from top-tier Japanese
                machinery, we're here to make it happen. Our commitment goes
                beyond the transaction – we're invested in your joy, your
                success, and your LIYO journey.
              </p>
              <Button className="bg-[#E53935] hover:bg-[#D32F2F] text-white">
                Read Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1E2738] mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "LIYO Trading turned my dream of owning a Nissan Skyline GT-R into a reality. Their expertise and customer service are unmatched!",
                author: "Alex C., Proud GT-R Owner",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
              },
              {
                quote:
                  "As a construction company owner, I was skeptical about importing machinery. LIYO made it seamless, and now our productivity has soared!",
                author: "Sarah L., CEO of BuildRight Construction",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
              },
              {
                quote:
                  "The level of care and attention to detail LIYO puts into every import is astounding. They're not just importers, they're automotive artists!",
                author: "Mike T., Automotive Journalist",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={96}
                    height={96}
                    objectFit="cover"
                  />
                </div>
                <p className="italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-[#E53935] font-semibold">
                  - {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E53935] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your LIYO Journey?
            </h2>
            <p className="text-xl mb-8">
              Whether you're dreaming of a classic JDM beauty or seeking to
              elevate your business with top-tier machinery, we're here to make
              it happen.
            </p>
            <Button className="bg-white text-[#E53935] hover:bg-gray-100 text-lg px-8 py-3">
              Let's Bring Your Dream Home
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
