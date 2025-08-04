import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface ButtonProps {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  px?: string;
  py?: string;
  animationDuration?: number;
  whileHover?: {
    scale?: number;
    backgroundColor?: string;
    textColor?: string;
  };
  whileTap?: {
    scale?: number;
  };
}

const Button: React.FC<ButtonProps> = ({
  text,
  textColor = "#fff",
  backgroundColor = "transparent",
  borderColor,
  icon,
  onClick,
  className,
  px = "px-6",
  py = "py-3",
  animationDuration = 300,
  whileHover = { scale: 1.05, backgroundColor: undefined },
  whileTap = { scale: 0.98 },
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: whileHover.scale,
        backgroundColor: whileHover.backgroundColor,
        color: whileHover.textColor,
      }}
      whileTap={{
        scale: whileTap.scale,
      }}
      transition={{ duration: animationDuration / 1000, ease: "easeOut" }}
      onClick={onClick}
      className={cn(
        `inline-flex items-center gap-2 font-[600] text-sm sm:text-[18px] rounded-md transition-colors duration-300`,
        px,
        py,
        borderColor ? `border border-[${borderColor}]` : "border-none",
        className
      )}
      style={{
        color: textColor,
        backgroundColor,
        borderColor: borderColor || "transparent",
      }}
    >
      {text}
      {icon && <span className="flex items-center">{icon}</span>}
    </motion.button>
  );
};

export default Button;