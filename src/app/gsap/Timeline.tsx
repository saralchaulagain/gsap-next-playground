"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Timeline() {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });
  useGSAP(() => {
    timeline.to(".box1", {
      duration: 1,
      x: 100,
      rotation: 360,
      ease: "back.inOut",
    });
    timeline.to(".box1", {
      duration: 1,
      x: 200,
      scale: 1,
      borderRadius: "8px",
      rotation: "+=360",
      ease: "back.inOut",
    });
    timeline.to(".box1", {
      duration: 1,
      y: 200,
      borderRadius: "8px",
      rotation: "+=360",
      ease: "back.inOut",
    });
    timeline.to(".box2", {
      duration: 1,
      x: 100,
      rotation: 360,
      ease: "back.inOut",
    });
    timeline.to(
      ".box3",
      {
        x: 50,
        duration: 2,
        rotation: 360,
        ease: "spin",
      },
      "+=1"
    );
  }, []);
  return (
    <div>
      <button
        className="bg-gray-500"
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
      >
        Play/Pause
      </button>
      <div className="box box1 bg-green-600 size-30"></div>
      <div className="box box2 bg-orange-600 size-30"></div>
      <div className="box box3 bg-purple-600 size-30"></div>
    </div>
  );
}
