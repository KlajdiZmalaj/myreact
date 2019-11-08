import React, { Component } from "react";
import $ from "jquery";
import Header from "./header";
import img1 from "../images/homepaper.png";
import mypic from "../images/mypic2.png";
import Wigle from "./navWigle";
import { Link } from "react-router-dom";
import workWig from "../images/work.png";
import aboutWig from "../images/about.png";
import contactWig from "../images/contact.png";
import HomeProjects from "./projectsFloats/homeprojects";

import ScrollAnimation from "react-animate-on-scroll";
import Loader from "../components/loading";
import thanks from "../images/thanks.png";
import Footer from "./footer";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsHome: []
    };
  }
  componentDidMount() {
    $(window).scrollTop(0);
    $(".kz7Loader").css({
      display: "flex"
    });
    $("body").css({
      "overflow-y": "hidden"
    });
    setTimeout(function() {
      $(".kz7Loader").css({
        display: "none"
      });
      $("body").css({
        "overflow-y": "scroll"
      });
    }, 1000);
    fetch("https://api.npoint.io/bda35451fcd7c177a220")
      .then(projectsALL => projectsALL.json())
      .then(projectsALL =>
        this.setState({ projectsHome: projectsALL.projects })
      );
  }

  render() {
    const { projectsHome } = this.state;
    let allprojects = projectsHome.map(function(project) {
      return (
        <HomeProjects
          key={project.id}
          proIMG={project.img}
          title={project.title}
          desc={project.desc}
          link={project.link}
          side={project.side}
        />
      );
    });

    return (
      <div>
        <Loader />
        <Header src={img1} nameH="aboutH" />
        <h1 className="heading1">
          LOOKING FOR A STRATEGIST AND EXPERIENCED WEB DESIGNER?
        </h1>
        <h2 className="heading2">
          I am a Web Designer, living in Tirana. <br /> I have been living my
          dream of being a designer.
        </h2>
        <div className="myPic">
          <img src={mypic} alt="" />
        </div>
        <section className="wigs">
          <Link to="/work">
            <Wigle wigIMG={workWig} wigTXT="Work" />
          </Link>
          <Link to="/about">
            <Wigle wigIMG={aboutWig} wigTXT="About" />
          </Link>
          <Link to="/contact">
            <Wigle wigIMG={contactWig} wigTXT="Contact" />
          </Link>
        </section>
        <section className="recentProjects">
          <h1 className="recentHeader">Recent Projects</h1>
          {allprojects}
        </section>
        <ScrollAnimation animateIn="tada" animateOnce={true}>
          <section className="thanksSection">
            <h2>THANKS FOR STOPPING BY</h2>
            <img src={thanks} alt="" />
          </section>
        </ScrollAnimation>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
