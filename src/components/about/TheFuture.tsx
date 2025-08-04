import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "../ui/Button";

const TheFuture = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const containerInView = useInView(containerRef, { amount: 0.2, once: true });
  const imageInView = useInView(imageRef, { amount: 0.2, once: true });
  const textInView = useInView(textRef, { amount: 0.2, once: true });

  const containerControls = useAnimation();
  const imageControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (containerInView) containerControls.start("visible");
    if (imageInView) imageControls.start("visible");
    if (textInView) textControls.start("visible");
  }, [containerInView, imageInView, textInView]);

  const fadeSlideUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }, // easeInOut
    },
  };

  const slideLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const slideRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="w-full pb-20 px-6 sm:px-10 lg:px-32"
      initial="hidden"
      animate={containerControls}
      variants={fadeSlideUp}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Text Section */}
        <motion.div
          ref={textRef}
          className="flex flex-col items-start gap-6 max-w-full lg:max-w-[693px] text-left"
          initial="hidden"
          animate={textControls}
          variants={slideLeft}
        >
          <h1 className="font-medium text-[32px] sm:text-[40px] lg:text-[55px] leading-tight lg:leading-[70px] tracking-tight">
            Let&apos;s Build the <span className="text-[#007F8E]">Future</span>
          </h1>
          <div className="flex flex-col items-start gap-4">
            <p className="font-medium text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[34px]">
              SACUDI isn&apos;t just an investment platform—it&apos;s a movement
              to build cities where no one is left behind. By investing with us,
              you grow your wealth while leaving a legacy of impact.
            </p>
            <p className="font-semibold text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[30px] text-[#007F8E]">
              Together, we can make Nigeria&apos;s cities stronger, fairer, and
              more sustainable one investment at a time.
            </p>
          </div>
          <Button
            text="Join SACUDI"
            textColor="#007F8E"
            borderColor="#007F8E"
            px="px-6"
            py="py-2"
            className="mt-2"
          />
        </motion.div>

        {/* Right Image Section */}
        <motion.img
          ref={imageRef}
          src="/assets/about/thefuture.png"
          alt="The future"
          className="w-[80%] max-w-[375px] lg:w-[375px] object-contain"
          initial="hidden"
          animate={imageControls}
          variants={slideRight}
        />
      </div>
    </motion.div>
  );
};

export default TheFuture;
