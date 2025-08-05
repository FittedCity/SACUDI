import { motion, type Variants } from "framer-motion";
import Button from "../ui/Button";

const Newsletter = () => {
  // Animation variants
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
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="w-full relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Gradient Overlay - Responsive direction change */}
      <motion.div
        className="absolute inset-0 z-20 
          bg-[linear-gradient(to_bottom,_#007F8E_0%,_#007F8E_70%,_transparent_100%)] 
          sm:bg-[linear-gradient(to_right,_#007F8E_0%,_#007F8E_60%,_transparent_100%)]"
        variants={itemVariants}
      />

      {/* Responsive Image */}
      <motion.img
        src="/assets/invest/invest-newsletter.jpg"
        className="w-full h-full sm:w-1/2 sm:h-full absolute right-0 bottom-0 z-0 object-cover"
        alt="Invest in Nigeria's future"
        loading="lazy"
        variants={imageVariants}
      />

      {/* Text Content - Responsive positioning */}
      <motion.div
        className="absolute z-30 text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-28 
          top-1/2 sm:top-[150px] transform -translate-y-1/2 sm:translate-y-0 
          w-full sm:w-[60%] md:w-[55%] lg:w-[60%]"
        variants={containerVariants}
      >
        <motion.div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <motion.div
            className="flex flex-col gap-3 sm:gap-4 md:gap-5"
            variants={containerVariants}
          >
            <motion.h6
              className="text-sm sm:text-base md:text-lg font-medium leading-snug"
              variants={itemVariants}
            >
              Join thousands of investors
            </motion.h6>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight sm:leading-snug md:leading-normal"
              variants={itemVariants}
            >
              Start Investing Today and transform Nigeria&apos;s urban future
            </motion.h2>
          </motion.div>

          {/* Responsive Form */}
          <motion.form
            className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants} className="flex-1 min-w-0">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-lg border border-white font-medium 
                  text-base sm:text-lg md:text-xl leading-snug 
                  px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 
                  bg-transparent placeholder:text-white/80 outline-none
                  focus:ring-2 focus:ring-white/50"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button
                text="Join Our Newsletter"
                textColor="#000000"
                borderColor="#FFFFFF"
                backgroundColor="#FFFFFF"
                px="px-4 sm:px-5 md:px-6"
                py="py-3 sm:py-4 md:py-5"
                className="w-full sm:w-auto text-center hover:bg-transparent hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Newsletter;