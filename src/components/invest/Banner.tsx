import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "../ui/Button";
// import ArrowIcon from "../../svgs/ArrowIcon";

const Banner = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className="h-fit w-full bg-[#007F8E] pt-16 sm:pt-20 px-4 sm:px-6 md:px-8 lg:px-10 pb-10 md:pb-16"
      data-banner
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
        <motion.div 
          className="max-w-full lg:max-w-[600px] flex flex-col gap-4 sm:gap-6 md:gap-8"
          variants={container}
        >
          <motion.div 
            variants={item}
            className="bg-[#FFFFFFB5] px-3 py-2 rounded-[6px] w-fit"
          >
            <h4 className="font-normal text-sm sm:text-[14px] leading-[20px]">
              Invest! 20% returns on{" "}
              <span className="font-medium">Edustay</span>
            </h4>
          </motion.div>

          <motion.h1 
            variants={item}
            className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.1] sm:leading-[76px] tracking-tighter text-white max-w-full lg:max-w-[536px]"
          >
            Invest in Nigeria&apos;s Transformation
          </motion.h1>

          <motion.p 
            variants={item}
            className="text-white font-normal text-base sm:text-lg md:text-[20px] leading-relaxed sm:leading-[35px]"
          >
            We carefully vet each project for financial performance, social
            value, and environmental responsibility, so you can invest with
            confidence while making real change.
          </motion.p>

          <motion.div 
            variants={item}
            className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            <Button
              text="Start Investing Now"
              textColor="#007F8E"
              backgroundColor="#ffffff"
              borderColor="#ffffff"
              // icon={<ArrowIcon />}
              px="px-[25px]"
              py="py-[15px]"
              className="hover:bg-[#007F8E] hover:text-white transition-colors"
            />
            <Button
              text="Explore our Projects"
              textColor="#ffffff"
              borderColor="#ffffff"
              px="px-[25px]"
              py="py-[15px]"
              className="hover:bg-white hover:text-[#007F8E] transition-colors"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: { 
              x: 0, 
              opacity: 1,
              transition: {
                type: "spring" as const,
                stiffness: 60,
                delay: 0.4
              }
            }
          }}
          className="hidden lg:block max-w-full lg:max-w-[633px] w-full"
        >
          <img 
            src="/assets/invest/invest-banner.png" 
            className="w-full h-auto object-contain" 
            alt="Investment opportunities" 
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;