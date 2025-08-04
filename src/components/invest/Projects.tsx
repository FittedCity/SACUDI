import { motion } from "framer-motion";
// import { useRef } from "react";
import Button from "../ui/Button";
import { ProjectCard } from "./ProjectCard";

const ArrowIcon = () => (
  <motion.svg
    width="68"
    height="68"
    viewBox="0 0 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
    whileHover={{ rotate: 45 }}
    transition={{ duration: 0.3 }}
  >
    <path d="M22.2 45.08C15.88 38.76 15.88 28.53 22.2 22.2C28.53 15.88 38.76 15.88 45.08 22.2C51.41 28.53 51.41 38.76 45.08 45.08C38.76 51.41 28.53 51.41 22.2 45.08ZM43.74 23.55C38.15 17.97 29.14 17.97 23.55 23.55C17.97 29.14 17.97 38.15 23.55 43.74C29.14 49.32 38.15 49.32 43.74 43.74C49.32 38.15 49.32 29.14 43.74 23.55Z" fill="currentColor"/>
    <path d="M38.08 40.37V29.2H26.91V27.32H39.97V40.37H38.08Z" fill="currentColor"/>
    <path d="M38.36 27.59L39.7 28.93L28.26 40.37L26.91 39.03L38.36 27.59Z" fill="currentColor"/>
  </motion.svg>
);

const Projects = () => {
  const projects = [
    {
      mainImage: "/assets/invest/projects.jpg",
      sideImage: "/assets/invest/projects.jpg",
      iconImage: "/assets/invest/house.png",
      category: "Affordable Housing",
      title: "Empowering Nigerians with a Place to Call Home",
      description:
        "Too many Nigerian families still live in unsafe or overcrowded spaces. We're changing that. SACUDI finances climate-smart, energy-efficient housing developments...",
      isEven: false,
    },
    {
      mainImage: "/assets/invest/projects.jpg",
      sideImage: "/assets/invest/projects.jpg",
      iconImage: "/assets/invest/solar.png",
      category: "Solar & Renewable Energy",
      title: "Powering Communities Sustainably",
      description:
        "Solar solutions for underserved communities. Invest in solar mini-grids, solar water pumps, and street lighting powered by clean energy.",
      isEven: true,
    },
    {
      mainImage: "/assets/invest/projects.jpg",
      sideImage: "/assets/invest/projects.jpg",
      iconImage: "/assets/invest/water.png",
      category: "Water & Sanitation (WASH)",
      title: "Delivering Safe Water and Hygiene",
      description:
        "Access to clean water is a basic human right. Our WASH projects help reduce disease and improve life quality across Nigeria.",
      isEven: false,
    },
    {
      mainImage: "/assets/invest/projects.jpg",
      sideImage: "/assets/invest/projects.jpg",
      iconImage: "/assets/invest/climate.png",
      category: "Climate Resilience",
      title: "Protecting Our Cities and Our Future",
      description:
        "From tree planting to carbon credits, these efforts protect vulnerable areas while building climate-proof urban infrastructure.",
      isEven: true,
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      <div className="w-full max-w-7xl mx-auto space-y-12 md:space-y-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-[#007F8E] tracking-tight leading-tight">
          Our Project Focus Areas
        </h1>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              button={
                <Button
                  text="View project listing"
                  textColor="#007F8E"
                  icon={<ArrowIcon />}
                  px="px-0"
                  py="py-0"
                  className="mt-3"
                />
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
