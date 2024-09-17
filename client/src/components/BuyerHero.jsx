

import { useState } from "react";
import style from "./BuyerHero.module.css";
import image from "../assets/buyer.png";

export default function BuyerHero() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function redirectTohome(){
    window.location.href = '/buyer-dashboard/crop-form';
  }
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div>
        <div className={style.main}>
          <div className={style.nav}>
            <div>
              {/* Hamburger Button for Mobile */}
              <button className={style.hamburger} onClick={toggleNav}>
                ☰
              </button>
              <ul className={`${style.navLinks} ${isNavOpen ? style.show : ""}`}>
                <li>Offers</li>
                <li>Bid status</li>
                <li>Search Crop</li>
              </ul>
            </div>
            <div>
              <button className="btn btn-success" onClick={redirectTohome}>Bid Now</button>
            </div>
          </div>

          <div className={style.hero}>
            <div className={style.heroText}>
              <h1>
                Maximize Your Market Edge with Fresh, High-Quality Produce at
                Your Fingertips
              </h1>
              <p>
                Connect directly with trusted farmers for high-quality crops.
                Enjoy transparent pricing, real-time updates, and streamlined
                procurement. Enhance your market presence and secure the best
                deals with ease. Join us today and revolutionize your sourcing
                experience.
              </p>
              <button className="btn bg-warning">Connect to farmers</button>
            </div>
            <div className={style.heroImage}>
              <img src={image} width="100%" height="100%" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}