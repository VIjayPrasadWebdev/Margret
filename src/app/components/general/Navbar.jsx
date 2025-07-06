"use client";
import React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Poppins as PoppinsFont } from "next/font/google";
import { Montserrat as MonteserratFont } from "next/font/google";
const poppins = PoppinsFont({
  weight: "400",
  subsets: ["latin"],
});

const monte = MonteserratFont({
  weight: "600",
  subsets: ["latin"],
});
export default function Navbar() {
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    gsap.from(".logo", {
      xPercent: -300,
      ease: "expo.out",
      duration: 2,
    });
    gsap.to(".logo", {
      rotate: 360,
      duration: 5,
      ease: "none", // ensures constant speed
      repeat: -1,
    });
    let links = new SplitText(".link", { type: "words" });
    gsap.from(links.words, {
      opacity: 0,
      yPercent: -300,
      stagger: 0.06,
      ease: "expo.out",
      duration: 2.5,
    });

    // let navTimeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "nav",
    //     start: "bottom top",
    //     scrub: 2,
    //   },
    // });

    // navTimeline.fromTo(
    //   "nav",
    //   { backgroundColor: "transparent" },
    //   {
    //     // backgroundColor: "#00000050",
    //     backgroundFilter: "blur(10px)",
    //     duration: 1,
    //     ease: "power1.inOut",
    //   }
    // );
  }, []);

  return (
    <nav className="flex mddd:mb-0 mb-4 md:flex-row flex-col z-20 absolute md:justify-between gap-2 md:gap-4 justify-center w-full p-6 items-center">
      <div className={`logo ${monte.className} text-2xl h-20 w-20`}>
        <img
          src="/images/logo.png"
          alt="pic"
          className="h-full w-full object-contain"
        />
      </div>
      <div
        className={`link-container flex items-center gap-2  text-lg font ${poppins.className}`}
      >
        <Link href="/" className="link">
          Home
        </Link>
        <Link href="/" className="link">
          About
        </Link>
        <Link href="/" className="link">
          Contact
        </Link>
      </div>
    </nav>
  );
}
