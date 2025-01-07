import MIconButton from "../../molecules/m-icon-button/MIconButton";
import { FiGrid, FiUsers, FiShoppingBag } from "react-icons/fi";
import "./OLeftNavBar.scss";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { GrGroup } from "react-icons/gr";
import { PiFlagPennant } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import {isMobile} from "react-device-detect"
import classNames from "classnames";

function OLeftNavBar({ className }: { className: string }) {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log(window.scrollY); 
    };
  }, []);

  return (
    <div className={classNames("o-leftside", { sticky: isSticky }, className) } style={{top: isMobile ? "-100px" : "0"}}>
      <div className="o-left-navbar">
        <MIconButton
          className="iconButton"
          Icon={<FiGrid color="black" />}
        ></MIconButton>

        <MIconButton
          className="iconButton"
          Icon={<HiOutlineVideoCamera color="black" />}
        ></MIconButton>

        <MIconButton
          className="iconButton"
          Icon={<FiUsers color="black" />}
        ></MIconButton>

        <MIconButton
          className="iconButton"
          Icon={<GrGroup color="black" />}
        ></MIconButton>

        <MIconButton
          className="iconButton"
          Icon={<PiFlagPennant color="black" />}
        ></MIconButton>

        <MIconButton
          className="iconButton"
          Icon={<FiShoppingBag color="black" />}
        ></MIconButton>

        <MIconButton
          className="iconButton"
          Icon={<IoSettingsOutline color="black" />}
        ></MIconButton>
      </div>
    </div>
  );
}

export default OLeftNavBar;
