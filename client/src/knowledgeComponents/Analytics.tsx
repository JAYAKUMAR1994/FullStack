import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Analytics({ items, index }: any) {
  let progressBar: any = useRef(null);
  // useEffect(() => {
  //   gsap.to(progressBar.current, {
  //     width: items.value,
  //     duration: 1,
  //     delay: 3,
  //     ease: "bounce.out",
  //   });
  // }, []);
  console.log(items)
  return (
    <div className=" w-full rounded-full h-2 bg-white/10">
      <div
        ref={progressBar}
        className=" bg-gradient-to-r from-[#FF6C22]/5 to-slate-500 w-0 h-full rounded-full"
      ></div>
    </div>
  );
}

export default Analytics;
