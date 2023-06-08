import "./App.css";
import logo from "../src/images/logo.png";
import Ellipse from "../src/images/Ellipse.png";
import phone1 from "../src/images/phone1.png";
import phone1hover from "../src/images/phone1hover.png";
import phone2 from "../src/images/phone2.png";
import investor from "../src/images/icons/investor.png";
import decisions from "../src/images/icons/decisions.png";
import manager from "../src/images/icons/manager.png";
import optimize from "../src/images/icons/optimize.png";
import subs from "../src/images/icons/subs.png";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <div className="navigation-parent">
        <div className="navigation">
          <img
            src={Ellipse}
            style={{ position: "absolute", zIndex: -1 }}
            alt="background"
          />
          <img
            src={logo}
            alt="logo"
            style={{
              position: "absolute",
              left: "5%",
              top: "4%",
              height: "54px",
              width: "94px",
            }}
          />
          <div
            style={{
              position: "absolute",
              display: "flex",
              left: "15%",
              top: "8%",
              width: "640px",
              fontSize: "14px",
              color: "#2F3130",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a href="/" style={{ color: "#7C5AC7" }}>
                Home
              </a>
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ alignSelf: "center", paddingTop: "5px" }}
              >
                <circle cx="3" cy="3" r="3" fill="#7C5AC7" />
              </svg>
            </div>
            <a href="/">Network</a>
            <a href="/">Product</a>
            <a href="/">Technology</a>
            <a href="/">Our Story</a>
            <a href="/">Knowledge Center</a>
          </div>
          <div
            style={{
              position: "absolute",
              width: "23px",
              height: "0px",
              left: "75px",
              top: "207px",
              border: "2px solid #9E2349",
            }}
          ></div>
          <div className="text-box">
            <p className="welcome">Welcome to the</p>
          </div>
          <h1 className="big-text">
            Unprecedented <br></br> Era of{" "}
            <span style={{ color: "#9E2349", fontFamily: "DM Serif Display" }}>
              Real Estate <br></br> Investing
            </span>
          </h1>
          <p className="small-text">
            Lilypads uses sophisticated technologies for data-driven decisions
            in investing, managing and funding commercial real estate assets
          </p>
          <button className="invest-button">
            Start Investing Now{"  "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4768 9.16664L9.00683 4.69664L10.1852 3.51831L16.6668 9.99998L10.1852 16.4816L9.00683 15.3033L13.4768 10.8333H3.3335V9.16664H13.4768Z"
                fill="white"
              />
            </svg>
          </button>
          <div className="counts">
            <span>
              658+
              <p>Properties Registered</p>
            </span>
            <span>
              685+
              <p>Deals Cracked</p>
            </span>
            <span>
              255+
              <p>Investors</p>
            </span>
          </div>
        </div>

        <div className="nav-buttons">
          <button href="#" className="button1">
            Contact Us
          </button>
          <button href="#" className="button2">
            Login
          </button>
        </div>
      </div>
      <img src={phone1} className="phone1" alt="phone" />
      <img src={phone1hover} className="phone1hover" alt="phone hover" />
      <img src={phone2} className="phone2" alt="phone" />
      <div className="grid-parent">
        <div className="grid-item">
          <span
            style={{
              position: "absolute",
              width: "23px",
              height: "4px",
              left: "90px",
              top: "1021px",
              backgroundColor: "#9E2349",
            }}
          ></span>
          <span className="text-box" style={{ left: "90px", top: "995px" }}>
            <p className="welcome">About Us</p>
          </span>
          <p className="about-text">
            Lillypad is the only Real Estate Investment tool you need for your
            business
          </p>
        </div>
        <div className="grid-item">
          <span className="col-title">
            <img src={investor} alt="investor icon" />
            Become a Data-Driven Investor
          </span>
          <span className="col-brief">
            Lilypads is the cloud-based real estate investment platform that
            helps you make data-driven investment decisions and assists with
            reaching your long term investment objectives.
          </span>
        </div>
        <div className="grid-item">
          <span className="col-title">
            <img src={decisions} alt="decisions icon" />
            Lilypads can help you make smarter decisions.
          </span>
          <span className="col-brief">
            Streamline your investment evaluation process and collaborate in
            reaching your long term investment objectives.
          </span>
        </div>
        <div className="grid-item">
          <span className="col-title">
            <img src={manager} alt="manager icon" />
            Manager Due Diligence
          </span>
          <span className="col-brief">
            Evaluate managers against your objectives using traditional risk
            metrics with the addition of factor analysis. All it takes is a set
            of returns.
          </span>
        </div>
        <div className="grid-item">
          <span className="col-title">
            <img src={optimize} alt="optimize icon" />
            Optimize Asset Allocation
          </span>
          <span className="col-brief">
            Understand the underlying risk drivers in your portfolio using the
            Lilypads analysis factors and then optimize that portfolio based on
            objectives.
          </span>
        </div>
        <div className="grid-item">
          <span className="col-title">
            <img src={subs} alt="subs icon" />
            Our Subscribers
          </span>
          <span className="col-brief">
            Serving a constellation of global subscribers Pension funds, Funds
            of Funds, Banks, Family offices, Asset managers, Wealth Managers.
          </span>
        </div>
        <hr className="horizontal-line"></hr>
        <hr className="vr-line1"></hr>
        <hr className="vr-line2"></hr>
      </div>

      <Footer />
    </div>
  );
}

export default App;
