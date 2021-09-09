import React,{Component} from "react";
import Header from "./header.jsx";
import img3 from "../images/aboutpaper.png";
import Wigle from "./navWigle";
import {Link} from "react-router-dom";
import workWig from "../images/work.png";
import aboutWig from "../images/about.png";
import contactWig from "../images/contact.png";
import Footer from "./footer";
import {FaDownload} from "react-icons/fa";
class About extends Component {
  style={
    backgroundColor: "#566862",
  };
  constructor(props) {
    super(props);
    this.state={};
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  //
  render() {
    const {isDark,setTheme}=this.props;
    return (
      <React.Fragment>
        <Header
          isDark={isDark}
          setTheme={setTheme}
          src={img3}
          cover={this.style}
          nameH="aboutC"
        />
        <section className="aboutpage">
          <div className="heading">
            Looking for a strategist and experienced Front-End developer?
          </div>
          <div className="info">
            <p>I've always been passionate about website development.</p>
            <p>
              Since I was very young I started playing with codes, in the 9th
              grade I created my first website.
            </p>

            <p>
              Now I'm working as a Front End Devloper in a company in Albania
              and on my freelance project I work as a MERN stack developer.
            </p>
            <p>
              I'm used with languaes like: HTML5 (semantic),CSS
              (css3/Scss/SaSS/bootstrap v3-v4), JavaScript (React JS, jQuery
              library), NodeJS , ExpressJS, MangoDB and as a graphic designer I
              can use app like Photoshop , Illustrator , AdobeXD.
            </p>
          </div>
          <a
            target="_blank"
            href="/static/cvenglish.pdf"
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
      </React.Fragment>
    );
  }
}

export default About;
