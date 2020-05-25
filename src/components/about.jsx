import React, { Component } from "react";
// import $ from "jquery";
import Header from "./header.jsx";
import img3 from "../images/aboutpaper.png";
import Wigle from "./navWigle";
import { Link } from "react-router-dom";
import workWig from "../images/work.png";
import aboutWig from "../images/about.png";
import contactWig from "../images/contact.png";
import Footer from "./footer";
import { FaDownload } from "react-icons/fa";
import $ from "jquery";
class About extends Component {
  style = {
    backgroundColor: "#566862",
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    $(window).scrollTop(0);
  }
  //
  render() {
    return (
      <div>
        <Header src={img3} cover={this.style} nameH="aboutC" />
        <section className="aboutpage">
          <div className="heading">
            Looking for a strategist and experienced web developer?
          </div>
          <div className="info">
            <p>I've always been passionate about website development.</p>
            <p>
              Since I was very young I started playing with codes, in the 9th
              grade i created my first website.
            </p>
            <p>
              One year later I decided to join a professional school, an ICT
              school where there I learned about web developing.
            </p>
            <p>
              Now I'm working as a Front End Devloper in a company in Albania
            </p>
            <p>
              I know how to use languages like : HTML5 (semantic),CSS
              (css3/Scss/SaSS/bootstrap v3-v4), JavaScript (jQuery library,React
              JS) ,SQL,PHP and as a graphic designer I can use app like
              Photoshop and Illustrator.
            </p>
          </div>
          <a
            target="_blank"
            href="http://klajdizmalaj.com/assets/cvenglish.pdf"
            className="cvBTN"
          >
            Download a copy of my CV <FaDownload />
          </a>
        </section>
        <section className="wigs">
          <Link to="/">
            <Wigle wigIMG={workWig} wigTXT="Home" />
          </Link>
          <Link to="/work">
            <Wigle wigIMG={aboutWig} wigTXT="Work" />
          </Link>
          <Link to="/contact">
            <Wigle wigIMG={contactWig} wigTXT="Contact" />
          </Link>
        </section>
        <Footer />
      </div>
    );
  }
}

export default About;
