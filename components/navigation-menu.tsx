"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isDarkBg: boolean;
  isActive: boolean;
  onClick: () => void;
}

const ThemeContext = createContext({
  isDarkBg: true,
  setIsDarkBg: (value: boolean) => {},
});

const NavItem: React.FC<NavItemProps> = ({
  href,
  children,
  isDarkBg,
  isActive,
  onClick,
}) => (
  <motion.li
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative"
  >
    <Link
      href={href}
      className={`flex items-center transition-colors group ${
        isDarkBg
          ? "text-white hover:text-red-400"
          : "text-gray-800 hover:text-red-600"
      } ${isActive ? "font-bold" : ""}`}
      onClick={onClick}
    >
      <span>{children}</span>
      <motion.div
        className={`absolute bottom-0 left-0 w-full h-0.5 ${
          isDarkBg ? "bg-red-400" : "bg-red-600"
        } origin-left`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  </motion.li>
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkBg, setIsDarkBg] = useState(true);
  return (
    <ThemeContext.Provider value={{ isDarkBg, setIsDarkBg }}>
      {children}
    </ThemeContext.Provider>
  );
};

const NavMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkBg, setIsDarkBg } = useContext(ThemeContext);
  const pathname = usePathname();

  useEffect(() => {
    setIsDarkBg(pathname === "/");
    setIsMenuOpen(false); // Close menu on route change
  }, [pathname, setIsDarkBg]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/vehicles", label: "Vehicles" },
    { href: "/machinery", label: "Machinery" },
    { href: "/contact", label: "Contact" },
  ];

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg py-2"
          : isDarkBg
          ? "bg-transparent py-4"
          : "bg-white py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter"
          onClick={handleNavItemClick}
        >
          <span className="text-red-600">LIYO</span>{" "}
          <span
            className={scrolled || !isDarkBg ? "text-gray-800" : "text-white"}
          >
            Trading
          </span>
        </Link>
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                isDarkBg={isDarkBg && !scrolled}
                isActive={pathname === item.href}
                onClick={handleNavItemClick}
              >
                {item.label}
              </NavItem>
            ))}
          </ul>
        </div>
        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-red-600" />
          ) : (
            <Menu
              className={`h-6 w-6 ${
                scrolled || !isDarkBg ? "text-gray-800" : "text-white"
              }`}
            />
          )}
        </Button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 overflow-hidden bg-white"
          >
            <ul className="flex flex-col space-y-4 px-6 py-4">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  isDarkBg={false}
                  isActive={pathname === item.href}
                  onClick={handleNavItemClick}
                >
                  {item.label}
                </NavItem>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavMenu;
