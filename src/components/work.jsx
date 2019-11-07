import React, { Component } from "react";
// import $ from "jquery";
import Header from "./header.jsx";
import img2 from "../images/workpaper.png";
import projectswork from "./projectsFloats/projectwork.js";
import WorkProjects from "./projectsFloats/workprojects";
import ScrollAnimation from "react-animate-on-scroll";
import Swiper from "react-id-swiper";
import sliderImgNames from "./projectsFloats/slider";
import Wigle from "./navWigle";
import { Link } from "react-router-dom";
import workWig from "../images/work.png";
import aboutWig from "../images/about.png";
import contactWig from "../images/contact.png";
import Footer from "./footer";
import $ from "jquery";
let allprojects = projectswork.map(function(project) {
  return (
    <ScrollAnimation
      animateIn={project.side === "left" ? "bounceInRight" : "bounceInLeft"}
    >
      <WorkProjects
        key={project.id}
        proIMG={project.img}
        title={project.title}
        desc={project.desc}
        link={project.link}
        side={project.side}
        tech={project.tech}
      />
    </ScrollAnimation>
  );
});
let allslides = sliderImgNames.map(item => {
  return (
    <div>
      <img
        key={item.id}
        src={"http://klajdizmalaj.com/img/designs/" + item.slide}
        alt=""
      />
    </div>
  );
});
const SimpleSwiperWithParams = () => {
  const params = {
    pagination: {
      loop: true,
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      420: {
        slidesPerView: 1
      }
    },
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  return <Swiper {...params}>{allslides}</Swiper>;
};

class Work extends Component {
  style = {
    backgroundColor: "#EC5656"
  };
  constructor(props) {
    super(props);
    this.state = {};
    this.myRef = React.createRef();
  }
  componentDidMount() {
    $(window).scrollTop(0);
  }
  render() {
    return (
      <div className="workpage" ref={this.myRef}>
        <Header src={img2} cover={this.style} nameH="aboutW" />
        <span className="heading">
          Here you can find some of my projects that I have created
        </span>
        <section className="workProjects">{allprojects}</section>
        <span className="heading">
          Here you can find some of my designs that I have made
        </span>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="designs">
            <SimpleSwiperWithParams />
          </div>
        </ScrollAnimation>
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
      </div>
    );
  }
}

export default Work;
