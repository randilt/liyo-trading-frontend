"use client";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

interface NavItemProps {
  href: string;
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

function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      {" "}
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
    </div>
  );
}

export default NavMenu;
