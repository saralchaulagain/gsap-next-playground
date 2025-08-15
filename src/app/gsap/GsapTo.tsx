"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  useGSAP(() => {
    gsap.to(".box", {
      x: 400,
      y: 200,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      scaleY: 2,
      duration: 2,
    });
  }, []);
  return (
    <div className="flex items-center justify-start min-h-screen overflow-hidden">
      <div className="box  bg-red-600 size-15 block">56</div>
    </div>
  );
};

export default GsapTo;
