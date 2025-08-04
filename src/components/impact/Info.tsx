import { motion, type Variants } from "framer-motion";

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.3,
      ease: "easeInOut",
    },
  }),
};

const Info = () => {
  return (
    <div className="pb-14 sm:px-0 px-5">
      <div className="flex flex-wrap gap-6 justify-center mb-12">
        {[  
          {
            title: "National Urban Development Policies",
            text: "Our projects advance Nigeria's national plans for inclusive, sustainable urban growth.",
            bg: "#3DABC6",
            textColor: "text-white",
          },
          {
            title: "ESG & Green Finance Standards",
            text: "We align with best-in-class Environmental, Social, and Governance (ESG) principles and green finance guidelines to ensure responsible, future-ready investments.",
            bg: "#C4E2EA",
            textColor: "text-black",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`rounded-lg p-6 sm:p-10 max-w-xl w-full z-20 ${item.textColor}`}
            style={{ backgroundColor: item.bg }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
            custom={i}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
              {item.title}
            </h2>
            <p className="text-base sm:text-lg leading-7">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Info;
