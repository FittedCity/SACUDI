import { useState, useEffect, useRef, useCallback } from "react";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", type: "page", href: "/" },
  { label: "About", type: "page", href: "/about" },
  { label: "Impact", type: "page", href: "/impact" },
  { label: "Invest", type: "page", href: "/invest" },
  { label: "Projects", type: "page", href: "/projects" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBannerDark, setIsBannerDark] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const bannerRef = useRef<HTMLElement | null>(null);

  // 👇 Shared scroll logic
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20;
    setIsScrolled(scrolled);

    const banner = document.querySelector(
      "[data-banner]"
    ) as HTMLElement | null;
    if (banner && !scrolled) {
      bannerRef.current = banner;
      const style = window.getComputedStyle(banner);
      const bgColor = style.backgroundColor;
      const matchColor = "rgb(0, 127, 142)";
      setIsBannerDark(bgColor === matchColor);
    } else {
      setIsBannerDark(false);
    }
  }, []);

  // 👇 Run on mount & scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // 👇 Run again on route change
  useEffect(() => {
    setTimeout(() => {
      handleScroll();
    }, 50); // slight delay to ensure banner is in DOM
  }, [location.pathname, handleScroll]);

  const textColor =
    isScrolled || !isBannerDark ? "text-black" : "text-white";
  const hoverColor =
    isScrolled || !isBannerDark ? "hover:text-[#007c88]" : "hover:text-white";
  const iconColor = isScrolled || !isBannerDark ? "#007c88" : "#ffffff";
  const logoSrc =
    isScrolled || !isBannerDark ? "/assets/logo/sacudi-logo.png" : "/assets/logo/sacudi-light.png";

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <RouterLink to="/">
          <img
            src={logoSrc}
            alt="SACUDI Logo"
            className="w-[130px] sm:w-[150px] object-contain transition-all duration-300"
          />
        </RouterLink>

        {/* Desktop Nav */}
        <ul
          className={`hidden lg:flex gap-5 xl:gap-7 text-sm md:text-base font-medium ${textColor}`}
        >
          {navItems.map(({ label, href, type }) =>
            type === "page" ? (
              <RouterLink key={href} to={href}>
                <li className={`cursor-pointer transition ${hoverColor}`}>
                  {label}
                </li>
              </RouterLink>
            ) : isHomePage ? (
              <ScrollLink
                key={href}
                to={href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
              >
                <li className={`cursor-pointer transition ${hoverColor}`}>
                  {label}
                </li>
              </ScrollLink>
            ) : (
              <RouterLink key={href} to={`/#${href}`}>
                <li className={`cursor-pointer transition ${hoverColor}`}>
                  {label}
                </li>
              </RouterLink>
            )
          )}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          <Button
            text="Sign In"
            textColor={isBannerDark && !isScrolled ? "#ffffff" : "#007c88"}
            borderColor={isBannerDark && !isScrolled ? "#ffffff" : "#007c88"}
            backgroundColor="transparent"
          />
          <Button
            text="Create New Account"
            textColor="#fff"
            backgroundColor={
              isBannerDark && !isScrolled ? "#ffffff33" : "#007c88"
            }
          />
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden z-[60]"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <X size={26} color={iconColor} />
          ) : (
            <Menu size={26} color={iconColor} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 px-6 py-6 shadow-xl z-40 animate-slideDown lg:hidden">
          <ul className="flex flex-col gap-5 text-base font-medium text-gray-800">
            {navItems.map(({ label, href, type }) =>
              type === "page" ? (
                <RouterLink
                  key={href}
                  to={href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li className="cursor-pointer hover:text-[#007c88] transition">
                    {label}
                  </li>
                </RouterLink>
              ) : isHomePage ? (
                <ScrollLink
                  key={href}
                  to={href}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li className="cursor-pointer hover:text-[#007c88] transition">
                    {label}
                  </li>
                </ScrollLink>
              ) : (
                <RouterLink
                  key={href}
                  to={`/#${href}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li className="cursor-pointer hover:text-[#007c88] transition">
                    {label}
                  </li>
                </RouterLink>
              )
            )}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 mt-6">
            <Button
              text="Sign In"
              textColor="#007c88"
              borderColor="#007c88"
              backgroundColor="transparent"
            />
            <Button
              text="Create New Account"
              textColor="#fff"
              backgroundColor="#007c88"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
