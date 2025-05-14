"use client";
import { Fragment, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Logo {
  src: string;
  alt: string;
  height: string;
  width?: string;
  className?: string;
}

const LogosSection = () => {
  const [logos] = useState<(Logo | Logo[])[]>([
    {
      src: "/logos/skillonline.svg",
      alt: "SkillOnline Logo",
      height: "20px",
    },
    [
      {
        src: "/logos/accredia.svg",
        alt: "Accredia Logo",
        height: "100%",
      },
      {
        src: "/logos/intertek.svg",
        alt: "Intertek Logo",
        height: "100%",
      },
    ],
    {
      src: "/logos/cirps.svg",
      alt: "CIRPS Logos",
      height: "100%",
    },
    {
      src: "/logos/ibi.jpg",
      alt: "IBI Logo",
      height: "60px",
    },
    // [
    //   {
    //     src: "/logos/enugu-state.png",
    //     alt: "Enugu State Government Logo",
    //     height: "100%",
    //   },
    //   {
    //     src: "/logos/esthub.svg",
    //     alt: "Enugu State Tech Hub Logo",
    //     height: "100%",
    //   },
    // ],
  ]);

  return (
    <section className="logos revert p-8 mx-auto container">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ amount: 1, once: true, margin: "-60px 0px" }}
        className="logos-wrapper flex flex-wrap gap-4 items-center justify-center md:justify-between"
      >
        {logos.map((item) => {
          return (
            <Fragment key={Array.isArray(item) ? item[0].src : item.src}>
              {Array.isArray(item) ? (
                <div className="flex gap-2">
                  {item.map((logo) => (
                    <MovingImage key={logo.src} {...logo} />
                  ))}
                </div>
              ) : (
                <MovingImage key={item.src} {...item} />
              )}
            </Fragment>
          );
        })}
      </motion.div>
    </section>
  );
};

const MovingImage: React.FC<Logo> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <motion.img
      variants={{
        initial: { y: 60, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
      }}
      transition={{
        duration: 0.4,
      }}
      src={src}
      alt={alt}
      style={{
        width,
        height,
      }}
      className={cn("logo max-h-12", className)}
    />
  );
};
export default LogosSection;
