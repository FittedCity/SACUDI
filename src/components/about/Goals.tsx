import { motion } from "framer-motion";

const Goals = () => {
  // Type-safe animation variants
  const cardVariants = {
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
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="w-full py-10">
      {/* Mission & Vision Cards */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-16 px-4 sm:px-10 py-12">
        <motion.div 
          className="bg-[#007F8E] text-white rounded-lg p-6 sm:p-10 max-w-[500px] w-full shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7">
            To democratize access to urban infrastructure investment and make
            every naira count for Nigeria&apos;s future.
          </p>
        </motion.div>

        <motion.div 
          className="bg-[#C4E2EA] text-black rounded-lg p-6 sm:p-10 max-w-[500px] w-full shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
            Our Vision
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7">
            A Nigeria where inclusive, affordable, and sustainable cities are
            built by everyone for everyone.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="w-full h-[500px] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#007F8E_0%,_#007F8E_40%,_transparent_80%,_transparent_100%)] z-20" />

        {/* Image on the right */}
        <motion.img
          src="/assets/about/goals.png"
          className="w-1/2 absolute right-0 z-0 h-full object-cover"
          alt=""
          variants={imageVariants}
        />

        {/* Text Content */}
        <motion.div 
          className="absolute z-30 text-white px-4 sm:px-28 top-[100px] sm:top-[120px] max-w-full sm:max-w-[870px]"
          variants={textVariants}
        >
          <h6 className="text-base sm:text-lg font-medium leading-[1.2] mb-4">
            A Nigeria Built by Everyone for Everyone
          </h6>
          <h6 className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed sm:leading-[40px] mt-20">
            We see a future where Nigerian cities are inclusive, affordable, and
            sustainable and where every person has a chance to help build them.
            Through SACUDI, you become part of that change: making investments
            that grow your wealth and uplift communities.
          </h6>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Goals;