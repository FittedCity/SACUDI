import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

interface ProjectCardProps {
  mainImage: string;
  sideImage: string;
  iconImage: string;
  category: string;
  title: string;
  description: string;
  isEven?: boolean;
  button: ReactNode;
}

export const ProjectCard = ({
  mainImage,
  sideImage,
  iconImage,
  category,
  title,
  description,
  isEven = false,
  button,
}: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 18,
        },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col lg:flex-row ${isEven ? "lg:flex-row-reverse" : ""} gap-6 w-full items-stretch`}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {/* Main Content */}
      <div className="relative flex-1 rounded-xl overflow-hidden shadow-lg bg-white">
        <img
          src={mainImage}
          alt="Main"
          className="w-full h-56 sm:h-72 md:h-80 object-cover"
          loading="lazy"
        />
        <div className="p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 bg-[#E5F6FA] px-3 py-1.5 rounded w-fit">
            <img src={iconImage} className="w-5 h-5" alt="" loading="lazy" />
            <span className="text-sm font-medium text-[#333]">{category}</span>
          </div>
          <h2 className="text-[#007F8E] font-bold text-xl sm:text-2xl">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {description}
          </p>
          {button}
        </div>
      </div>

      {/* Side Image (Only on large screens) */}
      <motion.div
        className="hidden lg:block lg:w-[35%] rounded-xl overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${sideImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      />
    </motion.div>
  );
};
