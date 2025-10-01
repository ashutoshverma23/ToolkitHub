import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-slate-900 min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
