import { useEffect, useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import {
  Navbar,
  MobileNav,
  // Typography,
  IconButton,
} from "@material-tailwind/react";
import {NavLink} from "react-router-dom";
import { NavLinks } from "../constant";
import icon from '../assets/osten.png'

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  
  const handleClick = (index: number) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };
  const handleMobileClick = (index: number) => {
    setClickedIndex(index === clickedIndex ? null : index);
    setOpenNav(!openNav)
  };
  const handleContactClick = () => {
    setOpenNav(!openNav)
  };
 
  return (
    <div className=" w-full ">
      <Navbar className={`${scrolled ? 'fixed ' : 'sticky '} text-primary shadow-none top-0 mt-[60px] z-10 font-poppins max-w-full  rounded-none border-0 w-full p-0`} placeholder={undefined}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <div className="flex items-center px-[5%] py-6 max-w-[1440px] mx-auto  justify-between w-full">
        <div>
          <NavLink to="/">
            <img src={icon} alt="logo" className='w-8 h-8'/>
          </NavLink>
        </div>
        
          
          <ul className="hidden md:flex items-center gap-6 md:gap-8">
          {NavLinks.map((item,index) => (
            <li className={`font-medium md:text-[16px] ${
              clickedIndex === index ? 'text-secondary' : ''
            } hover:text-primary`} onClick={() => handleClick(index)} key={index}>
              <NavLink
                to={item.link}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
            <div className="flex items-center">
            <NavLink to="/#contact" className="hidden sm:flex items-center bg-secondary hover:opacity-80 justify-center font-semibold border-white md:text-[16px] text-purple-900 px-5 py-3 rounded-lg">
            <button
              type="submit"
            >
              Get in touch
            </button>
          </NavLink>
    
          </div>
        </ul>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)} placeholder={undefined}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              {openNav ? (
                <CgClose fontSize="20px"/>
              ) : (
                <CgMenuRight fontSize="20px"/>
              )}
            </IconButton>
          
        </div>
        
        
        {openNav && <MobileNav open={openNav} className="w-full overflow-hidden px-[5%] flex flex-col justify-center items-center py-8 bg-black z-10 min-h-[400px] absolute top-[100px] left-0">
         <ul className="text-white flex flex-col items-center gap-5">
         {NavLinks.map((item,index) => (
            <li className={`flex items-center font-semibold ${
              clickedIndex === index ? 'text-secondary' : ''
            } hover:opacity-70`} onClick={() => handleMobileClick(index)} key={index}>
              <NavLink
                to={item.link}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
         </ul>
        
          <div className="flex items-center mt-5">
          <NavLink to="/#contact">
          <button
              onClick={()=> handleContactClick()}
              type="submit"
              className="flex items-center bg-primary hover:opacity-80 justify-center font-semibold border-white text-white w-[150px] h-12"
            >
              Get in touch
            </button>
          </NavLink>
            
          </div>
        </MobileNav>}
      </Navbar>
    </div>
  );
}