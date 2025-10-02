import React from "react";
import { Wrench, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 bottom-0 w-full text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
          {/* Left side - Version badges and links */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="bg-emerald-600 text-white px-3 py-1 rounded text-xs font-semibold">
              v2.20.0 Latest LTS
            </span>
            <span className="bg-emerald-500 text-white px-3 py-1 rounded text-xs font-semibold">
              v4.9.0 Latest Release
            </span>
            <a href="#" className="hover:text-white transition">
              Trademark Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Code of Conduct
            </a>
            <a href="#" className="hover:text-white transition">
              Security Policy
            </a>
          </div>

          {/* Right side - Copyright and social icons */}
          <div className="flex items-center gap-4">
            <span>© ToolkitHub Foundation</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-white transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
