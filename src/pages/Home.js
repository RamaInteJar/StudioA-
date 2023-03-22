import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/image 8.png";
import logo_1 from "../assets/Ellipse 85.png";
import logo_2 from "../assets/Rectangle 23.png";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div>
        <h1>A Digital Product Agency</h1>
        <p>
          Leading digital agency with solid design and development expertise. We
          build readymade websites, mobile applications and elaborate online
          business service
        </p>
        <button>Contact Now</button>
      </div>
      <div className="dots">
        
      </div>
      <div className="images">
        <img src={logo} alt="/" />
        <img src={logo_1} alt="/" className="Ellipse85" />
        <img src={logo_2} alt="/" className="Rectangle" />
      </div>
    </div>
  );
};

export default Home;
