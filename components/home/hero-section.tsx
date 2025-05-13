"use client";
import React, { Fragment, useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

const fadeBottom = {
  out: { y: 50, opacity: 0 },
  in: {
    y: 0,
    opacity: 1,
  },
};

const slideLeft = {
  out: { x: -50, opacity: 0 },
  in: { x: 0, opacity: 1 },
};

const scaleIn = {
  out: { scale: 0.3, opacity: 0 },
  in: { scale: 1, opacity: 1 },
};

const HeroSection = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const control = animate([
      [".backdrop", scaleIn.in],
      [".hero-img", scaleIn.in],
      [
        "h1.fade-bottom, h1.fade-bottom * ",
        fadeBottom.in,
        { delay: stagger(0.03) },
      ],
      ["p.fade-bottom", fadeBottom.in, { delay: stagger(0.1) }],
    ]);

    return () => control.stop();
  }, []);

  return (
    <section ref={scope} className={cn("hero revert p-8 md:px-24 relative")}>
      <div className="absolute hidden sm:block -top-1 left-4 size-[300px] md:bg-[url(/images/circuit-3.svg)] bg-no-repeat bg-contain" />
      <div className="container mx-auto flex max-md:flex-col justify-between md:items-center gap-4">
        <div className="info md:w-3/5 grow z-10">
          <motion.h1
            initial={fadeBottom.out}
            className={cn(
              "relative overflow-hidden font-numans font-extrabold text-4xl sm:text-5xl 2xl:text-6xl py-4 xl:mb-16",
              "fade-bottom",
              "flex gap-4 flex-wrap"
            )}
          >
            {"Deep Emerging Tech Incubator Program"
              .split(" ")
              .map((item, index) => (
                <motion.div
                  key={item + index}
                  className={cn(
                    "flex",
                    item.startsWith("*") && "text-secondary"
                  )}
                >
                  {item
                    .replaceAll("*", "")
                    .split("")
                    .map((letter, index) => (
                      <motion.span
                        key={letter + index}
                        initial={fadeBottom.out}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                </motion.div>
              ))}
          </motion.h1>

          <motion.p
            initial={fadeBottom.out}
            className="my-4 text-lg fade-bottom"
          >
            A transformative initiative Brought together by Internationally
            recognized bodies and universities to breach the gap in Deep
            learning technology skills.
          </motion.p>
        </div>
        <motion.div
          whileHover="hover"
          initial="initial"
          className="img relative w-1/2 mx-auto grow self-start"
          variants={{ hover: { scale: 1.05 } }}
        >
          <motion.div
            initial={{ ...scaleIn.out }}
            variants={{
              hover: {
                background:
                  "radial-gradient(50% 50% at 50% 50%, hsl(var(--primary) / 0.5))",
              },
            }}
            style={{
              ...scaleIn.out,
              position: "absolute",
              background:
                "radial-gradient(50% 50% at 50% 50%, hsl(var(--primary) / 0.5))",
              filter: "blur(100px)",
            }}
            className="backdrop w-full h-full"
          />
          <motion.img
            initial={scaleIn.out}
            src="/images/hero-image.png"
            alt="Image of an AI generated brain"
            className="hero-img relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
