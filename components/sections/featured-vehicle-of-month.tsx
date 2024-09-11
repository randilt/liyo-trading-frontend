import React from "react";
import FadeInWhenVisible from "../fade-in-when-visible";
import Image from "next/image";
import { Button } from "../ui/button";
import { Gauge, Shield, Zap } from "lucide-react";

const FeaturedVehicleMonth = () => {
  return (
    <div>
      {" "}
      <section
        id="featured"
        className="py-20 px-4 md:px-8 text-gray-800 bg-gray-100"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
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
            <FadeInWhenVisible>
              <div className="relative">
                <Image
                  src="/img/jdm-of-month.png"
                  alt="Featured JDM Car"
                  width={800}
                  height={600}
                  className=""
                />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedVehicleMonth;
