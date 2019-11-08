import React, { Component } from "react";
// import $ from "jquery";
import Header from "./header.jsx";
import img2 from "../images/workpaper.png";
import WorkProjects from "./projectsFloats/workprojects";
import ScrollAnimation from "react-animate-on-scroll";
import Swiper from "react-id-swiper";
import Wigle from "./navWigle";
import { Link } from "react-router-dom";
import workWig from "../images/work.png";
import aboutWig from "../images/about.png";
import contactWig from "../images/contact.png";
import Footer from "./footer";
import $ from "jquery";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsWork: [],
      slides: []
    };
  }
  style = {
    backgroundColor: "#EC5656"
  };
  componentDidMount() {
    $(window).scrollTop(0);
    fetch("https://api.npoint.io/bda35451fcd7c177a220")
      .then(projectsALL => projectsALL.json())
      .then(projectsALL =>
        this.setState({
          projectsWork: projectsALL.projectswork,
          slides: projectsALL.slider
        })
      );
  }
  render() {
    const { projectsWork, slides } = this.state;
    let allslides = slides.map(item => {
      return (
        <div key={item.id}>
          <img
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
    let allprojects = projectsWork.map(function(project) {
      return (
        <ScrollAnimation
          animateIn={project.side === "left" ? "bounceInRight" : "bounceInLeft"}
          key={project.id}
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
