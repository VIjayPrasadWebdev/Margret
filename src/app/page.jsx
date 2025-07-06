import React from "react";
import Hero from "./components/general/Hero";
import Navbar from "./components/general/Navbar";
import About from "./components/general/About";
export default function Home() {
  return (
    <>
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <div className="h-screen bg-black"></div>
      </main>
    </>
  );
}
