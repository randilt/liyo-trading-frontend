"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  MessageCircle,
  Mail,
  Printer,
  Car,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Compass,
  PaintBucket,
  DoorClosed,
  ShipWheel,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const vehicleImages = [
  "/img/sample-car-1.webp",
  "/img/sample-car-2.webp",
  "/img/sample-car-3.webp",
];

const vehicleFeatures = [
  "Power Windows",
  "Alloy Wheels",
  "A/C:front",
  "Power Seats",
];

const vehicleAttributes = [
  { icon: Car, label: "Brand", value: "Mitsubishi" },
  { icon: Car, label: "Model", value: "Minicab Truck" },
  { icon: Calendar, label: "Year", value: "2000" },
  { icon: Car, label: "Body", value: "Sedan" },
  { icon: Gauge, label: "Mileage", value: "90,000 km" },
  { icon: Fuel, label: "Fuel", value: "Petrol" },
  { icon: Settings, label: "Transmission", value: "Manual" },
  { icon: Compass, label: "Drive Type", value: "4wheel drive" },
  { icon: PaintBucket, label: "Ext. Color", value: "White" },
  { icon: ShipWheel, label: "Steering", value: "Right" },
  { icon: DoorClosed, label: "Doors", value: "1" },
];

const ShowcaseVehicle: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % vehicleImages.length);
  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + vehicleImages.length) % vehicleImages.length
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
      {/* <div className="text-sm breadcrumbs mb-4">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/stock-cars">Stock Cars</a>
          </li>
          <li>Mitsubishi Minicab Truck 660 Mighty 4wd 2000 For Sale</li>
        </ul>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mobile Title */}
        <h1 className="text-3xl font-bold mb-2 md:hidden">
          Mitsubishi Minicab Truck 660 Mighty 4WD
        </h1>

        {/* Image Gallery and Vehicle Details */}
        <div>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image
                  src={vehicleImages[currentImage]}
                  alt={`Vehicle Image ${currentImage + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded">
                  {currentImage + 1} / {vehicleImages.length}
                </div>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
          <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
            {vehicleImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`flex-shrink-0 ${
                  index === currentImage ? "ring-2 ring-red-500" : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={60}
                  objectFit="cover"
                  className="rounded"
                />
              </button>
            ))}
          </div>

          {/* Vehicle Attributes (hidden on mobile) */}
          <div className="mt-8 hidden md:block">
            <h2 className="text-xl font-semibold mb-4">Vehicle Details</h2>
            <div className="grid grid-cols-2 gap-4">
              {vehicleAttributes.map((attr, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <attr.icon className="w-5 h-5 text-gray-500" />
                  <span className="text-sm">
                    <strong>{attr.label}:</strong> {attr.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vehicle Information and Quote Form */}
        <div>
          {/* Desktop Title (hidden on mobile) */}
          <h1 className="text-3xl font-bold mb-2 hidden md:block">
            Mitsubishi Minicab Truck 660 Mighty 4WD
          </h1>

          <Badge className="mb-4">Local Dealer Network Listing</Badge>
          <p className="text-3xl font-bold text-red-500 mb-4">
            ¥ 330,000{" "}
            <span className="text-sm font-normal text-gray-500">(FOB)</span>
          </p>

          <div className="flex space-x-4 mb-6">
            <Button variant="outline" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </div>

          <Button className="w-full mb-4 bg-green-500 hover:bg-green-600 text-white">
            <MessageCircle className="mr-2 h-4 w-4" /> Contact via WhatsApp
          </Button>

          <Button variant="outline" className="w-full mb-6">
            <Printer className="mr-2 h-4 w-4" /> Print
          </Button>

          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="mb-4">
            Mitsubishi Minicab Truck 660 Mighty 4WD, Low Mileage
          </p>

          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {vehicleFeatures.map((feature, index) => (
              <Badge key={index} variant="secondary">
                {feature}
              </Badge>
            ))}
          </div>

          {/* Vehicle Attributes (visible only on mobile) */}
          <div className="mt-8 md:hidden">
            <h2 className="text-xl font-semibold mb-4">Vehicle Details</h2>
            <div className="grid grid-cols-2 gap-4">
              {vehicleAttributes.map((attr, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <attr.icon className="w-5 h-5 text-gray-500" />
                  <span className="text-sm">
                    <strong>{attr.label}:</strong> {attr.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-semibold mb-4">Get a Free Quote Now</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Eg. John" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Eg. johndoe@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <Input id="phone" placeholder="Eg. 3 1234 5678" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea id="message" placeholder="Write your message..." />
              </div>
              <Button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white"
              >
                Get Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseVehicle;
