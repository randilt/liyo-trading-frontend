"use client";
import React from "react";
import FadeInWhenVisible from "../fade-in-when-visible";
import Image from "next/image";
import { Button } from "../ui/button";
import { Car, ChevronDown, Cog, Gauge, Shield, Truck, Zap } from "lucide-react";
import { BsTools } from "react-icons/bs";
import Container from "../Container";

const WhatWeOffer = () => {
  return (
    <div>
      {" "}
      <section id="featured" className="py-20 text-gray-800 bg-gray-100">
        <Container>
          <div>
            <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
              <FadeInWhenVisible>
                <div className="space-y-4 max-w-4xl">
                  <h3 className="text-2xl font-bold">
                    From Vehicle Parts To Industrial Machinery. All You Need Is
                    Here!
                  </h3>
                  <p className="text-gray-600">
                    Discover iconic vehicles and machinery that power your
                    passion. High-performance, precision-engineered, just a
                    click away.
                    <br />
                    <span className="mt-2 text-red-600 flex items-center gap-2">
                      <strong>Heres what we have to offer you</strong>{" "}
                      <ChevronDown className="shrink-0" />
                    </span>
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Car className="w-6 h-6 mr-3 text-red-600" />
                      <span>
                        Diverse Vehicle Fleet: From Compact Sedans to Robust
                        Trucks and Sport Cars
                      </span>
                    </li>
                    <li className="flex items-center">
                      <BsTools className="w-6 h-6 mr-3 text-red-600" />
                      <span>
                        Industrial-Grade Machinery and Precision Tools
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Cog className="w-6 h-6 mr-3 text-red-600" />
                      <span>
                        Genuine Parts and Performance-Enhancing Accessories
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Truck className="w-6 h-6 mr-3 text-red-600" />
                      <span>
                        Heavy-Duty Construction Equipment and Machinery
                      </span>
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
                    src="/img/machinery.png"
                    alt="Featured JDM Car"
                    width={500}
                    height={500}
                    className=""
                  />
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default WhatWeOffer;
