import React from 'react';
import img1 from '../assets/pexels-erikscheel-95425.jpg';
import img2 from '../assets/pexels-kelly-1179532-2382904.jpg';
import img3 from '../assets/pexels-pixabay-50707.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import './FarmerCompany.css'; // Assuming you have a separate CSS file for styling

const FarmerCompany = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid" style={{ padding: "140px 0" }}>
      <div className="heading">
        <h2 style={{ margin: "0 0 20px", fontSize: "70px", color: "#333333", textAlign: "center", fontWeight: "900", padding: "50px 0" }}>
          COMPANIES <span style={{ color: "#bb8b08" }}>ANNOUCMENTS</span>
        </h2>
      </div>
      <div className="row" style={{ margin: "0 60px" }}>
        {/* Company 1 */}
        <div className="col-md-6 col-lg-4 mt-5">
          <div className="company-grid">
            <div className="company-grid-img position-relative">
              <img alt="Company 1" src={img1} />
            </div>
            <div className="company-grid-text p-4">
              <h3 className="h5 mb-3">
                <a href="#!">Agrico Ltd.</a>
                <span className="company-date">01 Jan, {currentYear}</span>
              </h3>
              <p className="description-text">
                Agrico Ltd. specializes in buying a variety of crops and vegetables directly from farmers, ensuring fair prices and timely payments.
              </p>
              <div className="button-container">
                <button style={{margin:"30px 0"}} className="custom-button" onClick={() => window.location.href = "#read-more-1"}>Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Company 2 */}
        <div className="col-md-6 col-lg-4 mt-5">
          <div className="company-grid">
            <div className="company-grid-img position-relative">
              <img alt="Company 2" src={img2} />
            </div>
            <div className="company-grid-text p-4">
              <h3 className="h5 mb-3">
                <a href="#!">FarmFresh Corp.</a>
                <span className="company-date">15 Mar, {currentYear}</span>
              </h3>
              <p className="description-text">
                FarmFresh Corp. focuses on procuring high-quality vegetables and fruits from local farmers to supply to major retail chains.
              </p>
              <div className="button-container">
                <button style={{margin:"30px 0"}} className="custom-button" onClick={() => window.location.href = "#read-more-2"}>Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Company 3 */}
        <div className="col-md-6 col-lg-4 mt-5">
          <div className="company-grid">
            <div className="company-grid-img position-relative">
              <img alt="Company 3" src={img3} />
            </div>
            <div className="company-grid-text p-4">
              <h3 className="h5 mb-3">
                <a href="#!">GreenHarvest Inc.</a>
                <span className="company-date">20 Apr, {currentYear}</span>
              </h3>
              <p className="description-text">
                GreenHarvest Inc. is dedicated to sourcing fresh produce from farmers and providing them with a reliable marketplace.
              </p>
              <div className="button-container">
                <button style={{margin:"30px 0"}} className="custom-button" onClick={() => window.location.href = "#read-more-3"}>Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Company 4 */}
        <div className="col-md-6 col-lg-4 mt-5">
          <div className="company-grid">
            <div className="company-grid-img position-relative">
              <img alt="Company 4" src={img4} />
            </div>
            <div className="company-grid-text p-4">
              <h3 className="h5 mb-3">
                <a href="#!">EcoVeg Supply</a>
                <span className="company-date">30 May, {currentYear}</span>
              </h3>
              <p className="description-text">
                EcoVeg Supply focuses on organic vegetables and fruits, buying directly from farmers who practice sustainable agriculture.
              </p>
              <div className="button-container">
                <button style={{margin:"30px 0"}} className="custom-button" onClick={() => window.location.href = "#read-more-4"}>Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Company 5 */}
        <div className="col-md-6 col-lg-4 mt-5">
          <div className="company-grid">
            <div className="company-grid-img position-relative">
              <img alt="Company 5" src={img5} />
            </div>
            <div className="company-grid-text p-4">
              <h3 className="h5 mb-3">
                <a href="#!">Harvest Partners</a>
                <span className="company-date">05 Jun, {currentYear}</span>
              </h3>
              <p className="description-text">
                Harvest Partners works closely with farmers to ensure a steady supply of high-quality crops and vegetables to wholesale markets.
              </p>
              <div className="button-container">
                <button style={{margin:"30px 0"}} className="custom-button" onClick={() => window.location.href = "#read-more-5"}>Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Company 6 */}
        <div className="col-md-6 col-lg-4 mt-5">
          <div className="company-grid">
            <div className="company-grid-img position-relative">
              <img alt="Company 6" src={img6} />
            </div>
            <div className="company-grid-text p-4">
              <h3 className="h5 mb-3">
                <a href="#!">AgriTrade Solutions</a>
                <span className="company-date">15 Jul, {currentYear}</span>
              </h3>
              <p className="description-text">
                AgriTrade Solutions offers a comprehensive platform for farmers to sell their produce directly to various buyers and retailers.
              </p>
              <div className="button-container">
                <button style={{margin:"30px 0"}} className="custom-button" onClick={() => window.location.href = "#read-more-6"}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerCompany;
