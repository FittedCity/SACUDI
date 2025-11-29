import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type RoleOption = "I am an Investor" | "I am a Project Developer" | "";

const Role = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedRole, setSelectedRole] = useState<RoleOption>("");
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleSelect = (role: RoleOption) => {
    setSelectedRole(role);
    setIsMenuOpen(false);
  };

  const handleContinue = () => {
    if (selectedRole === "I am an Investor") {
      navigate("/waitlist");
    } else if (selectedRole === "I am a Project Developer") {
      navigate("/auth/developer");
    }
  };

  const roleOptions: RoleOption[] = [
    "I am an Investor",
    "I am a Project Developer",
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row h-auto lg:h-screen">
      {/* Left Section */}
      <div className="relative flex items-center justify-center w-full lg:w-1/2 px-6 py-12">
        <Link to="/">
          <img
            src="/assets/logo/sacudi-logo.png"
            className="w-[120px] sm:w-[150px] absolute top-6 left-6 sm:top-12 sm:left-16"
            alt="Logo"
          />
        </Link>
        <div className="flex flex-col gap-12 w-full max-w-xl z-10 mt-20 lg:mt-0">
          {/* Heading */}
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <h1 className="font-semibold text-2xl sm:text-3xl leading-snug">
              Choose Your Role
            </h1>
            <p className="font-normal text-base sm:text-lg leading-[30px]">
              Select the type of account you want to create
            </p>
          </div>

          {/* Role Selection */}
          <div className="flex flex-col gap-10 w-full">
            <div className="w-full">
              <div className="bg-[#F9F9F9] border border-[#E2E2E2] py-5 sm:py-6 px-5 sm:px-8 rounded-lg relative">
                <label className="absolute top-[-0.8rem] left-6 bg-white text-sm font-medium px-2 py-1">
                  Role
                </label>

                {/* Dropdown Toggle */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={toggleMenu}
                >
                  <h3 className="text-[#838383] text-sm sm:text-base font-normal">
                    {selectedRole || "Who are you?"}
                  </h3>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M0.833292 0.833333L4.99996 5L9.16663 0.833333"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                <div
                  id="menu"
                  className={`overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-3 ${
                    isMenuOpen
                      ? "max-h-[200px] opacity-100 mt-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {roleOptions.map((role) => (
                    <p
                      key={role}
                      onClick={() => handleSelect(role)}
                      className={`cursor-pointer px-4 py-3 rounded-md transition-colors duration-200 font-medium ${
                        selectedRole === role
                          ? "bg-[#007F8E] text-white"
                          : "hover:bg-[#E6F4F5]"
                      }`}
                    >
                      {role}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              className="bg-[#007F8E] py-3 sm:py-4 w-full text-center font-medium text-lg rounded-lg text-white border border-[#007F8E] disabled:opacity-50"
              disabled={!selectedRole}
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full bg-center bg-cover relative"
        style={{ backgroundImage: "url('/assets/auth/role.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#007F8E66]" />
        <div className="absolute top-8 right-6 sm:top-20 sm:right-10 text-white flex flex-col items-end gap-3 px-4">
          <h1 className="text-2xl sm:text-4xl font-medium leading-tight tracking-normal text-right">
            Welcome to{" "}
            <span className="bg-white text-[#007F8E] px-4 py-1 rounded-lg font-semibold italic">
              SACUDI
            </span>
          </h1>
          <p className="text-sm sm:text-lg italic font-medium leading-snug text-right">
            Empowering Impact-Driven Investments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Role;
