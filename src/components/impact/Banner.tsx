import Button from "../ui/Button";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import ArrowIcon from "../../svgs/ArrowIcon";

const Banner = () => {
  const [, setIsHovered] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <div className="w-full overflow-hidden text-white pt-16 sm:pt-20">
      <motion.div
        className="bg-[#007F8E] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-semibold text-4xl sm:text-5xl md:text-[68px] leading-[1.1] tracking-tight"
            variants={itemVariants}
          >
            Real Impact, Measurable Returns
          </motion.h1>

          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            variants={itemVariants}
          >
            <p className="text-lg sm:text-xl max-w-[689px] leading-relaxed">
              Every naira you invest is building a better Nigeria. See how your capital makes a difference.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Button
                text="Learn More"
                textColor="#ffffff"
                backgroundColor="transparent"
                icon={<ArrowIcon />}
                px="px-4"
                py="py-0"
                className="mt-2 md:mt-0 hover:underline"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.img
        src="/assets/impact/impact-banner.jpg"
        className="w-full h-auto object-cover"
        alt="Impact Banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </div>
  );
};

export default Banner;
