"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import ImpactScene from "./ImpactScene";
import ScrollDown from "./ScrollDown";

export default function Hero() {
  const asteroid = useAnimation();
  const earth = useAnimation();

  const approachDuration = 1.1;
  const impactShakeDuration = 0.6;
  const destroyedHold = 0.9;
  const pauseBetween = 0.6;

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const [destroyed, setDestroyed] = React.useState(false);

useEffect(() => {
  let mounted = true;
  
  async function loop() {
    while (mounted) {
      try {
        // Position asteroid at starting position
        if (!mounted) break;
        await asteroid.start({
          x: 140,
          y: -140,
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { duration: 0 },
        });

        // Wait before approach
        if (!mounted) break;
        await new Promise((r) => {
          const timeout = setTimeout(r, 220);
          return () => clearTimeout(timeout);
        });

        // Asteroid approach animation
        if (!mounted) break;
        await asteroid.start({
          x: 0,
          y: 0,
          rotate: 720,
          transition: { duration: approachDuration, ease: "linear" },
        });

        // Impact happened
        if (!mounted) break;
        setDestroyed(true);

        // Earth shake animation
        if (!mounted) break;
        await earth.start({
          scale: [1, 1.08, 0.98, 1.02, 1],
          x: [0, 6, -6, 3, 0],
          y: [0, -5, 5, -2, 0],
          transition: { duration: impactShakeDuration, ease: "easeInOut" },
        });

        // Asteroid explosion animation
        if (!mounted) break;
        await asteroid.start({
          opacity: 0,
          scale: 1.8,
          transition: { duration: 0.8, ease: "easeOut" },
        });

        // Hold on destroyed state
        if (!mounted) break;
        await new Promise((r) => {
          const timeout = setTimeout(r, (impactShakeDuration + destroyedHold) * 1000);
          return () => clearTimeout(timeout);
        });

        // Reset destroyed state
        if (!mounted) break;
        setDestroyed(false);

        // Earth reset animation
        if (!mounted) break;
        await earth.start({
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        });

        // Pause before next loop
        if (!mounted) break;
        await new Promise((r) => {
          const timeout = setTimeout(r, pauseBetween * 1000);
          return () => clearTimeout(timeout);
        });
      } catch (error) {
        // If we get an error (like component unmounted), break the loop
        console.log("Animation loop interrupted:", error);
        break;
      }
    }
  }

  // Start the animation loop
  loop();

  // Cleanup function
  return () => {
    mounted = false;
    asteroid.stop();
    earth.stop();
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        {/* star bg (layout) */}
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left */}
        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
            <span className="block">Witness The</span>
            <span className="text-space-teal text-outline">
              Asteroid Impact
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            Explore a 3D visualization of asteroid impacts on Earth. Discover
            the dynamic consequences of cosmic collisions through our
            interactive simulation.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/visual"
              className="inline-block pr-8 py-3 rounded-full bg-space-purple hover:bg-space-pink transition-all duration-300 font-medium text-white"
            >
              Launch 3D Experience
            </Link>
            <a
              href="#info"
              className="inline-block px-8 py-3 rounded-full bg-transparent hover:bg-space-teal/10 border border-space-teal transition-all duration-300 font-medium text-space-teal"
            >
              Learn More
            </a>

            <ScrollDown />
          </div>
        </div>

        {/* Right visual */}
        <div className="md:py-0  md:w-1/2 relative flex justify-start ">
          <div className="relative w-80 h-[390px] md:w-full md:h-full md:my-auto">
            {/* Earth: rotateY for axial rotation (DOM-based) */}

            <ImpactScene />
            <motion.div
              className="absolute top-1/2  left-1/2 w-[380px] h-[380px] border border-space-teal/30 rounded-full -translate-x-1/2 -translate-y-1/3  md:-translate-x-1/2 md:-translate-y-1/2 uniform-glow"
              // @ts-expect-error blah
              variants={orbitVariants}
              animate="animate"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
