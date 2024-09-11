"use client";
import React from "react";
import FadeInWhenVisible from "../fade-in-when-visible";
import { Trophy, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div>
      {" "}
      <section className="py-20 px-4 md:px-8 bg-gray-900  text-white">
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
    </div>
  );
};

export default WhyChooseUs;
