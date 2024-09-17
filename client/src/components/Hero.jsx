import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Router } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function redirectToLogin() {
  window.location.href = "/login";
}

function redirectToRegister() {
  window.location.href = "/register";
}

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  return (
    <>
      <section className="hero-section" style={{   width: "100vw", height: "100vh", padding: "60px 40px", marginTop:"-100px",overflow:"scroll"}}>
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left: Vision Statement */}
            <div className="col-md-6 text-start">
              <h2 className="display-4  fw-bold" style={{fontSize:"4rem"}}>Transforming Agriculture Through Connection and Innovation</h2>
              <p className="lead" style={{color : "#666666" , fontSize:"30px"} }>
                We aim to revolutionize agriculture by connecting farmers with buyers, creating a transparent and dynamic marketplace that fosters growth, trust, and value for all.
              </p>
              <div style={{display:"flex",gap:"20px"}}>
              <button type="button" className="btn btn-success" style={{padding:"15px 45px" , fontSize:"25px"}} onClick={redirectToLogin}>Login</button>
              <button type="button" className="btn btn-success" style={{padding:"15px 45px" , fontSize:"25px"}} onClick={redirectToRegister}>Sign Up</button>
              </div>
            </div>

            {/* Right: Image Slider covering 90% Height */}
            <div className="col-md-6">
              <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-inner" style={{ height: "90%" ,borderRadius:"10%",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                  <div className="carousel-item active">
                    <img src="https://media.istockphoto.com/id/1330214182/photo/happy-smiling-indian-farmer-counting-currency-notes-inside-the-greenhouse-or-polyhouse.jpg?s=612x612&w=0&k=20&c=KF8FEcctbRfDiVQ9SkFHDQIgtU_NadPva5nqe5-vUpk=" className="d-block w-100" alt="Slide 1" style={{ height: "100%", width:"100%" ,objectFit: "cover" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="https://media.istockphoto.com/id/1316735225/photo/young-indian-agronomist-with-farmer-at-field.jpg?s=612x612&w=0&k=20&c=qcmnlRZD6ihor0myeKjMTZEFdA363l2BAi8U37tLNyA=" className="d-block w-100" alt="Slide 2" style={{ height: "100%",  width:"100%" ,objectFit: "cover" }} />
                  </div>
                  <div className="carousel-item">
                  <img src="https://media.istockphoto.com/id/1205326855/photo/indian-family-in-agricultural-field.jpg?s=612x612&w=0&k=20&c=ivRFoyJyg_tosWdCafoqU75t0xojhQKx1kXiJsbkBoc=" className="d-block w-100" alt="Slide 2" style={{ height: "100%",  width:"100%" ,objectFit: "cover" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="https://media.istockphoto.com/id/1313327152/photo/family-with-man-holding-indian-rupee-notes-on-agricultural-field.jpg?s=612x612&w=0&k=20&c=FKxbI_GffHSPomQCTYsRkU7a4YNOPcpa7Zj6G0dWgBw=" className="d-block w-100" alt="Slide 4" style={{ height: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="https://media.istockphoto.com/id/1541988636/photo/happy-indian-rural-farmer-hug-his-two-daughters-and-wife-at-agriculture-field-village-life.jpg?s=612x612&w=0&k=20&c=mLbtKetTZ8OpyolYzV3-7lG25WRyhmXIFhT6NVIAoFg=" className="d-block w-100" alt="Slide 5" style={{ height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .carousel-item img {
          object-fit: cover;
        }
        .lead {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}