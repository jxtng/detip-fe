import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const MotionCheck: React.FC<React.ComponentProps<typeof motion.svg>> = ({
  className,
  ...props
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const control = animate(".check-path", { opacity: 1, pathLength: 1 });

    return () => control.stop();
  });

  return (
    <motion.svg
      ref={scope}
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 48 48"
      className={cn(className)}
      {...props}
    >
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
        d="M5 25.182L16.875 37L43 11"
        initial={{ opacity: 0, pathLength: 0 }}
        className="check-path"
      ></motion.path>
    </motion.svg>
  );
};

export const MotionX: React.FC<React.ComponentProps<typeof motion.svg>> = ({
  className,
  ...props
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const control = animate(
      ".check-path",
      { opacity: 1, pathLength: 1 },
      { delay: stagger(0.2) }
    );

    return () => control.stop();
  });

  return (
    <motion.svg
      ref={scope}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={cn(className)}
      {...props}
    >
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        d="M6 18L18 6"
        initial={{ opacity: 0, pathLength: 0 }}
        className="check-path"
      ></motion.path>
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        d="M6 6l12 12"
        initial={{ opacity: 0, pathLength: 0 }}
        className="check-path"
      ></motion.path>
    </motion.svg>
  );
};
