import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform">
          JAISEN<span className="text-red-500">.</span>
        </Link>
        <div className="flex gap-8 font-bold">
          <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
          <Link to="/portfolio" className="hover:text-blue-500 transition-colors">Portfolio</Link>
          <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
