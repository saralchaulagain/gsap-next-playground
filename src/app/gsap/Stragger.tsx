"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Stragger = () => {
  const nav = [
    { id: 1, name: "Home" },
    { id: 2, name: "About-us" },
    { id: 3, name: "Contact" },
    { id: 4, name: "Services" },
    { id: 5, name: "Our Projects" },
  ];
  const myName = [
    { id: 1, name: "S", color: "red" },
    { id: 2, name: "A", color: "yellow" },
    { id: 3, name: "R", color: "green" },
    { id: 4, name: "A", color: "blue" },
    { id: 5, name: "L", color: "purple" },
  ];
  useGSAP(() => {
    gsap.from(".nav-item", {
      x: -50, // start 50px left
      opacity: 0, // invisible at start
      duration: 0.6, // animation time per item
      stagger: 0.2, // delay between items
      ease: "power3.out",
      onComplete: () => console.log("Letter animation completed"),
    });
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      ".letter-animation",
      {
        x: 300, // start 300px right
        opacity: 0, // invisible at start
      },
      {
        x: 150, // end at 150px right
        opacity: 1,
        duration: 0.6, // animation time per item
        stagger: 0.2, // delay between items
        ease: "power3.out",
        onComplete: () => console.log("Nav animated successfully"),
        yoyo: true,
        repeat: 2,
      }
    );
  }, []);
  useGSAP(() => {
    gsap.to(".letter", {
      x: 100,
      opacity: 1,
      // duration: 0.6,
      stagger: {
        each: 1,
        // from: 2,
        yoyo: true,
        onComplete: function (target: Element) {
          console.log((target as HTMLElement).textContent);
        },
      },
    });
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      ".sqIntoRollingBall",
      {
        x: 0,
        y: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 450,
        y: -40,
        rotation: 360,
        duration: 0.5,
        borderRadius: "100%",
        yoyo: true,
        repeat: -1, // Add repeat for yoyo to work
      }
    );
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      ".sqIntoRollingBalls",
      {
        x: 900,
        y: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 450,
        y: -40,
        rotation: 360,
        duration: 0.5,
        borderRadius: "100%",
        yoyo: true,
        repeat: -1, // Add repeat for yoyo to work
      }
    );
  }, []);
  return (
    <div className="flex justify-start items-center gap-8 w-full">
      <div className="w-fit h-screen bg-gray-700 text-white p-4 flex flex-col items-center gap-2">
        {nav.map((d) => (
          <div className="nav-item" key={d.id}>
            {d.name}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col">
        <div className="w-screem flex  bg-gray-700">
          <div className="h-fit text-white p-4 flex flex-col items-center gap-2">
            {myName.map((d) => (
              <div
                className="letter text-2xl font-bold"
                style={{ color: d.color }}
                key={d.id}
              >
                {d.name}
              </div>
            ))}
          </div>
          <div className=" h-fit bg-gray-700 text-white p-4 flex flex-col items-center gap-2">
            {myName.map((d) => (
              <div
                className="letter-animation text-2xl font-bold"
                style={{ color: d.color }}
                key={d.id}
              >
                {d.name}
              </div>
            ))}
          </div>
        </div>
        <div className="sqIntoRollingBall bg-amber-950 size-20 flex items-center justify-center text-white font-bold  text-3xl">
          Roll
        </div>
        <div className="sqIntoRollingBalls bg-amber-950 size-20 flex items-center justify-center text-white font-bold  text-3xl">
          Roll
        </div>
      </div>
    </div>
  );
};

export default Stragger;
