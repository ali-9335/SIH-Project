import "./Nav.module.css";
import farmerImg from "../assets/company farmer.png";

function redirectToRegister() {
  window.location.href = "/register";
}

export default function Nav() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          style={{ 
            height: "10vh", padding: "0 15px" ,width:"100vw",
            background: "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)",
            overflow:"hidden"}}
        >
          <div className="container-fluid" style={{fontSize:"1.5rem"}}>
            <a className="navbar-brand" href="#">
              <img src= {farmerImg} alt="Logo" style={{ height: "100px"}} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Access to market
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Company contracts
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dynamic bidding
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
                <button className="btn btn-outline-success" style={{padding:"8px 30px" , fontSize:"25px"}} onClick={redirectToRegister}>
                  Sign Up
                </button>
              
            </div>
          </div>
        </nav>
  
        <style jsx>{`
          @media (max-width: 768px) {
            .navbar {
              padding: 10px;
            }
            .navbar-brand img {
              height: 35px;
            }
          }
          @media (min-width: 769px) {
            .navbar {
              padding: 20px;
            }
            .navbar-brand img {
              height: 40px;
            }
          }
        `}</style>
      </>
    );
  }