import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MdPhone, MdMailOutline } from "react-icons/md";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import imglogo from "../images/logokwhite.png";
import {
  IoLogoInstagram,
  IoLogoYoutube,
  IoIosSunny,
  IoIosMoon,
} from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  changeTheme = () => {
    if (this.props.isDark) {
      this.props.setTheme(false);
    } else {
      this.props.setTheme(true);
    }
  };
  handleClick = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };
  render() {
    if (this.props.isDark) {
      document.body.classList.add("dk");
    } else {
      document.body.classList.remove("dk");
    }
    return (
      <header>
        <div
          onClick={() => this.setState({ isNavOpen: false })}
          className={"backdrop" + (this.state.isNavOpen ? " on" : "")}
        ></div>
        <nav className="header">
          <div className="iconsLeft">
            <a href="tel:+355 68 2277167">
              <MdPhone className="phone" />
            </a>
            <a href="mailto:klajdizmalaj@icloud.com">
              <MdMailOutline className="email" />
            </a>
          </div>
          <div onClick={this.changeTheme} className="themChange">
            {!this.props.isDark ? (
              <span className="dark">
                <IoIosMoon />
              </span>
            ) : (
              <div className="light">
                <IoIosSunny />
              </div>
            )}
          </div>
          <div className="iconsright">
            <button onClick={this.handleClick} className="ToggNav">
              <span>Menu</span>
              {this.state.isNavOpen ? (
                <IoMdClose className="menuclose" />
              ) : (
                <IoMdMenu className="menuopen" />
              )}
            </button>
          </div>
          <div className={"sidenav" + (this.state.isNavOpen ? " show" : "")}>
            <div className="logoNav">
              <img src={imglogo} alt="" />
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <div className="social">
                <a href="https://www.linkedin.com/in/klajdi-z-42b582142/">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/klajdizmalaj/">
                  <IoLogoInstagram />
                </a>
                <a href="https://www.youtube.com/user/0bTECH0">
                  <IoLogoYoutube />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className={this.props.nameH + " cover"} style={this.props.cover}>
          <img src={this.props.src} alt="" />
        </div>
      </header>
    );
  }
}

export default Header;
