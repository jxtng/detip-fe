"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import courses from "@/public/data/courses";

interface Course {
  name: string;
  description: string;
  src: string;
  alt: string;
  id: string;
}
const OurCoursesSection = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="whileInView"
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
      id="courses"
      className="section-escape-x"
    >
      <div className="containers mx-auto">
        <motion.h2
          variants={{ initial: { opacity: 0 }, whileInView: { opacity: 1 } }}
          className="text-center text-primary"
        >
          Our Courses
        </motion.h2>

        <div className="flex md:flex-wrap overflow-scroll justify-center *:shrink-0 gap-12">
          {courses.map((course, index) => (
            <CourseCard key={course.name + index} {...(course as Course)} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const CourseCard: React.FC<Course> = ({ name, description, src, alt, id }) => {
  return (
    <motion.div
      variants={{
        initial: { y: 100, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 0.3 }}
      className="card shadow-md p-4 rounded-xl text-sm bg-neutral-100 w-fit basis-2/5 flex max-md:flex-col gap-4"
    >
      <img
        src={src}
        alt={alt || `${name} image`}
        className="rounded-xl object-cover md:w-24"
      />
      <div className="grow flex flex-col">
        <div className="info">
          <h3 className="capitalize">{name}</h3>
          <p className="description ">{description}</p>
        </div>
        <div className="footer mt-auto">
          <motion.div
            initial="hide"
            whileHover="show"
            transition={{ duration: 0.5, repeat: Infinity }}
            className="w-fit"
          >
            <Link
              href={`/auth/register?course=${id}`}
              className="relative inline-flex items-center gap-0 border-current group"
            >
              Apply Now
              <ChevronRight className="size-5 transition-all" />
              <motion.div
                variants={{
                  hide: { scaleX: 0 },
                  show: { scaleX: 1, transition: { duration: 0.3 } },
                }}
                className="absolute top-full left-0 w-full h-px mt-0.5 bg-current"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurCoursesSection;
