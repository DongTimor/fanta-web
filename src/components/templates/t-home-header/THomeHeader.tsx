import NImage from "../../atoms/n-Image/NImage";
import MInputSearch from "../../molecules/m-input-search/MInputSearch";
import OHeader from "../../organisms/o-header/OHeader";
import OUserCard from "../../organisms/o-user-card/OUserCard";
import {isMobile} from "react-device-detect"
import "./THomeHeader.scss";

function THomeHeader() {


  return (
    <OHeader className="t-home-header" style={{top: isMobile ? "-100px" : "0"}}>
      <div className="t-home-header-left">
        <NImage
          className="t-home-header-logo"
          shadow="sm"
          src={"src\\assets\\logoFacebook.jfif"}
          alt="logo"
        />
        <MInputSearch
          size="md"
          className="t-home-header-search"
          classNames={{ inputWrapper: "t-home-header-search-base" }}
        />
      </div>
      <OUserCard />
    </OHeader>
  );
}

export default THomeHeader;
