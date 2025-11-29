import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion"; // 👈 added

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  image: string;
}

const Testimonies = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true }); // 👈 detects when in view

  const testimonials: Testimonial[] = [
     {
      id: 1,
      quote:
        "Being in the diaspora, I struggled to find trustworthy investment channels for infrastructure back home. SACUDI made it transparent and secure to invest in clean energy projects that power entire communities.",
      name: "Chuka A.",
      location: "London",
      image: "/assets/testimony/chuka.jpg",
    },
    {
      id: 2,
      quote:
        "SACUDI has transformed how I invest in Nigeria. The platform's transparency and impact tracking give me confidence that my money is making a real difference.",
      name: "Amina K.",
      location: "Lagos",
      image: "/assets/testimony/amina.jpg",
    },
    {
      id: 3,
      quote:
        "As a small business owner, I appreciate how SACUDI connects me with infrastructure projects that directly benefit my community. The returns are great too!",
      name: "Oluwaseun B.",
      location: "Abuja",
      image: "/assets/testimony/oluwaseun.jpg",
    },
    {
      id: 4,
      quote:
        "I've tried several investment platforms, but SACUDI stands out for its focus on measurable impact. Seeing the schools and hospitals my investments help build is priceless.",
      name: "Ngozi E.",
      location: "New York",
      image: "/assets/testimony/ngozi.jpg",
    },
    {
      id: 5,
      quote:
        "The user experience on SACUDI is exceptional. From project selection to impact reports, everything is designed with the investor in mind.",
      name: "Tunde O.",
      location: "Toronto",
      image: "/assets/testimony/tunde.jpg",
    },
    {
      id: 6,
      quote:
        "SACUDI helped me diversify my portfolio while contributing to Nigeria's development. It's the perfect blend of financial and social returns.",
      name: "Chioma M.",
      location: "Dubai",
      image: "/assets/testimony/chioma.jpg",
    },
  ];

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getPrevIndex = (): number =>
    (currentIndex - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = (): number => (currentIndex + 1) % testimonials.length;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 md:py-14 overflow-hidden bg-[#C4E2EA]"
    >
      <div className="w-full flex items-center justify-center flex-col gap-6 px-4">
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-center">
          Stories of Impact and Growth
        </h1>
        <p className="max-w-[725px] font-medium text-sm sm:text-base md:text-lg leading-relaxed text-center">
          Real people. Real change. Hear from those who are investing in
          Nigeria's future through SACUDI
        </p>
      </div>

      <div className="relative px-4 sm:px-6 md:px-10 py-10 md:py-14 max-w-6xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-4 mb-8">
          <PreviewCard
            testimonial={testimonials[getPrevIndex()]}
            onClick={() => goToSlide(getPrevIndex())}
          />

          <MainCard testimonial={testimonials[currentIndex]} />

          <PreviewCard
            testimonial={testimonials[getNextIndex()]}
            onClick={() => goToSlide(getNextIndex())}
          />
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          <MainCard testimonial={testimonials[currentIndex]} />

          <div className="flex justify-between gap-4">
            <MobilePreview
              testimonial={testimonials[getPrevIndex()]}
              onClick={() => goToSlide(getPrevIndex())}
            />
            <MobilePreview
              testimonial={testimonials[getNextIndex()]}
              onClick={() => goToSlide(getNextIndex())}
            />
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-[#007F8E] w-6" : "bg-[#7DC5D6]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const MainCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="w-full max-w-[606px] bg-[#FFFFFF29] py-5 px-5 rounded-lg">
    <div className="w-full flex items-center">
      <svg
        width="23"
        height="17"
        viewBox="0 0 23 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.522727 17V12.0909C0.522727 10.697 0.795455 9.27273 1.34091 7.81818C1.88636 6.36364 2.60606 4.99242 3.5 3.70454C4.39394 2.41666 5.36364 1.34091 6.40909 0.477272L10.6818 3C9.83333 4.33333 9.13636 5.72727 8.59091 7.18182C8.06061 8.63636 7.79545 10.2576 7.79545 12.0455V17H0.522727ZM12 17V12.0909C12 10.697 12.2727 9.27273 12.8182 7.81818C13.3636 6.36364 14.0833 4.99242 14.9773 3.70454C15.8712 2.41666 16.8409 1.34091 17.8864 0.477272L22.1591 3C21.3106 4.33333 20.6136 5.72727 20.0682 7.18182C19.5379 8.63636 19.2727 10.2576 19.2727 12.0455V17H12Z"
          fill="#101010"
        />
      </svg>
    </div>

    <div className="max-w-[540px] mx-auto py-6 md:py-10">
      <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-3 mt-6">
        <img
          src={testimonial.image}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover"
          alt={testimonial.name}
        />
        <div>
          <h2 className="font-normal text-sm md:text-base leading-5 mb-1">
            {testimonial.name}
          </h2>
          <h4 className="italic text-base md:text-lg leading-5 font-medium">
            {testimonial.location}
          </h4>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-end">
      <svg
        width="23"
        height="17"
        viewBox="0 0 23 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.4773 0V4.90909C22.4773 6.30303 22.2045 7.72727 21.6591 9.18182C21.1136 10.6364 20.3939 12.0076 19.5 13.2955C18.6061 14.5833 17.6364 15.6591 16.5909 16.5227L12.3182 14C13.1667 12.6667 13.8636 11.2727 14.4091 9.81818C14.9394 8.36364 15.2045 6.74243 15.2045 4.95455V0H22.4773ZM11 0V4.90909C11 6.30303 10.7273 7.72727 10.1818 9.18182C9.63636 10.6364 8.91667 12.0076 8.02273 13.2955C7.12879 14.5833 6.15909 15.6591 5.11364 16.5227L0.840908 14C1.68939 12.6667 2.38636 11.2727 2.93182 9.81818C3.46212 8.36364 3.72727 6.74243 3.72727 4.95455V0H11Z"
          fill="#101010"
        />
      </svg>
    </div>
  </div>
);

const PreviewCard = ({
  testimonial,
  onClick,
}: {
  testimonial: Testimonial;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="w-1/4 max-w-[200px] opacity-60 hover:opacity-80 cursor-pointer transition-opacity duration-300"
  >
    <div className="bg-[#C4E2EA] p-4 rounded-lg h-full">
      <p className="font-normal text-sm line-clamp-3">{testimonial.quote}</p>
      <div className="flex items-center gap-2 mt-3">
        <img
          src={testimonial.image}
          className="w-8 h-8 rounded-full object-cover"
          alt={testimonial.name}
        />
        <div>
          <h4 className="font-normal text-xs">{testimonial.name}</h4>
        </div>
      </div>
    </div>
  </div>
);

const MobilePreview = ({
  testimonial,
  onClick,
}: {
  testimonial: Testimonial;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="w-1/2 opacity-60 hover:opacity-80 cursor-pointer transition-opacity duration-300"
  >
    <div className="bg-[#C4E2EA] p-3 rounded-lg">
      <p className="font-normal text-xs line-clamp-2">{testimonial.quote}</p>
      <div className="flex items-center gap-2 mt-2">
        <img
          src={testimonial.image}
          className="w-6 h-6 rounded-full object-cover"
          alt={testimonial.name}
        />
        <div>
          <h4 className="font-normal text-2xs">{testimonial.name}</h4>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonies;
