import { useScroll, useSpring, motion } from "framer-motion";
import React, { useEffect } from "react";
import "./progress.css";

export interface ProgressBarProps {
  containerRef: any; //SYD TODO
}

export const ProgressBar = ({ containerRef }: ProgressBarProps) => {
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    console.log({ scrollYProgress });
  });
  return <motion.div className="progress" style={{ scaleX }} />;
};
