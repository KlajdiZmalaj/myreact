import React, { Component } from "react";
import Header from "./header.jsx";
import img4 from "../images/contactpaper.jpg";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import { Link } from "react-router-dom";
import Wigle from "./navWigle";
import workWig from "../images/work.png";
import aboutWig from "../images/about.png";
import contactWig from "../images/contact.png";
import Footer from "./footer";
class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  style = {
    backgroundColor: "#566862",
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isDark, setTheme } = this.props;
    return (
      <React.Fragment>
        <Header
          isDark={isDark}
          setTheme={setTheme}
          src={img4}
          cover={this.style}
          nameH="aboutCC"
        />
        <section className="contactpage">
          <div className="mail">
            <img src={mail} alt="" />
            <div className="info">
              <div className="heading">
                Here is my email addres. I look forward to hearing you
              </div>
              <a href="mailto:klajdizmalaj@icloud.com">
                klajdizmalaj@icloud.com
              </a>
            </div>
          </div>

          <div className="phone">
            <img src={phone} alt="" />
            <div className="info">
              <div className="heading">Here is my phone number</div>
              <a href="tel:+355682277167">355682277167</a>
            </div>
          </div>
        </section>
        <section className="wigs">
          <Link to="/">
            <Wigle wigIMG={workWig} wigTXT="Home" />
          </Link>
          <Link to="/about">
            <Wigle wigIMG={aboutWig} wigTXT="About" />
          </Link>
          <Link to="/contact">
            <Wigle wigIMG={contactWig} wigTXT="Contact" />
          </Link>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
