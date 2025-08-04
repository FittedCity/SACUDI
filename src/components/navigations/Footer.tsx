import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import Button from "../ui/Button";

interface FooterSection {
  title: string;
  links: string[];
}

const Footer: React.FC = () => {
  const socialIcons: IconType[] = [FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube];
  const sections: FooterSection[] = [
    {
      title: "Company",
      links: ["Home", "About", "FAQs"],
    },
    {
      title: "Quick Links",
      links: ["Invest", "Projects", "Impacts"],
    },
  ];

  return (
    <footer>
      <div className="w-full pt-28 pb-10 px-6 md:px-10 lg:px-24 text-white bg-[#007F8E]">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row justify-between gap-16">
          {/* Left Column */}
          <div className="flex flex-col gap-12 max-w-full lg:max-w-[385px]">
            <div className="flex flex-col gap-9">
              <img
                src="/assets/logo/sacudi-light.png"
                className="w-[180px] sm:w-[220px] h-auto"
                alt="Sacudi logo"
              />
              <p className="text-base md:text-xl leading-relaxed">
                Sustainable and Affordable-Centered Urban Development
                Investments
              </p>
              <div className="flex gap-3 flex-wrap">
                {socialIcons.map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] border border-white rounded-[6px] flex items-center justify-center"
                  >
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-sm sm:text-lg leading-7">
              <p>
                4, Obokun Close, Ikeja, Lagos, Nigeria.
                <br />
                contact@sacudi.com
                <br />
                +234123456789
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start lg:items-end gap-16 w-full">
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-[42px] w-fit">
              {sections.map((section, idx) => (
                <div key={idx} className="flex flex-col gap-5 w-full sm:w-auto">
                  <h3 className="text-xl sm:text-2xl font-medium">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-2 sm:gap-3">
                    {section.links.map((link, i) => (
                      <li
                        key={i}
                        className="text-lg hover:underline cursor-pointer"
                      >
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex flex-col items-start lg:items-end gap-6 w-full max-w-full sm:max-w-[400px]">
              <h4 className="text-2xl sm:text-3xl font-medium text-start w-full">
                Join Us Now!
              </h4>
              <div className="flex flex-col gap-4 w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-[#7DC5D6] px-4 sm:px-6 py-3 sm:py-4 rounded-[8px] bg-transparent text-white w-full outline-none text-base placeholder:text-white"
                />
                <Button
                  text="Join Our Newsletter"
                  textColor="#007F8E"
                  backgroundColor="#ffffff"
                  px="px-[15px]"
                  py="py-[15px]"
                  className="w-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#C4E2EA] w-full py-5 px-4">
        <h6 className="text-center text-[#007F8E] text-sm sm:text-base leading-[22px] font-normal">
          ©2025 Sacudi (Sustainable and Affordable-Centered Urban Development
          Investments). All rights reserved.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;