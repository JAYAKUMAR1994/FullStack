import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useEffect, useRef } from "react";

function LandingPage() {
  let Header2ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const headeranimation1 = gsap.fromTo(
      [Header2ref.current],
      { y: 100, opacity: 0, duration: 1 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
      }
    );
    return () => {
      headeranimation1.kill();
    };
  }, []);
  return (
    <div
      className={`w-full h-[100vh] grid grid-cols-1 justify-center gap-16  bg-[#fffce1]/60 backdrop-blur-lg`}
    >
      <div className="container mx-auto">
        <h1
          ref={Header2ref}
          className={` capitalize text-[3rem] sm:text-[6rem]  md:text-[10rem] lg:text-[13rem] leading-tight text-center tracking-wider  origin-top  bg-gradient-to-br from-[#F25287] to-[#2B3499] bg-clip-text text-transparent`}
        >
          Full-Stack Developer 
        </h1>
        <p className="text-center font-semibold text-lg tracking-wider text-slate-700">
          I design and code beautifully simple things, and I love what I do.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
