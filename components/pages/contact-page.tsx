import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 min-h-screen pt-16">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-[#1E2738]">
          Let's Bring Your Dream Vehicle/Machinery Home
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-[#E53935]">
                Start Your Journey
              </h2>
              <p className="text-gray-700 mb-4">
                Ready to import your dream vehicle or machinery from Japan? Our
                expert team is here to guide you through every step of the
                process.
              </p>
              <Button className="bg-[#E53935] hover:bg-[#D32F2F] text-white">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-[#1E2738] text-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose LIYO Trading?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-[#E53935]" />
                  Extensive network of trusted Japanese suppliers
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-[#E53935]" />
                  Transparent pricing and import process
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-[#E53935]" />
                  Personalized support from start to finish
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-[#E53935]" />
                  Quality assurance and vehicle history checks
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#1E2738]">
                Contact Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center">
                  <Phone className="mr-2 text-[#E53935]" /> +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2 text-[#E53935]" /> info@liyotrading.com
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2 text-[#E53935]" /> 123 Import Drive,
                  Tokyo, Japan 100-0001
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#1E2738]">
                Tell Us About Your Dream Ride
              </h2>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="border-gray-300"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="border-gray-300"
                />
                <Input
                  type="text"
                  placeholder="Desired Vehicle/Machinery"
                  className="border-gray-300"
                />
                <Textarea
                  placeholder="Additional Details (e.g., specific model, year, features)"
                  className="border-gray-300"
                  rows={4}
                />
                <Button className="w-full bg-[#E53935] hover:bg-[#D32F2F] text-white">
                  Send Inquiry
                </Button>
              </form>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/img/rx7.webp"
                alt="Luxury Japanese car"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">
                  Experience Japanese Engineering
                </h3>
                <p>From classic to cutting-edge, find your perfect match</p>
              </div>
            </div>

            <div className="bg-[#1E2738] text-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Schedule a Video Consultation
              </h2>
              <p className="mb-4">
                Want to see our inventory up close? Book a video call with our
                experts and get a virtual tour of our showroom.
              </p>
              <Button className="bg-white text-[#1E2738] hover:bg-gray-100">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
