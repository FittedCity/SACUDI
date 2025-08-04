import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";

const ArrowIcon = ({ isHovered }: { isHovered: boolean }) => (
  <motion.svg
    width="68"
    height="68"
    viewBox="0 0 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ rotate: isHovered ? 45 : 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <path d="..." fill="#007F8E" />
    <path d="..." fill="#007F8E" />
    <path d="..." fill="#007F8E" />
  </motion.svg>
);

const ProjectCard = ({ img, alt }: { img: string; alt: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      className="overflow-hidden z-20"
    >
      <motion.img
        src={img}
        alt={alt}
        className="w-full h-auto max-w-[250px] mx-auto"
      />
    </motion.div>
  );
};

const Social = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants: Variants = {
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

  const projects = [
    { img: "/assets/impact/water.png", alt: "Water project" },
    { img: "/assets/impact/energy.png", alt: "Energy project" },
    { img: "/assets/impact/sustainable.png", alt: "Sustainable project" },
    { img: "/assets/impact/climate.png", alt: "Climate project" },
  ];

  return (
    <motion.div
      ref={ref}
      className="w-full px-4 sm:px-8 md:px-16 lg:px-24 pb-14 relative sm:pt-0 pt-[19rem]"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-24 max-w-[1800px] mx-auto">
        {/* Text Section */}
        <motion.div
          className="max-w-full lg:max-w-[653px] flex flex-col gap-5 md:gap-6"
          variants={containerVariants}
        >
          <motion.h1
            className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-[1.2] md:leading-[70px] tracking-tight"
            variants={textVariants}
          >
            Social and Environmental Impact
          </motion.h1>

          <motion.p
            className="font-medium text-base md:text-lg lg:text-[20px] leading-[1.6] md:leading-[34px]"
            variants={textVariants}
          >
            Every investment is guided by globally and nationally recognized
            frameworks to maximize positive impact.
          </motion.p>

          <motion.div
            variants={textVariants}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Button
              text="Learn More"
              textColor="#007F8E"
              borderColor="#007F8E"
              icon={<ArrowIcon isHovered={isHovered} />}
              px="px-4"
              py="py-0"
            />
          </motion.div>
        </motion.div>

        {/* Cards Section */}
        <motion.div className="w-full" variants={containerVariants}>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} img={project.img} alt={project.alt} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Social;
