import React from 'react';
import img1 from '../assets/pexels-erikscheel-95425.jpg';
import img2 from '../assets/pexels-kelly-1179532-2382904.jpg';
import img3 from '../assets/pexels-pixabay-50707.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import './FarmerGovt.css'; // Assuming you have a separate CSS file for styling

const FarmerGovt = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid" style={{ padding: "140px 0" }}>
      <div className="heading">
        <h2 style={{ margin: "0 0 20px", fontSize: "70px", color: "#333333", textAlign: "center", fontWeight: "900", padding: "50px 0" }}>
          GOVERNMENT <span style={{ color: "#bb8b08" }}>SCHEMES</span>
        </h2>
      </div>
      <div className="row" style={{ margin: "0 60px" }}>
        {/* Scheme 1 */}
        <div className="col-md-6 col-lg-4 mt-5">
          <div className="blog-grid">
            <div className="blog-grid-img position-relative">
              <img alt="Pradhan Mantri Fasal Bima Yojana" src={img1} />
            </div>
            <div className="blog-grid-text p-4">
              <h3 className="h5 mb-3">
                <a href="#!">Pradhan Mantri Fasal Bima Yojana</a>
                <span className="scheme-date">01 Jan, {currentYear}</span>
              </h3>
              <p className="description-text">
                A crop insurance scheme providing financial support to farmers suffering crop loss due to natural calamities, pests, and diseases.
              </p>
              <div className="button-container">
                <button style={{margin:"30px 0"}} className="custom-button" onClick={() => window.location.href = "#read-more-1"}>Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Scheme 2 */}
        <div className="col-md-6 col-lg-4 mt-5">
          <div className="blog-grid">
            <div className="blog-grid-img position-relative">
              <img alt="Soil Health Management Scheme" src={img2} />
            </div>
            <div className="blog-grid-text p-4">
              <h3 className="h5 mb-3">
                <a href="#!">Soil Health Management Scheme</a>
                <span className="scheme-date">15 Mar, {currentYear}</span>
              </h3>
              <p className="description-text">
                This scheme focuses on improving soil fertility and health through the use of organic inputs and sustainable practices.
              </p>
              <div className="button-container">
                <button style={{margin:"30px 0"}} className="custom-button" onClick={() => window.location.href = "#read-more-2"}>Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Scheme 3 */}
        <div className="col-md-6 col-lg-4 mt-5">
          <div className="blog-grid">
            <div className="blog-grid-img position-relative">
              <img alt="National Agriculture Market (eNAM)" src={img3} />
            </div>
            <div className="blog-grid-text p-4">
              <h3 className="h5 mb-3">
                <a href="#!">National Agriculture Market</a>
                <span className="scheme-date">20 Apr, {currentYear}</span>
              </h3>
              <p className="description-text">
                An online trading platform aimed at creating a unified national market for agricultural commodities and help farmers and buyers to buy crops
              </p>
              <div className="button-container">
                <button style={{margin:"30px 0"}} className="custom-button" onClick={() => window.location.href = "#read-more-3"}>Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Scheme 4 */}
        <div className="col-md-6 col-lg-4 mt-5">
          <div className="blog-grid">
            <div className="blog-grid-img position-relative">
              <img alt="Kisan Credit Card Scheme" src={img4} />
            </div>
            <div className="blog-grid-text p-4">
              <h3 className="h5 mb-3">
                <a href="#!">Kisan Credit Card Scheme</a>
                <span className="scheme-date">30 May, {currentYear}</span>
              </h3>
              <p className="description-text">
                Provides farmers with timely access to credit for agricultural activities, including purchasing inputs and crop insurance.
              </p>
              <div className="button-container">
                <button style={{margin:"30px 0"}} className="custom-button" onClick={() => window.location.href = "#read-more-4"}>Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Scheme 5 */}
        <div className="col-md-6 col-lg-4 mt-5">
          <div className="blog-grid">
            <div className="blog-grid-img position-relative">
              <img alt="Rural Infrastructure Development Fund (RIDF)" src={img5} />
            </div>
            <div className="blog-grid-text p-4">
              <h3 className="h5 mb-3">
                <a href="#!">Rural Infrastructure Development Fund</a>
                <span className="scheme-date">05 Jun, {currentYear}</span>
              </h3>
              <p className="description-text">
                Supports infrastructure development in rural areas, including irrigation, roads, and rural markets and also help them to grow there business.
              </p>
              <div className="button-container">
                <button style={{margin:"30px 0"}} className="custom-button" onClick={() => window.location.href = "#read-more-5"}>Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Scheme 6 */}
        <div className="col-md-6 col-lg-4 mt-5">
          <div className="blog-grid">
            <div className="blog-grid-img position-relative">
              <img alt="Mission for Integrated Development of Horticulture (MIDH)" src={img6} />
            </div>
            <div className="blog-grid-text p-4">
              <h3 className="h5 mb-3">
                <a href="#!">Mission for Development Horticulture</a>
                <span className="scheme-date">15 Jul, {currentYear}</span>
              </h3>
              <p className="description-text">
                Aims to promote holistic growth and development of the horticulture sector in India by Integrated Development of Horticulture.
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

export default FarmerGovt;
