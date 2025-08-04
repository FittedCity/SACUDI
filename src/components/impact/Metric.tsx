import { motion, useInView, useAnimation, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MetricItem = ({ 
  value, 
  label, 
  delay 
}: { 
  value: string; 
  label: string; 
  delay: number 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  // Extract numeric value from string (e.g., "54+" -> 54)
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, ''); // Get the "+" or other suffix

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      // Count up animation
      const duration = 1.5;
      const startTime = Date.now();
      const endValue = numericValue;
      
      const animateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const currentCount = Math.floor(progress * endValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(endValue);
        }
      };
      
      animateCount();
    }
  }, [isInView, numericValue, controls]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: delay * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-3 p-4"
      initial="hidden"
      animate={controls}
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.span 
        className="font-semibold text-[#007F8E] text-4xl md:text-5xl lg:text-[65px] text-center leading-[1.1]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay * 0.1 + 0.3 }}
      >
        {count}{suffix}
      </motion.span>
      <motion.h3 
        className="font-medium text-sm md:text-base lg:text-[16px] leading-tight text-center max-w-[180px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay * 0.1 + 0.4 }}
      >
        {label}
      </motion.h3>
    </motion.div>
  );
};

const Metric = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const metrics = [
    { value: "54+", label: "Housing Units Delivered" },
    { value: "15+", label: "Households with New Energy Access" },
    { value: "1K+", label: "Litres of Safe Water Distributed" },
    { value: "300+", label: "Jobs Created" },
    { value: "2+", label: "CO₂ Emissions Avoided" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="absolute -top-44 w-full" ref={containerRef}>
      <motion.div
        className="py-10 flex justify-center px-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full max-w-[1239px] bg-white rounded-xl shadow-lg py-8 lg:py-14"
          initial="hidden"
          animate={controls}
          variants={cardVariants}
        >
          <motion.h1
            className="font-medium text-3xl md:text-4xl lg:text-[42px] leading-tight tracking-tight text-center mb-6 md:mb-10"
            variants={titleVariants}
          >
            Impact Metrics
          </motion.h1>

          <motion.div 
            className="flex justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 w-full px-6 md:px-10">
              {metrics.map((metric, index) => (
                <MetricItem
                  key={index}
                  value={metric.value}
                  label={metric.label}
                  delay={index}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Metric;