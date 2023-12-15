import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logoImg from '../../assets/st/logotype.png'

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#000000");
        setTextColor("#8D8D8D");
      } else {
        setColor("transparent");
        setTextColor("#8D8D8D");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-center items-center p-4 text-[#8D8D8D]">
        
          {/*<Link href="/">

              <Image
                src={logoImg}
                alt="/"
                className="h-auto"
                width={100}
                height={100}
              />
            
          </Link>*/}

        
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex font-bold uppercase">
          <li className="p-4 hover:text-[#BE2627]">
            <Link href="/">
              ínicio
            </Link>
          </li>
          <li className="p-4 hover:text-[#BE2627]">
            <Link href="/#portfolio">Sobre</Link>
          </li>
          <li className="p-4 hover:text-[#BE2627]">
            <Link href="/#gallery">Galeria</Link>
          </li>
          <li className="p-4 hover:text-[#BE2627]">
            <Link href="/#portfolio">Personagens</Link>
          </li>
          <li className="p-4 hover:text-[#BE2627]">
            <Link href="/#portfolio">Notícias</Link>
          </li>
         
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#portfolio">History</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
