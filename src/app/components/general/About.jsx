"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
export default function About() {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  let cursorRef = useRef();
  useGSAP(() => {
    let HorizontalText = new SplitText(".horizontal-text", { type: "chars" });
    let aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "30% top",
        end: () => "+=7000", // or a fixed pixel value like "+=3000"
        scrub: 4,
        pin: true,
        anticipatePin: 5,
        /** 
        markers: {
          startColor: "red",
          endColor: "white",
          fontSize: "50px",
          fontWeight: "bold",
        },
        */
      },
    });
    aboutTimeline.fromTo(
      ".about-women",
      {
        scale: 2,
        opacity: 0,
      },
      {
        rotate: 360,
        duration: 3,
        opacity: 0.5,
        scale: 1,
        ease: "none",
      }
    );
    // 💡 Like "Experience" scroll effect
    aboutTimeline.to(
      ".horizontal-text",
      {
        x: () => `-${window.innerWidth * 2}`,
        ease: "none",
        duration: 3,
      },
      0
    );
    // aboutTimeline.to(".horizontal-text", {
    //   stagger: 0.07,
    //   xPercent: -200,
    //   duration: 2,
    // });
    // aboutTimeline.to(
    //   ".about-women2",
    //   {
    //     y: 330,
    //   },
    //   0
    // );

    /**
    let aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "50% top",
        end: "+=600",
        scrub: 4,
        pin: true,
        markers: {
          startColor: "red",
          endColor: "white",
          fontSize: "50px",
          fontWeight: "bold",
        },
      },
    });
    aboutTimeline.to(".horizontal-text", {
      xPercent: -100,
      duration: 2,
    });
     */
  }, []);

  function customCursor(e) {
    console.log(e.clientX);
    let x = e.clientX;
    let y = e.clientY;
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.3,
      ease: "power2.out",
    });
  }
  return (
    <section
      className="h-[210vh]   flex justify-center items-center relative overflow-hidden"
      id="about"
      onMouseMove={customCursor}
    >
      <div
        className="cursor absolute bg-white  h-24 w-24 rounded-full"
        ref={cursorRef}
      ></div>
      <div className="noisy z-10 h-full"></div>

      <div className=" pic-container  about-women  absolute z-10 -left-34 top-[40rem] h-full  w-full">
        <img
          src="/images/p-4.png"
          className="h-full w-full object-contain"
          alt="pic"
        />
      </div>

      <h1 className="horizontal-text  text-pink-300 whitespace-nowrap w-max font-modern-negra text-[10rem]  md:text-[30rem]  fixed top-[49rem] z-20">
        I'M MARGRET
      </h1>
    </section>
  );
}
