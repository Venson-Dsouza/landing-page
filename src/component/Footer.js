import "../css/footer.css";
import facebook from "../images/icons/Facebook.png";
import twitter from "../images/icons/Twitter.png";
import linkedin from "../images/icons/Linkedin.png";
import youtube from "../images/icons/Youtube.png";
import medium from "../images/icons/Medium.png";
import pinterest from "../images/icons/Pinterest.png";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="parent-footer">
      <div>
        <div className="input-group">
          <input
            className="input-field"
            type="email"
            placeholder="Enter Your Email Here"
          />
          <button>Subscribe To Newsletter</button>
        </div>
        <span className="signup-text">
          Signup and start enjoying the benifits today!
        </span>
        <button className="signup-button">Sign Up To Lilypads</button>
        <div className="share-icon">
          <img src={facebook} alt="share-icon" />
          <img src={twitter} alt="share-icon" />
          <img src={linkedin} alt="share-icon" />
          <img src={youtube} alt="share-icon" />
          <img src={medium} alt="share-icon" />
          <img src={pinterest} alt="share-icon" />
        </div>
      </div>
      <span className="divider"></span>
      <div className="fgrid-parent">
        <div className="fgrid-item">
          <img className="footerlogo" src={logo} alt="logo" />
        </div>
        <div className="fgrid-item">
          <span className="footer-heading">Reach Us At</span>
          <p className="footer-subheading">
            6751 Columbia Gateway Dr., 3rd floor, Columbia, MD 21046
          </p>
        </div>
        <div className="fgrid-item"></div>
        <div className="fgrid-item">
          <span className="footer-heading">Network</span>
          <p className="footer-subheading">Community</p>
          <p className="footer-subheading">Investor</p>
          <p className="footer-subheading">Broker</p>
        </div>
        <div className="fgrid-item">
          <span className="footer-heading">Product</span>
          <p className="footer-subheading">Invest</p>
          <p className="footer-subheading">Discover</p>
          <p className="footer-subheading">Transact</p>
          <p className="footer-subheading">Manage</p>
        </div>
        <div className="fgrid-item">
          <span className="footer-heading">Our Story</span>
          <p className="footer-subheading">Approach</p>
          <p className="footer-subheading">About Us</p>
        </div>
        <div className="fgrid-item">
          <span className="footer-heading">Technology</span>
          <p className="footer-subheading">Artificial Intelligence</p>
          <p className="footer-subheading">Block Chain</p>
        </div>
        <div className="fgrid-item">
          <span className="footer-heading">Highlights</span>
          <p className="footer-subheading">
            Impact of COVID-19 on the food and beverage industry and the retail
            sector
          </p>
          <p className="footer-subheading">
            Commercial lending during COVID-19: navigating the impact
          </p>
        </div>
        <div className="fgrid-item">
          <span className="footer-heading">Knowledge Center</span>
          <p className="footer-subheading">Recource</p>
          <p className="footer-subheading">Blog</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
