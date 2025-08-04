import { motion } from "framer-motion";
import Button from "../ui/Button";
import ArrowIcon from "../../svgs/ArrowIcon";

interface Project {
  title: string;
  buttonText?: string; // New optional prop for custom button text
  category: string;
  icon: string;
  image: string;
  details: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="w-full h-[400px] sm:h-[682px] rounded-lg bg-cover bg-center relative overflow-hidden shadow-lg"
      style={{ backgroundImage: `url('${project.image}')` }}
      whileHover="hover"
      initial="rest"
    >
      {/* Overlay that only appears on hover */}
      <motion.div
        className="absolute inset-0 bg-[#101010] z-0"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 0.8 },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content container that slides up on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-6 z-10"
        variants={{
          rest: { y: 0 },
          hover: { y: -20 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Category badge */}
        <motion.div
          className="bg-[#C4E2EA] flex items-center gap-3 px-4 py-1 w-fit rounded-sm mb-3"
          variants={{
            rest: { opacity: 1 },
            hover: { opacity: 1 },
          }}
        >
          <img src={project.icon} alt={project.category} className="w-4 h-4" />
          <p className="font-medium text-xs sm:text-[14px] leading-[20px] text-gray-800">
            {project.category}
          </p>
        </motion.div>

        {/* Project title */}
        <motion.h2
          className="font-semibold text-lg sm:text-2xl md:text-[32px] leading-[1.3] text-white mb-4"
          variants={{
            rest: { opacity: 1 },
            hover: { opacity: 1 },
          }}
        >
          {project.title}
        </motion.h2>

        {/* Details that appear on hover */}
        <motion.div
          className="text-white"
          variants={{
            rest: { opacity: 0, height: 0 },
            hover: { opacity: 1, height: "auto" },
          }}
          transition={{ duration: 0.3 }}
        >
          <ul className="list-disc font-normal text-xs sm:text-[16px] leading-[1.6] pl-5 space-y-2">
            {project.details.map((detail: string, i: number) => (
              <motion.li
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                {detail}
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-4 -ml-4 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              text={
                project.buttonText || `Invest in ${project.title.split("/")[0]}`
              }
              textColor="#ffffff"
              backgroundColor="transparent"
              icon={<ArrowIcon />}
              py="py-2"
              className="hover:bg-white hover:text-[#101010]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Edustay / Zengabo",
      buttonText: "Invest in Edustay/Zengabo", // Custom button text
      category: "Affordable Housing",
      icon: "/assets/projects/house.png",
      image: "/assets/projects/edustay.jpg",
      details: [
        "Available IMP Units: 4,500",
        "Project Cost: ₦55 million",
        "Price per IMP: ₦10,000",
        "Quota to Raise: ₦50 million",
        "Expected Return: 10% annually",
        "Total IMP Units: 5,000",
        "Tenure: 10 years",
      ],
    },
    {
      title: "Project: Solar-Powered Smart Homes",
      buttonText: "Invest in Solar Smart Homes", // Custom button text
      category: "Solar Energy",
      icon: "/assets/projects/solar.png",
      image: "/assets/projects/solar.jpg",
      details: [
        "Available IMP Units: 35,000",
        "Project Cost: ₦400 million",
        "Price per IMP: ₦10,000",
        "Quota to Raise: ₦350 million",
        "Expected Return: 18% annually",
        "Total IMP Units: 35,000",
        "Tenure: 3 years",
      ],
    },
    {
      title: "Project: Abuja Clean Water Network",
      buttonText: "Invest in Abuja Clean Water Network", // Custom button text
      category: "WASH Projects",
      icon: "/assets/projects/water.png",
      image: "/assets/projects/water.jpg",
      details: [
        "Available IMP Units: 45,000",
        "Project Cost: ₦550 million",
        "Price per IMP: ₦10,000",
        "Quota to Raise: ₦500 million",
        "Expected Return: 15% annually",
        "Total IMP Units: 50,000",
        "Tenure: 7 years",
      ],
    },
    {
      title: "Project: Waste-to-energy plant (Ogun)",
      buttonText: "Invest in Ogun Waste-to-Energy", // Custom button text
      category: "Climate Resilience Projects",
      icon: "/assets/projects/climate.png",
      image: "/assets/projects/waste.jpg",
      details: [
        "Available IMP Units: 4,500",
        "Project Cost: ₦55 million",
        "Price per IMP: ₦10,000",
        "Quota to Raise: ₦50 million",
        "Expected Return: 10% annually",
        "Total IMP Units: 5,000",
        "Tenure: 10 years",
      ],
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[55px] leading-[1.2] text-center mb-8 sm:mb-12">
        Featured Project Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="w-full flex items-center justify-center pt-16">
        <Button
          text="View all projects"
          textColor="#007F8E"
          borderColor="#007F8E"
          className="mt-4 sm:mt-6"
        />
      </div>
    </div>
  );
};

export default Projects;
