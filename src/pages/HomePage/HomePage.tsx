import React from "react";

import "./HomePage.scss";
import THomeHeader from "../../components/templates/t-home-header/THomeHeader";
import THomeSider from "../../components/templates/t-home-sider/THomeSider";
import THomeBody from "../../components/templates/t-home-body/THomeBody";
import OLeftNavBar from "../../components/organisms/o-left-navbar/OLeftNavBar";
import THomesiderRight from "../../components/templates/t-home-sider-right/THomeSiderRight";



const Home: React.FC = () => {

  return (
    <div className="home-layout">
      <THomeHeader />

      <div className="home-body">
        <OLeftNavBar className="o-left-navbar" />
        <THomeSider />
        <div className="home-body-content">
          <THomeBody />
        </div>

        <THomesiderRight />
      </div>
    </div>

   
  );
};

export default Home;
