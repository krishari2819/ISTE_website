import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = ({ onNavigate }) => {
  const location = useLocation(); // Use location instead of pathname for better clarity
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (url) => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
    if (onNavigate) {
      onNavigate(url); // Navigate to the specific section or path
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[20rem] xl:mr-8 flex items-center" href="#hero">
          <img
            src="./assets/benefits/ISTE-Logo.png"
            width={90}
            height={40}
            alt="ISTE Student Chapter-CU Logo"
            className="px-2" // Adding horizontal padding
          />
          <span className="ml-4 text-n-1 text-lg lg:text-xl font-semibold">
            ISTE Student Chapter-CU
          </span>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] z-50 left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:ml-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:justify-center lg:space-x-4">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={() => handleClick(item.url)}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:text-xs lg:font-semibold ${
                  location.hash === item.url
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button className="hidden lg:flex ml-auto" href="https://forms.gle/3cHuuAQdSivxNmvdA">
          Join Us
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
