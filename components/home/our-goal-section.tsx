"use client";
import { motion, MotionConfig } from "motion/react";

const textVariants = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
};

const OurGoalSection = () => {
  return (
    <MotionConfig
      transition={{
        duration: 0.4,
      }}
    >
      <section id="goals" className="our-goal bg-neutral-50 overflow-hidden">
        <div className="relative container mx-auto flex flex-col justify-center">
          <motion.div
            initial={{ x: -75, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.3, once: true }}
            className="img-wrapper absolute"
          >
            <img
              src="/images/our-goal.png"
              alt="A group of people interacting while working on a laptop"
              className="rounded-xl object-cover"
            />
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={{
              initial: { x: 75, opacity: 0 },
              whileInView: { x: 0, opacity: 1 },
            }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              staggerChildren: 0.2,
              when: "beforeChildren",
            }}
            viewport={{ amount: 0.3, once: true }}
            className="info w-8/9 h-auto rounded-xl ml-auto bg-neutral-50 p-8 sm:text-justify text-primary shadow-lg shadow-primary z-10"
          >
            <motion.h2 variants={textVariants} className="font-bold text-3xl">
              Our Goal
            </motion.h2>
            <motion.p variants={textVariants}>
              We seek to create a robust framework for delivering tuition-free
              Tech Professional Certification programs, specifically in the
              Emerging Technology space.
            </motion.p>
            <motion.p variants={textVariants}>
              The learning platform will be powered by Egovmetrics, I.S.F.O.A
              Telematic University Switzerland, International Bio-Research
              Institute(IBI) and Skillonline, Four of the foremost partners of
              this initiative. Participants will be awarded Globally accredited
              Diploma certifications from I.S.F.O.A Telematic University,
              Switzerland .
            </motion.p>
            <motion.p variants={textVariants}>
              We aim to build an ecosystem of an additional 500,000
              beneficiaries from Nigeria and other West African Countries across
              ten(10) widely sought emerging technology skills, deepening the
              employability and innovation index gap currently affecting the job
              versus skill market in Europe, Middle East and Africa.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default OurGoalSection;
