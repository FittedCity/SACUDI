import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";
import ArrowIcon from "../../svgs/ArrowIcon";

const FeatureIcon = () => (
  <motion.svg
    width="20"
    height="24"
    viewBox="0 0 20 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 flex-shrink-0"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.911 17.6681C13.1015 17.6172 13.9515 17.6426 15.0359 16.7511C15.7088 16.1963 16.3381 15.3302 16.5615 14.0962C16.6705 13.5018 16.676 11.7923 16.2128 11.5149C16.0412 11.413 15.6134 11.331 15.4009 11.297C13.1615 10.9545 11.1154 12.3074 10.5596 14.6227C10.3226 15.6104 10.4697 16.785 10.8076 17.6625H11.911V17.6653V17.6681ZM6.43213 18.9701C6.82445 18.9701 7.14321 19.3012 7.14321 19.7088C7.14321 20.9909 1.39467 21.6108 0.321248 19.7456C-0.0247539 19.1456 0.0242858 18.6785 0.0242858 17.92C0.0242858 17.2124 0.0242858 16.5077 0.0242858 15.8001C0.0242858 14.6 -0.0656202 8.09304 0.111467 7.45338C0.441123 6.25898 1.30477 5.90235 2.17386 5.35327C3.00208 4.82965 3.8521 4.29188 4.71847 3.75695C5.59846 3.21352 6.41034 2.68991 7.25763 2.15497C8.97402 1.07095 9.74503 0.264299 11.5595 1.41342L14.1014 3.00974C15.2892 3.75412 16.7713 4.73625 17.9129 5.40987C18.7493 5.90235 19.6292 6.35521 19.9044 7.5298C20.0788 8.27985 19.9725 10.7734 19.9725 11.7102V18.0672C19.9725 18.8427 19.9671 19.2927 19.6183 19.8362C18.5504 21.5004 12.8727 21.0447 12.8727 19.7031C12.8727 19.2956 13.1914 18.9644 13.5837 18.9644C14.5373 18.9644 16.9348 19.6692 17.9238 19.0352C18.4387 18.7068 18.4114 18.1606 18.4114 17.3964V8.78082C18.4114 8.03361 18.3815 7.59773 17.8774 7.18733L12.7201 3.9296C12.2515 3.63241 11.8755 3.40033 11.4206 3.11446C11.0419 2.87388 10.5487 2.46065 9.99568 2.46065C9.42355 2.46065 8.94133 2.88803 8.54084 3.12861C6.88439 4.12772 5.01816 5.41553 3.37805 6.38634C1.84965 7.28922 1.58266 7.34583 1.58266 8.83459V17.4502C1.58266 18.2002 1.56631 18.7182 2.07033 19.0437C3.05929 19.6777 5.46496 18.9729 6.42941 18.9729L6.43213 18.9701ZM9.81587 4.75323C8.39099 5.3476 7.29305 7.19299 7.36389 8.99309C7.45107 11.263 9.53253 13.0801 10.2191 12.8112C10.5051 12.7009 10.9737 12.3131 11.1645 12.1206C12.0935 11.1894 12.7065 10.0856 12.6302 8.53175C12.5839 7.58924 12.1916 6.66938 11.7339 6.07217C11.5159 5.78631 10.388 4.50982 9.81587 4.7504V4.75323ZM9.99568 6.56465C9.68782 6.69485 9.29278 7.16469 9.14021 7.4081C7.94419 9.30726 9.72051 11.014 10.0229 10.9743C10.2436 10.9432 10.7122 10.3658 10.8702 10.1139C11.5241 9.07517 11.298 7.79019 10.4861 6.95524C10.4016 6.87033 10.1428 6.63824 9.99296 6.56748L9.99568 6.56465ZM8.08313 17.6596L8.08041 17.6681H9.18108C10.042 15.5029 9.33092 13.2584 7.88698 12.1433C6.9634 11.43 5.22249 10.9206 3.87935 11.4725C3.26908 11.7215 3.32084 13.4537 3.41619 14.0141C3.79489 16.2784 5.54125 17.8153 8.08313 17.6596ZM7.96598 16.0548C8.32016 14.8378 7.67992 13.3999 6.41034 12.9414C6.1161 12.8367 5.2688 12.7065 4.99364 12.8905C4.67215 13.1056 4.69123 16.5501 7.96871 16.052L7.96598 16.0548ZM12.0227 16.052C13.0797 16.2699 13.9052 15.9388 14.431 15.3784C15.0195 14.75 15.1993 14.0339 15.0495 12.9075C13.3004 12.282 11.4532 14.2009 12.0254 16.0548L12.0227 16.052Z"
      fill="#007F8E"
    />
    <path
      d="M11.1374 19.7257C11.1374 19.0738 10.6288 18.5454 10.0013 18.5454C9.37388 18.5454 8.86523 19.0738 8.86523 19.7257V22.6777C8.86523 23.3296 9.37388 23.858 10.0013 23.858C10.6288 23.858 11.1374 23.3296 11.1374 22.6777V19.7257Z"
      fill="#007F8E"
    />
  </motion.svg>
);

const features = [
  {
    title: "Sign Up",
    description: "Create your service investor profile in minutes.",
  },
  {
    title: "Explore Projects",
    description:
      "Browse verified, impact-driven projects in housing, energy, water, mobility, and manufacturing.",
  },
  {
    title: "Invest with Confidence",
    description:
      "Choose your project, invest securely through our platform, and watch your investment create change.",
  },
  {
    title: "Track Your Impact",
    description:
      "Follow your investment's progress through our transparent reporting tools — see both your financial returns and the positive social outcomes.",
  },
];

const Flows = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

   // Properly typed variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const, // Explicit type
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-10 lg:py-14 bg-[#C4E2EA]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
        <motion.img
          variants={item}
          src="/assets/home/works-image.png"
          className="w-full max-w-[375px] md:max-w-[400px] lg:max-w-[375px]"
          alt="How it works illustration"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        />

        <motion.div 
          variants={container}
          className="w-full lg:w-[693px] space-y-5"
        >
          <motion.h2 
            variants={item}
            className="font-medium text-3xl sm:text-4xl md:text-5xl leading-tight"
          >
            How It Works
          </motion.h2>
          <motion.p 
            variants={item}
            className="font-medium text-base sm:text-lg md:text-xl leading-relaxed"
          >
            SACUDI makes it easy for you to put your money where it matters
            most: into projects that transform Nigerian cities for good. Here's
            how:
          </motion.p>

          <motion.div 
            variants={container}
            className="space-y-5"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FeatureIcon />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="font-normal text-sm sm:text-base leading-snug">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Flows;