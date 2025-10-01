import React, { useState } from "react";
import { Menu, X, Wrench } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900 text-white z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wrench className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-bold">ToolkitHub</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-emerald-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-emerald-400 transition">
              About
            </a>
            <a href="#tools" className="hover:text-emerald-400 transition">
              Tools
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition">
              Contact
            </a>
            <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-semibold transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#home" className="block hover:text-emerald-400 transition">
              Home
            </a>
            <a
              href="#about"
              className="block hover:text-emerald-400 transition"
            >
              About
            </a>
            <a
              href="#tools"
              className="block hover:text-emerald-400 transition"
            >
              Tools
            </a>
            <a
              href="#contact"
              className="block hover:text-emerald-400 transition"
            >
              Contact
            </a>
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-semibold transition">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
