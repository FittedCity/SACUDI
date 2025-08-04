import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import ArrowIcon from "../../svgs/ArrowIcon";

const Solutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren" as const,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const solutions = [
    {
      image: "/assets/about/growth.png",
      label: "Verifying impactful urban projects",
      bg: "bg-[#3DABC6]",
      border: "border border-[#007F8E]",
    },
    {
      image: "/assets/about/money-bag.png",
      label: "Enabling co-investment and blended finance",
      bg: "bg-white shadow-xl",
    },
    {
      image: "/assets/about/secure.png",
      label: "Safe, secure digital investing",
      bg: "bg-white shadow-xl",
    },
    {
      image: "/assets/about/mortgage-loan.png",
      label: "Driving both ROI and measurable social impact",
      bg: "bg-white shadow-xl",
    },
  ];

  return (
    <motion.div
      className="w-full py-20 px-6 sm:px-10 lg:px-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Header */}
        <motion.div
          className="max-w-[693px] flex flex-col items-center justify-center text-center gap-5"
          variants={containerVariants}
        >
          <motion.h1
            className="font-medium text-[30px] sm:text-[40px] lg:text-[55px] leading-tight lg:leading-[70px] tracking-tight"
            variants={itemVariants}
          >
            Our Solutions
          </motion.h1>
          <motion.p
            className="font-medium text-base sm:text-lg md:text-xl leading-relaxed lg:leading-[34px]"
            variants={itemVariants}
          >
            At SACUDI, we connect developers with investors like you all on a
            secure, transparent, digital platform.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="pt-14 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 place-items-center">
            {solutions.map(({ image, label, bg, border }, i) => {
              const ref = useRef<HTMLDivElement>(null);
              const isInView = useInView(ref, { amount: 0.3, once: true });
              const controls = useAnimation();

              useEffect(() => {
                if (isInView) {
                  controls.start("visible");
                }
              }, [isInView, controls]);

              return (
                <motion.div
                  key={i}
                  ref={ref}
                  className={`w-full max-w-[250px] h-[260px] rounded-[12px] p-6 flex flex-col items-center justify-center gap-3 ${bg} ${
                    border || ""
                  }`}
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants}
                >
                  <img
                    src={image}
                    className="w-[80px] sm:w-[100px] md:w-[130px]"
                    alt={label}
                  />
                  <h6
                    className={`text-center text-sm sm:text-base font-normal leading-5 ${
                      i === 0 ? "text-white" : "text-black/90"
                    }`}
                  >
                    {label}
                  </h6>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Button */}
        <motion.div className="pt-14" variants={buttonVariants}>
          <Button
            text="Explore Opportunities"
            textColor="#007F8E"
            backgroundColor="transparent"
            icon={<ArrowIcon />}
            px="px-4"
            py="py-0"
            className="mt-4"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Solutions;
