"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

export default function Hero() {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const videoRef = useRef();

  useGSAP(() => {
    let heroTitle = new SplitText(".title", { type: "chars" });
    let content = new SplitText(".content", { type: "lines" });
    let content2 = new SplitText(".content2", { type: "words" });
    gsap.from(heroTitle.chars, {
      yPercent: 100,
      duration: 1.4,
      stagger: 0.05,
      ease: "expo.out",
    });
    gsap.from(content.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.4,
      stagger: 0.05,
      ease: "expo.out",
      delay: 1,
    });
    gsap.from(content2.words, {
      xPercent: 100,
      opacity: 0,
      duration: 1.4,
      stagger: 0.05,
      ease: "expo.out",
      delay: 1,
    });

    gsap.from(".left-flower", {
      yPercent: 100,
      opacity: 0,
      duration: 1.4,
      stagger: 0.05,
      ease: "expo.out",
      delay: 1,
    });

    let heroScroll = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        duration: 2,
      },
    });

    heroScroll.to(".left-flower", { y: -400 }, 0);

    let content3 = new SplitText(".content3", { type: "chars" });
    let content4 = new SplitText(".content4", { type: "lines" });

    let content3Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-container4",
        start: "-200% 20%",
        end: "+=500",
        scrub: 4,
        pin: true,
      },
    });

    content3Timeline.from(content3.chars, {
      opacity: 0,
      stagger: 0.06,
      duration: 3,
      rotate: -30,
    });
    content3Timeline.from(content4.lines, {
      opacity: 0,
      stagger: 0.06,
      duration: 3,
      yPercent: -300,
    });

    const video = videoRef.current;
    video.currentTime = 0;

    const setupScrollTrigger = () => {
      const duration = video.duration;

      let videoTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: video,
          start: "top top",
          end: `+=700`,
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const targetTime = self.progress * duration;
            video.currentTime = targetTime;
          },
        },
      });
    };

    if (video.readyState >= 1) {
      setupScrollTrigger();
    } else {
      video.addEventListener("loadedmetadata", setupScrollTrigger);
    }
  }, []);

  return (
    <section className="relative hero h-screen flex justify-center items-center w-full ">
      <div className="noisy z-10 h-full"></div>
      <div className="text-container flex justify-center md:top-0 top-40 text-nowrap h-full absolute z-10">
        <h1 className="text-[5rem] md:text-[12rem] font-modern-negra text-neutral-100 title">
          MARGRET
        </h1>
      </div>

      <div className="md:block hidden pic-container left-flower absolute z-10 -left-34 top-72 h-[40rem] w-[30rem]">
        <img
          src="/images/p-2.png"
          className="h-full w-full object-cover"
          alt="pic"
        />
      </div>

      <div className=" hidden text-container2 p-5 md:flex flex-col gap-3 h-full left-0 top-48 absolute z-10 text-left">
        <p className="text-neutral-300 text-sm">Bold. Bright. Beautiful.</p>
        <p className="text-neutral-100 text-4xl content font-modern-negra">
          Unleash the Essence <br /> of Summer Elegance
        </p>
      </div>

      <div className="hidden text-container3 md:flex justify-end p-5 items-center h-full right-0 top-48 absolute z-10">
        <p className="w-1/5 text-neutral-200 text-lg font-serif content2">
          Discover a season defined by confidence and clarity. MARGRET captures
          the vibrant spirit of summer with every detail — from refreshing tones
          to bold textures. Let your style bloom in the warmth of pure
          expression.
        </p>
      </div>

      <video
        ref={videoRef}
        src="/video/final.mp4"
        muted
        playsInline
        preload="metadata"
        className="absolute object-cover h-full w-screen"
      />

      <div className="text-container4 flex flex-col md:w-2/5 w-full absolute z-10 p-5 left-0 top-[48rem]  md:top-[40rem]">
        <p className="text-neutral-100  text-4xl md:text-6xl font-modern-negra leading-snug content3">
          Embrace the Glow
        </p>
        <p className="text-neutral-300 text-sm max-w-sm mt-2 content4">
          Dive into a collection where every detail is inspired by nature's
          purity and your untamed spirit. This summer, let your beauty speak —
          effortless, bold, and undeniably you.
        </p>
      </div>
    </section>
  );
}
