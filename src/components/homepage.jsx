import React, { Component } from "react";
import Header from "./header";
import img1 from "../images/homepaper.png";
import mypic from "../images/mypic.jpg";
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
import axios from "axios";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsHome: [],
      isLoading: true,
    };
  }
  async componentDidMount() {
    window.scrollTo(0, 0);
    //https://klajdi-backend.herokuapp.com/api/projects
    this.setState({ isLoading: true });
    const posts = await axios.get(
      "https://klajdi-backend.herokuapp.com/api/home/posts",
      {}
    );
    const _ = this;
    setTimeout(() => {
      _.setState({ isLoading: false });
    }, 1000);
    this.setState({ projectsHome: posts.data });
  }

  render() {
    const { projectsHome, isLoading } = this.state;
    const { isDark, setTheme } = this.props;
    let allprojects = projectsHome.map(function (project) {
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
    if (isLoading) {
      document.body.classList.add("scrollRemove");
    } else {
      document.body.classList.remove("scrollRemove");
    }
    return (
      <React.Fragment>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header
              isDark={isDark}
              setTheme={setTheme}
              src={img1}
              nameH="aboutH"
            />
            <h1 className="heading1">
              LOOKING FOR A STRATEGIST AND EXPERIENCED WEB DEVELOPER?
            </h1>
            <h2 className="heading2">
              I am a Web Developer, living in Tirana. <br /> I have been living
              my dream of being a developer.
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
          </>
        )}
      </React.Fragment>
    );
  }
}

export default Homepage;
