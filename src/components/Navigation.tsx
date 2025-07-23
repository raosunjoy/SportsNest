"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className="bg-purple-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/sportsnest-logo.png"
              alt="SportsNest Logo"
              width={64}
              height={64}
              className="rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-green-400 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-700">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-green-400 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;