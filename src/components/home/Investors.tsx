import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import ArrowIcon from "../../svgs/ArrowIcon";

const Investors = () => {
  const mainRef = useRef(null);
  const mainControls = useAnimation();
  const isMainInView = useInView(mainRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isMainInView) {
      mainControls.start("visible");
    }
  }, [isMainInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const investorTypes = [
    {
      image: "/assets/home/chart.png",
      label: "Nigerians (Home and abroad)",
      bg: "bg-[#3DABC6]",
      border: "border border-[#007F8E]",
    },
    {
      image: "/assets/home/currency.png",
      label: "Working professionals",
      bg: "bg-white shadow-lg sm:shadow-xl",
    },
    {
      image: "/assets/home/currency.png",
      label: "Institutional Co-investors",
      bg: "bg-white shadow-lg sm:shadow-xl",
    },
    {
      image: "/assets/home/blockchain.png",
      label: "ESG and impact-driven funds",
      bg: "bg-white shadow-lg sm:shadow-xl",
    },
  ];

  return (
    <motion.div
      ref={mainRef}
      initial="hidden"
      animate={mainControls}
      variants={containerVariants}
      className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 md:gap-12">
          {/* Left Section */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-xl lg:max-w-md xl:max-w-xl"
          >
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
              <motion.h1
                variants={itemVariants}
                className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight"
              >
                Who Can Invest?
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="font-medium text-base sm:text-lg md:text-xl leading-relaxed"
              >
                When you invest with SACUDi, you're putting your money to work
                for Nigeria's future.
              </motion.p>
            </div>
            <motion.div variants={itemVariants}>
              <Button
                text="Create Investor Account"
                textColor="#007F8E"
                borderColor="#007F8E"
                backgroundColor="transparent"
                icon={<ArrowIcon />}
                px="px-5"
                py="py-1"
                className="text-sm sm:text-base md:text-lg"
              />
            </motion.div>
          </motion.div>

          {/* Right Section (Animated Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 w-full max-w-2xl">
            {investorTypes.map(({ image, label, bg, border }, i) => {
              const cardRef = useRef(null);
              const cardControls = useAnimation();
              const cardInView = useInView(cardRef, { once: true, amount: 0.4 });

              useEffect(() => {
                if (cardInView) {
                  cardControls.start("visible");
                }
              }, [cardInView, cardControls]);

              return (
                <motion.div
                  ref={cardRef}
                  key={i}
                  initial="hidden"
                  animate={cardControls}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className={`w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] rounded-xl p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center gap-3 ${bg} ${
                    border || ""
                  }`}
                >
                  <motion.img
                    src={image}
                    className="w-16 sm:w-20 md:w-24 lg:w-28"
                    alt={label}
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.h6
                    className={`text-center text-xs sm:text-sm md:text-base font-normal leading-snug ${
                      i === 0 ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {label}
                  </motion.h6>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Investors;
