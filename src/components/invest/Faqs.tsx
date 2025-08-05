import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
  type Variants,
} from "framer-motion";
import Button from "../ui/Button";

const PlusSvg = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
    animate={isOpen ? "open" : "closed"}
    initial={false}
  >
    <motion.rect
      y="7.5"
      width="18"
      height="3"
      rx="1.5"
      fill={isOpen ? "#007F8E" : "#101010"}
      opacity="0.8"
    />
    <motion.rect
      x="10.5"
      width="18"
      height="3"
      rx="1.5"
      transform="rotate(90 10.5 0)"
      fill={isOpen ? "#007F8E" : "#101010"}
      opacity="0.8"
      variants={{
        open: { opacity: 0 },
        closed: { opacity: 0.8 },
      }}
    />
  </motion.svg>
);

const faqVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const faqs = [
    {
      question: "Who can invest on SACUDI?",
      answer:
        "Anyone—individuals, institutions, or members of the diaspora—who wants to make their money work for a better Nigeria.",
    },
    {
      question: "Are the projects safe and vetted?",
      answer:
        "All projects undergo rigorous vetting and are insured against unforeseen circumstances.",
    },
    {
      question: "What kinds of returns can I expect?",
      answer:
        "Returns vary by project but typically range between 12–25% annually depending on the investment type.",
    },
    {
      question: "How do I track my investment?",
      answer:
        "You'll receive quarterly reports and have 24/7 access to our investor dashboard.",
    },
    {
      question: "Is my investment secured?",
      answer:
        "Yes, all investments are asset-backed and insured for your protection.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={controls}
      className="w-full px-4 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <motion.h1
        className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[55px] leading-snug md:leading-[70px] tracking-tight text-center mb-6 sm:mb-10"
        variants={faqVariants}
        custom={0}
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
        <div className="flex-1 space-y-6">
          {faqs.slice(0, 2).map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              custom={index + 1}
              animateControl={controls}
            />
          ))}
        </div>

        <div className="flex-1 space-y-6 mt-6 lg:mt-0">
          {faqs.slice(2).map((faq, index) => (
            <FAQItem
              key={index + 2}
              faq={faq}
              isOpen={openIndex === index + 2}
              onClick={() => toggleFAQ(index + 2)}
              custom={index + 3}
              animateControl={controls}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="flex items-center justify-center py-12 sm:py-14 md:py-16"
        variants={faqVariants}
        custom={6}
      >
        <Button
          text="Contact Our Team"
          textColor="#101010"
          borderColor="#101010"
          px="px-4 sm:px-6"
          py="py-3 sm:py-4"
          className="text-sm sm:text-base md:text-lg"
        />
      </motion.div>
    </motion.div>
  );
};

const FAQItem = ({
  faq,
  isOpen,
  onClick,
  custom,
  animateControl,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
  custom: number;
  animateControl: ReturnType<typeof useAnimation>;
}) => {
  return (
    <motion.div
      variants={faqVariants}
      custom={custom}
      initial="hidden"
      animate={animateControl}
      className="w-full max-w-full lg:max-w-[558px] px-6 py-6 shadow-md hover:shadow-lg rounded-xl bg-white transition-shadow"
    >
      <motion.div
        className="flex items-center gap-4 cursor-pointer"
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
      >
        <PlusSvg isOpen={isOpen} />
        <h5
          className={`font-semibold text-base sm:text-lg md:text-[18px] leading-snug ${
            isOpen ? "text-[#007F8E]" : "text-[#101010]"
          }`}
        >
          {faq.question}
        </h5>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.1 },
              },
            }}
            className="overflow-hidden"
          >
            <motion.p
              className="pt-4 pb-2 text-sm sm:text-base text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Faqs;
