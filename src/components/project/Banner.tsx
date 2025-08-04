import { motion, useAnimation, type Variants } from "framer-motion";
import { useEffect } from "react";
import Button from "../ui/Button";

const Banner = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const verificationItems = [
    "Financial sustainability",
    "Social return",
    "Environmental impact",
    "Legal clarity",
  ];

  return (
    <div className="w-full pt-12 sm:pt-16 md:pt-20">
      <div className="relative h-[600px] sm:h-[700px] md:h-[780px]">
        {/* Left Image */}
        <motion.div
          className="absolute inset-0 z-10 overflow-hidden"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.img
            src="/assets/projects/projects-banner.jpg"
            className="h-full w-full object-cover"
            alt="Investment projects banner"
            variants={imageVariants}
          />
        </motion.div>

        {/* Right Content */}
        <div className="w-full md:w-[45%] lg:w-[697px] h-full absolute right-0 top-0 z-30">
          <motion.div
            className="bg-[#007F8E] h-full px-4 sm:px-6 md:px-8 lg:px-10 text-white flex flex-col justify-center"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[550px] mx-auto flex flex-col gap-4 sm:gap-5 md:gap-6">
              {/* Tag */}
              <motion.div
                className="bg-[#FFFFFFB5] px-3 py-2 rounded-[6px] w-fit"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="font-normal text-xs sm:text-sm md:text-[14px] leading-[1.3] sm:leading-[20px] text-black">
                  Invest! 20% returns on{" "}
                  <span className="font-medium">Edustay</span>
                </h4>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[68px] leading-[1.1] sm:leading-[1.2] md:leading-[1.3] lg:leading-[76px] tracking-tight"
                variants={itemVariants}
              >
                Invest in the Nigeria You Believe In
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="font-thin text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.5] sm:leading-[1.6] md:leading-[35px]"
                variants={itemVariants}
              >
                Browse Our Investment-Ready Projects
              </motion.p>

              {/* Verification List */}
              <motion.div variants={itemVariants}>
                <motion.h4
                  className="font-medium text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.5] sm:leading-[1.6] md:leading-[35px] mb-2 sm:mb-3"
                  variants={itemVariants}
                >
                  Every project on SACUDI is carefully verified for:
                </motion.h4>

                <motion.ul
                  className="list-disc list-inside pl-4 space-y-2"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {verificationItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="font-normal text-sm sm:text-base md:text-[16px] leading-[1.4] sm:leading-[21px]"
                      variants={itemVariants}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  text="Submit a Project"
                  textColor="white"
                  borderColor="white"
                  className="mt-4 sm:mt-6"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
