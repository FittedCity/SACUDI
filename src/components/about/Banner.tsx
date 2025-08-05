import { motion } from "framer-motion";
import Button from "../ui/Button";
import ArrowIcon from "../../svgs/ArrowIcon";

const Banner = () => {
  // Type-safe animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
        ease: "easeOut" as const
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <>
      <motion.div 
        className="w-full pt-16 sm:pt-32 px-4 sm:px-10 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          {/* Heading Section */}
          <motion.div 
            className="w-full lg:w-1/2 flex items-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h1 className="font-semibold text-[24px] sm:text-[38px] md:text-[48px] lg:text-[68px] leading-snug lg:leading-[76px] tracking-tight w-[636px]">
              Building Tomorrow&apos;s Cities Together
            </h1>
          </motion.div>

          {/* Button + Paragraph */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col items-start lg:items-end gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={buttonVariants}
          >
            <Button
              text="Create Investor Account"
              textColor="#007F8E"
              backgroundColor="transparent"
              icon={<ArrowIcon />}
              px="px-4"
              py="py-0"
              className="mt-4"
            />
            <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed lg:leading-[35px] max-w-[558px]">
              Nigeria&apos;s cities are growing faster than ever. By 2050, our
              urban population will double. Yet millions still struggle without
              a safe home, reliable energy, or even clean water.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Banner Image */}
      <motion.img
        src="/assets/about/banner.jpg"
        className="w-full h-[250px] sm:h-[400px] lg:h-[671px] rounded-[8px] my-10 sm:my-16 lg:my-24 object-cover"
        alt="City banner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariants}
      />
    </>
  );
};

export default Banner;