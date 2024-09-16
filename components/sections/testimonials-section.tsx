"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "../fade-in-when-visible";

const testimonials = [
  {
    name: "John Doe",
    image: "/img/john.webp",
    quote: "Amazing service! I got my dream JDM car with ease.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: "/img/jane.webp",
    quote: "The import process was smooth and hassle-free.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    image: "/img/mike.webp",
    quote: "Excellent selection of rare JDM models!",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-red-900 text-white"
    >
      <FadeInWhenVisible>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <Card className="bg-white/10 backdrop-blur-lg border-none shadow-xl w-full max-w-2xl">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row text-white items-center md:items-start gap-6">
                      <Image
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-xl italic mb-4">
                          "{testimonials[currentTestimonial].quote}"
                        </p>
                        <p className="font-semibold text-lg">
                          {testimonials[currentTestimonial].name}
                        </p>
                        <div className="flex justify-center md:justify-start mt-2">
                          {[
                            ...Array(testimonials[currentTestimonial].rating),
                          ].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full bg-red-600 hover:bg-red-700 text-white border-none"
              >
                <ChevronLeft className="w-6 h-6" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full bg-red-600 hover:bg-red-700 text-white border-none"
              >
                <ChevronRight className="w-6 h-6" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default TestimonialsSection;
