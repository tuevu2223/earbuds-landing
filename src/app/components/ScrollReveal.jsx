"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getVariants = () => {
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
      case "none":
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default:
        return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
    }
  };

  // FAIL-SAFE HYDRATION: Return static UI on server and first client render
  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
      transition={{ duration: duration, delay: delay, ease: "easeOut" }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
}
