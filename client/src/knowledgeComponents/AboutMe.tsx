import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import React, { useEffect, useRef } from "react";
import Arun from "../images/jai.jpeg";

function AboutMe() {
  // let bannerImage: any = Arun.src;
  let bannerImage: string = Arun;

  let ScrollanimationTrigger = useRef(null);
  let containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const title = gsap.fromTo(
      containerRef.current,
      {
        y: -210,
        scale: "1.2",
      },
      {
        y: 0,
        scale: 1,
        duration: 2,
        ease: "circ.out",
        scrollTrigger: {
          trigger: ScrollanimationTrigger.current,
          start: "top bottom",
          end: "bottom",
          scrub: true,
        },
      }
    );

    return () => {
      title.kill();
    };
  }, []);
  return (
    <div
      ref={ScrollanimationTrigger}
      className={`w-full h-[100vh]   sm:overflow-auto lg:overflow-visible flex flex-wrap justify-center items-center bg-[#fffce1]`}
    >
      <div
        ref={containerRef}
        className=" flex flex-col sm:flex-row justify-center items-center pt-5 border bg-black rounded-3xl relative z-0"
      >
        <div className="w-[400px] p-5 ">
          <img src={bannerImage} alt="bannerimage" className="object-contain rounded-full" />
        </div>
        <div className="w-1/2">
          <span className="text-lg bg-gradient-to-br from-[#FF6C22] to-[#2B3499] bg-clip-text text-transparent font-extrabold">
            About Me
          </span>
          <h1 className="text-[4rem] bg-gradient-to-br from-[#FF6C22] to-[#2B3499] bg-clip-text text-transparent font-extrabold">
            I'm JayaKumar.
          </h1>
          <p className="text-lg capitalize tracking-wider leading-[2rem] border-l border-l-slate-700 pl-5 text-white">
            I am an enthusiastic Frontend Developer with a strong penchant for
            creating elegant and responsive user interfaces. My journey in web
            development began ZettaStack, which has sharpened my skills and
            passion for creating exceptional web applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
