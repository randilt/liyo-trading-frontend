"use client";

import { Clock, Fuel, Gauge, Settings } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface Vehicle {
  image: string;
  name: string;
  price: string;
  transmission: string;
  mileage: string;
  fuel: string;
  year: string;
  url: string;
}

const VehicleCard: React.FC<{ car: Vehicle }> = ({ car }) => {
  return (
    <div>
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
            <Link href={car.url}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Inquire
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VehicleCard;
