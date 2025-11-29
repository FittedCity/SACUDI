import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MissionAndVision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Properly typed animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const, // Explicitly typed as const
        stiffness: 100,
        damping: 10,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      variants={container}
      className="relative w-full px-4 sm:px-6 lg:px-12 py-12"
    >
      {/* Centered Background SVG */}
      <motion.div 
        variants={fadeIn}
        className="absolute inset-0 flex justify-center items-center z-10"
      >
        <svg
          width="367"
          height="407"
          viewBox="0 0 367 407"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG content remains the same */}
        </svg>
      </motion.div>

      {/* Mission & Vision Cards
      <div className="flex flex-wrap gap-6 justify-center mb-12">
        <motion.div 
          variants={item}
          className="bg-[#007F8E] text-white rounded-lg p-6 sm:p-10 max-w-xl w-full z-20"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Our Mission
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg leading-7"
          >
            To democratize access to urban infrastructure investment and make
            every naira count for Nigeria's future.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={item}
          className="bg-[#C4E2EA] text-black rounded-lg p-6 sm:p-10 max-w-xl w-full z-20"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Our Vision
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg leading-7"
          >
            A Nigeria where everyone can invest in cities that work —
            sustainably, affordably, and inclusively.
          </motion.p>
        </motion.div>
      </div> */}

      {/* Challenges Section */}
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Urban Challenge */}
        <motion.div
          variants={item}
          className="relative bg-cover bg-center rounded-lg max-w-xl w-full h-[460px] flex items-end z-20"
          style={{
            backgroundImage: "url('/assets/home/urban-challenges.jpg')",
          }}
        >
          <motion.div 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#C4E2EA] rounded-lg w-full p-6 sm:p-8 absolute top-0"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#007F8E] mb-4">
              The Urban Challenge
            </h3>
            <ul className="list-disc pl-5 text-base sm:text-lg space-y-1 text-gray-800">
              <motion.li 
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Urban population to double by 2050
              </motion.li>
              <motion.li 
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.6 }}
              >
                ₦36 trillion+ infrastructure gap
              </motion.li>
              <motion.li 
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.7 }}
              >
                Millions without access to housing, energy, water
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Investment Gap */}
        <motion.div
          variants={item}
          className="relative bg-cover bg-center rounded-lg max-w-xl w-full h-[460px] flex items-end z-20"
          style={{ backgroundImage: "url('/assets/home/investment-gap.jpg')" }}
        >
          <motion.div 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#007F8E] rounded-lg w-full p-6 sm:p-8 text-white"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              The Investment Gap
            </h3>
            <ul className="list-disc pl-5 text-base sm:text-lg space-y-1">
              <motion.li
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Limited access to institutional funding for urban developers.
              </motion.li>
              <motion.li
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Lack of accessible, transparent platforms for local investors
                and the diaspora.
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MissionAndVision;