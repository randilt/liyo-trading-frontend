"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Home } from "lucide-react";
import VehicleCard from "@/components/vehicle-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const vehicles: Vehicle[] = [
  {
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop",
    name: "Nissan Skyline GT-R R34",
    price: "$85,000",
    transmission: "Manual",
    mileage: "45,000 km",
    fuel: "Petrol",
    year: "1999",
    url: "/vehicles/nissan-skyline-gtr-r34",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=600&fit=crop",
    name: "Toyota Supra Mk4",
    price: "$79,000",
    transmission: "Manual",
    mileage: "62,000 km",
    fuel: "Petrol",
    year: "1998",
    url: "/vehicles/toyota-supra-mk4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611016186353-9af58c69a533?w=800&h=600&fit=crop",
    name: "Mazda RX-7 FD",
    price: "$45,000",
    transmission: "Manual",
    mileage: "85,000 km",
    fuel: "Petrol",
    year: "1992",
    url: "/vehicles/mazda-rx7-fd",
  },
  {
    image:
      "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=800&h=600&fit=crop",
    name: "Honda NSX",
    price: "$95,000",
    transmission: "Manual",
    mileage: "55,000 km",
    fuel: "Petrol",
    year: "1995",
    url: "/vehicles/honda-nsx",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603385937173-49f8cf7dda8c?w=800&h=600&fit=crop",
    name: "Subaru Impreza WRX STI",
    price: "$38,000",
    transmission: "Manual",
    mileage: "78,000 km",
    fuel: "Petrol",
    year: "2004",
    url: "/vehicles/subaru-impreza-wrx-sti",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570733117311-d990c3816c47?w=800&h=600&fit=crop",
    name: "Mitsubishi Lancer Evolution IX",
    price: "$42,000",
    transmission: "Manual",
    mileage: "65,000 km",
    fuel: "Petrol",
    year: "2006",
    url: "/vehicles/mitsubishi-lancer-evo-ix",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=600&fit=crop",
    name: "Toyota AE86 Trueno",
    price: "$28,000",
    transmission: "Manual",
    mileage: "120,000 km",
    fuel: "Petrol",
    year: "1986",
    url: "/vehicles/toyota-ae86-trueno",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611016186353-9af58c69a533?w=800&h=600&fit=crop",
    name: "Mazda MX-5 Miata NA",
    price: "$15,000",
    transmission: "Manual",
    mileage: "95,000 km",
    fuel: "Petrol",
    year: "1994",
    url: "/vehicles/mazda-mx5-miata-na",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop",
    name: "Nissan 300ZX",
    price: "$22,000",
    transmission: "Manual",
    mileage: "110,000 km",
    fuel: "Petrol",
    year: "1990",
    url: "/vehicles/nissan-300zx",
  },
  {
    image:
      "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=800&h=600&fit=crop",
    name: "Honda Integra Type R",
    price: "$35,000",
    transmission: "Manual",
    mileage: "75,000 km",
    fuel: "Petrol",
    year: "2000",
    url: "/vehicles/honda-integra-type-r",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603385937173-49f8cf7dda8c?w=800&h=600&fit=crop",
    name: "Subaru BRZ",
    price: "$25,000",
    transmission: "Manual",
    mileage: "45,000 km",
    fuel: "Petrol",
    year: "2015",
    url: "/vehicles/subaru-brz",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570733117311-d990c3816c47?w=800&h=600&fit=crop",
    name: "Mitsubishi 3000GT",
    price: "$32,000",
    transmission: "Manual",
    mileage: "88,000 km",
    fuel: "Petrol",
    year: "1997",
    url: "/vehicles/mitsubishi-3000gt",
  },
];

const VehiclesPage: React.FC = () => {
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);

  const handleFilter = () => {
    // Implement filtering logic here
    // For now, we'll just randomize the order of vehicles
    setFilteredVehicles([...vehicles].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-700">
              <Home className="w-4 h-4 mr-2" />
            </Link>
            <ChevronDown className="w-4 h-4 mx-2" />
            <span>All Listings</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            All Listings
          </h1>
          <p className="text-xl text-gray-600">
            Discover your dream JDM ride from our curated collection
          </p>
        </div>

        <motion.div
          className="bg-white rounded-lg shadow-md p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <Select onValueChange={handleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Any Make" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nissan">Nissan</SelectItem>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="mazda">Mazda</SelectItem>
                <SelectItem value="honda">Honda</SelectItem>
                <SelectItem value="subaru">Subaru</SelectItem>
                <SelectItem value="mitsubishi">Mitsubishi</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={handleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Any Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="skyline">Skyline</SelectItem>
                <SelectItem value="supra">Supra</SelectItem>
                <SelectItem value="rx7">RX-7</SelectItem>
                <SelectItem value="nsx">NSX</SelectItem>
                <SelectItem value="impreza">Impreza</SelectItem>
                <SelectItem value="lancer">Lancer</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={handleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Any Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-20000">$0 - $20,000</SelectItem>
                <SelectItem value="20000-40000">$20,000 - $40,000</SelectItem>
                <SelectItem value="40000-60000">$40,000 - $60,000</SelectItem>
                <SelectItem value="60000+">$60,000+</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={handleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Any Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1980-1990">1980 - 1990</SelectItem>
                <SelectItem value="1991-2000">1991 - 2000</SelectItem>
                <SelectItem value="2001-2010">2001 - 2010</SelectItem>
                <SelectItem value="2011+">2011+</SelectItem>
              </SelectContent>
            </Select>
            <Button
              onClick={handleFilter}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Reset Search
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VehicleCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehiclesPage;
