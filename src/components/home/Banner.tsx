import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import ComingSoon from "../waitlist/ComingSoon";
import { motion, AnimatePresence } from "framer-motion";
import { BlurText, SplitText } from "../../animations";

const Banner = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  const handleShowPopup = () => {
    setShowPopup(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 8000);
  };

  // Animation timing controls - increased subtitle delay
  const titleStepDuration = 0.08;
  const titleDelay = 0.1;
  const subtitleDelay = titleDelay + (titleStepDuration * 5) + 0.5; // Added 0.5s extra delay
  const buttonDelay = subtitleDelay + 1.0; // Increased from 0.8 to 1.0
  const imageDelay = buttonDelay + 0.5;

  return (
    <div className="w-full pt-16 sm:pt-20 relative">
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
          >
            <motion.div
              ref={popupRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <ComingSoon />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center justify-center">
          <div className="flex flex-col items-center text-center">
            {/* Title 1 with smooth entry animation */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: titleDelay,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="font-semibold text-[clamp(1.75rem,6vw,4.25rem)] leading-snug sm:leading-tight tracking-tight max-w-[90vw] sm:max-w-3xl md:max-w-5xl"
            >
              Powering Nigeria's Urban Future.
            </motion.h1>

            {/* Title 2 */}
            <BlurText
              text="One Investment at a Time."
              animateBy="words"
              direction="top"
              delay={titleDelay + 0.2}
              stepDuration={titleStepDuration}
              className="font-semibold text-[clamp(1.5rem,6vw,4.25rem)] leading-snug sm:leading-tight tracking-tight max-w-[90vw] sm:max-w-3xl md:max-w-5xl mt-2"
              onAnimationComplete={() => console.log("Second line done")}
            />
          </div>

          {/* Subtitle with increased delay */}
          <motion.div 
            className="flex flex-col items-center text-center gap-1 py-6 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: subtitleDelay - 0.3 }} // Adjusted to match new timing
          >
            <SplitText
              text="SACUDI is a digital investment platform connecting capital to sustainable and"
              splitType="words"
              delay={subtitleDelay}
              className="font-medium text-[clamp(0.9rem,2.5vw,1.25rem)] leading-relaxed sm:leading-8 max-w-[100vw] sm:max-w-3xl text-center"
            />
            <SplitText
              text="affordable urban infrastructure projects in Nigeria."
              splitType="words"
              delay={subtitleDelay + 0.4} // Increased from 0.3 to 0.4
              className="font-medium text-[clamp(0.9rem,2.5vw,1.25rem)] leading-relaxed sm:leading-8 max-w-[90vw] sm:max-w-xl text-center"
            />
          </motion.div>

          <motion.div
            className="w-full flex flex-wrap justify-center text-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: buttonDelay, 
              duration: 2,
              ease: "easeOut"
            }}
          >
            <Button
              text="Join as Investor"
              textColor="#fff"
              backgroundColor="#007c88"
              onClick={handleShowPopup}
              animationDuration={2000}
            />
            <Link to="/projects">
              <Button
                text="View projects"
                textColor="#101010"
                borderColor="#101010"
                backgroundColor="transparent"
                animationDuration={2000}
              />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="w-full flex flex-col items-center justify-start pt-10 sm:pt-16 md:pt-20 pb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: imageDelay, 
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <div className="w-full h-[150px] sm:h-[180px] md:h-[231px] bg-[#007F8E] flex-shrink-0" />

        <motion.div
          className="-mt-[80px] sm:-mt-[120px] md:-mt-[160px] lg:-mt-[180px] flex justify-center w-full px-4"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <img
            src="/assets/home/admin-board.png"
            alt="admin-board"
            className="border-4 sm:border-6 border-[#C4E2EA] rounded-2xl sm:rounded-[36px] w-full max-w-[1028px] h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[668px] object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;