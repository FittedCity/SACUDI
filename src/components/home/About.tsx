import { SplitText } from "../../animations";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const About = () => {
  const topIconRef = useRef<HTMLDivElement>(null);
  const bottomIconRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Animation variants with proper typing
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren" as const,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const,
      },
    },
  };

  const slideInFromLeft = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "backOut" as const,
      },
    },
  };

  const slideInFromRight = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "backOut" as const,
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -45,
    },
    visible: {
      opacity: 0.2,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
    rotate: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (topIconRef.current && bottomIconRef.current) {
        const scrollY = window.scrollY;
        topIconRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
        bottomIconRef.current.style.transform = `translateY(${
          scrollY * -0.2
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      exit="exit"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-1 relative">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start"
          variants={slideInFromLeft}
        >
          <motion.img
            ref={imageRef}
            src="/assets/home/about-img.gif"
            alt="Sacudi Mobile App"
            className="w-[260px] sm:w-[320px] md:w-[357px] lg:w-[380px] h-auto"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            animate={floatingAnimation}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 relative"
          variants={slideInFromRight}
        >
          {/* Top SVG Icon */}
          <motion.div
            ref={topIconRef}
            className="absolute -top-[12rem] -left-[3rem] hidden md:block opacity-20"
            initial="hidden"
            animate={["visible", "rotate"]}
            variants={iconVariants}
          >
            <svg
              width="90"
              height="100"
              viewBox="0 0 90 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.18" clipPath="url(#clip0_64_407)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M53.6005 73.098C58.9581 72.8765 62.7832 72.9873 67.6626 69.1109C70.6908 66.699 73.5229 62.9334 74.5282 57.568C75.0186 54.9838 75.0431 47.5511 72.9589 46.3451C72.1865 45.9021 70.2617 45.5452 69.3054 45.3975C59.2278 43.9085 50.0206 49.7907 47.5196 59.8569C46.453 64.1517 47.115 69.2586 48.6352 73.0734H53.6005V73.0857V73.098ZM28.9458 78.7587C30.7112 78.7587 32.1457 80.1985 32.1457 81.9706C32.1457 87.5451 6.27724 90.2401 1.44684 82.1305C-0.110172 79.5217 0.110507 77.4912 0.110507 74.1933C0.110507 71.1168 0.110507 68.0526 0.110507 64.9762C0.110507 59.7585 -0.29407 31.4673 0.502824 28.6862C1.98627 23.4931 5.87267 21.9426 9.78358 19.5552C13.5106 17.2786 17.3357 14.9405 21.2343 12.6147C25.1943 10.252 28.8477 7.9754 32.6606 5.6496C40.3843 0.93645 43.8539 -2.57072 52.019 2.42546L63.4575 9.36597C68.8028 12.6024 75.4722 16.8725 80.6091 19.8013C84.3729 21.9426 88.3328 23.9115 89.5711 29.0184C90.3557 32.2795 89.8776 43.121 89.8776 47.1942V74.8332C89.8776 78.205 89.8531 80.1616 88.2838 82.5243C83.4779 89.7602 57.9282 87.7789 57.9282 81.9459C57.9282 80.1739 59.3627 78.7341 61.1281 78.7341C65.4191 78.7341 76.2078 81.7983 80.6581 79.0418C82.9753 77.6143 82.8527 75.2393 82.8527 71.9167V34.4576C82.8527 31.2089 82.7178 29.3138 80.4497 27.5294L57.2417 13.3654C55.133 12.0733 53.4411 11.0642 51.3937 9.82128C49.6896 8.77528 47.4705 6.97863 44.9818 6.97863C42.4072 6.97863 40.2372 8.83681 38.435 9.88281C30.981 14.2268 22.5829 19.826 15.2025 24.0469C8.32465 27.9724 7.12318 28.2185 7.12318 34.6914V72.1505C7.12318 75.4115 7.04962 77.6635 9.3177 79.0787C13.768 81.8352 24.5936 78.771 28.9336 78.771L28.9458 78.7587ZM44.1726 16.9464C37.7607 19.5306 32.82 27.554 33.1387 35.3806C33.531 45.2499 42.8976 53.1502 45.9871 51.9812C47.2744 51.5012 49.3831 49.8153 50.2413 48.9785C54.4219 44.9299 57.1804 40.1306 56.8371 33.3747C56.6287 29.2769 54.8633 25.2774 52.8036 22.6809C51.8228 21.438 46.7472 15.8881 44.1726 16.9341V16.9464ZM44.9818 24.8221C43.5964 25.3882 41.8187 27.431 41.1322 28.4893C35.7501 36.7465 43.7435 44.167 45.1044 43.9947C46.0974 43.8593 48.2061 41.3489 48.9172 40.2537C51.8596 35.7374 50.842 30.1506 47.1886 26.5203C46.8085 26.1512 45.6438 25.1421 44.9695 24.8344L44.9818 24.8221ZM36.3753 73.0611L36.3631 73.098H41.3161C45.1902 63.6841 41.9904 53.9255 35.4926 49.077C31.3365 45.9759 23.5024 43.7609 17.4583 46.1605C14.7121 47.2434 14.945 54.7746 15.3741 57.2112C17.0782 67.0559 24.9368 73.7379 36.3753 73.0611ZM35.8481 66.0837C37.4419 60.7922 34.5609 54.5408 28.8477 52.5472C27.5237 52.0919 23.7108 51.5259 22.4726 52.3257C21.0259 53.261 21.1117 68.2372 35.8604 66.0714L35.8481 66.0837ZM54.1032 66.0714C58.86 67.0189 62.5748 65.5792 64.9409 63.1426C67.5891 60.4107 68.3982 57.2973 67.7239 52.3996C59.8531 49.68 51.5408 58.0234 54.1154 66.0837L54.1032 66.0714Z"
                  fill="#007F8E"
                />
                <path
                  d="M50.1188 82.0445C50.1188 79.2104 47.8299 76.9129 45.0064 76.9129C42.1829 76.9129 39.894 79.2104 39.894 82.0445V94.8795C39.894 97.7135 42.1829 100.011 45.0064 100.011C47.8299 100.011 50.1188 97.7135 50.1188 94.8795V82.0445Z"
                  fill="#007F8E"
                />
              </g>
              <defs>
                <clipPath id="clip0_64_407">
                  <rect width="90" height="100" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </motion.div>

          {/* Main Text */}
          <motion.div
            className="flex flex-col max-w-2xl lg:max-w-[687px]"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <SplitText
              text="About Sacudi"
              splitType="words"
              className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-900"
              textAlign="left"
            />
            <SplitText
              text="SACUDI stands for Sustainable and Affordable-Centered Urban Development Investments."
              splitType="words"
              className="text-md sm:text-lg lg:text-xl font-semibold text-gray-700 pt-6 sm:pt-8"
              textAlign="left"
            />
            <SplitText
              text="We're building a digital platform that mobilizes both local and global capital to finance projects that matter — affordable homes, clean energy, safe water, thriving urban industries, and resilient cities."
              splitType="words"
              className="text-sm sm:text-base text-gray-600 leading-relaxed pt-4"
              textAlign="left"
            />
          </motion.div>

          {/* Bottom SVG Icon */}
          <motion.div
            ref={topIconRef}
            className="absolute -bottom-[20rem] left-[15rem] hidden md:block opacity-20"
            initial="hidden"
            animate={["visible", "rotate"]}
            variants={iconVariants}
          >
            <svg
              width="267"
              height="296"
              viewBox="0 0 267 296"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M159.014 216.37C174.908 215.715 186.256 216.043 200.732 204.569C209.715 197.429 218.117 186.283 221.1 170.402C222.554 162.752 222.627 140.751 216.444 137.182C214.153 135.87 208.442 134.814 205.605 134.377C175.708 129.969 148.394 147.381 140.974 177.177C137.81 189.889 139.774 205.006 144.284 216.298H159.014V216.334V216.37ZM85.8719 233.126C91.1093 233.126 95.3647 237.388 95.3647 242.633C95.3647 259.134 18.6218 267.111 4.29157 243.107C-0.327559 235.384 0.327121 229.374 0.327121 219.612C0.327121 210.506 0.327121 201.436 0.327121 192.33C0.327121 176.885 -0.873124 93.1434 1.491 84.9113C5.89189 69.5398 17.4215 64.9502 29.0239 57.8837C40.0807 51.145 51.4285 44.2242 62.9945 37.3398C74.7423 30.3461 85.5809 23.6074 96.8923 16.723C119.806 2.77211 130.099 -7.60911 154.322 7.17958L188.256 27.7235C204.114 37.3034 223.9 49.9429 239.14 58.6122C250.305 64.9502 262.053 70.7782 265.727 85.8948C268.055 95.5475 266.636 127.638 266.636 139.695V221.506C266.636 231.487 266.563 237.279 261.908 244.272C247.65 265.69 171.853 259.826 171.853 242.56C171.853 237.315 176.108 233.053 181.346 233.053C194.076 233.053 226.082 242.123 239.285 233.964C246.159 229.738 245.795 222.708 245.795 212.874V101.995C245.795 92.3785 245.395 86.769 238.667 81.4873L169.816 39.5617C163.56 35.7371 158.541 32.7502 152.467 29.0712C147.412 25.9751 140.829 20.657 133.445 20.657C125.807 20.657 119.37 26.1572 114.023 29.2533C91.9095 42.1115 66.9953 58.685 45.0999 71.1789C24.6957 82.7986 21.1314 83.5271 21.1314 102.687V213.566C21.1314 223.218 20.9131 229.884 27.6418 234.073C40.8445 242.232 72.9602 233.162 85.8355 233.162L85.8719 233.126ZM131.045 50.1615C112.023 57.8108 97.3651 81.5602 98.3108 104.727C99.4747 133.94 127.262 157.325 136.428 153.864C140.247 152.444 146.502 147.454 149.048 144.977C161.451 132.993 169.634 118.787 168.616 98.7893C167.998 86.6597 162.76 74.8215 156.65 67.1357C153.74 63.4568 138.683 47.0289 131.045 50.1251V50.1615ZM133.445 73.4737C129.335 75.1493 124.061 81.1959 122.025 84.3285C106.058 108.77 129.772 130.734 133.809 130.224C136.755 129.824 143.011 122.393 145.12 119.151C153.849 105.783 150.831 89.2459 139.992 78.5004C138.865 77.4077 135.409 74.4208 133.409 73.5101L133.445 73.4737ZM107.913 216.261L107.876 216.37H122.57C134.064 188.505 124.571 159.62 105.294 145.268C92.9642 136.089 69.7231 129.532 51.7922 136.635C43.6451 139.841 44.3361 162.133 45.6091 169.345C50.6647 198.486 73.9785 218.265 107.913 216.261ZM106.349 195.608C111.077 179.945 102.53 161.441 85.5809 155.54C81.6528 154.192 70.3414 152.517 66.668 154.884C62.3762 157.653 62.6308 201.982 106.385 195.572L106.349 195.608ZM160.505 195.572C174.617 198.376 185.638 194.115 192.657 186.902C200.513 178.816 202.914 169.6 200.914 155.103C177.563 147.053 152.904 171.749 160.542 195.608L160.505 195.572Z"
                fill="#007F8E"
              />
              <path
                d="M148.685 242.852C148.685 234.463 141.894 227.662 133.518 227.662C125.141 227.662 118.351 234.463 118.351 242.852V280.843C118.351 289.232 125.141 296.033 133.518 296.033C141.894 296.033 148.685 289.232 148.685 280.843V242.852Z"
                fill="#007F8E"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
