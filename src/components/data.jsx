import React, { Component } from "react";
import Header from "./header.jsx";
import axios from "axios";
export class data extends Component {
  state = {
    posts: [],
    loaded: false,
    create: false,
    createTitle: "",
    logged: false,
  };
  delete = (url, id) => {
    return axios.post(`https://klajdi-backend.herokuapp.com/api/${url}`, {
      id,
    });
  };
  create = () => {};
  getAll = async () => {
    this.setState({ loaded: false });
    const posts = await axios.get(
      "https://klajdi-backend.herokuapp.com/api/home/posts",
      {}
    );
    const posts2 = await axios.get(
      "https://klajdi-backend.herokuapp.com/api/work/posts",
      {}
    );
    const slides = await axios.get(
      "https://klajdi-backend.herokuapp.com/api/work/slides",
      {}
    );
    console.log("posts", posts.data);
    if (posts.data) {
      this.setState({
        posts: posts.data,
        posts2: posts2.data,
        slides: slides.data,
        loaded: true,
      });
    }
  };
  componentDidMount() {
    this.getAll();
  }

  render() {
    const { isDark, setTheme } = this.props;
    const { loaded, posts, posts2, slides, create, createTitle } = this.state;
    return !this.state.logged ? (
      <div>
        <input
          type="text"
          onChange={(e) => {
            if (e.target.value === "666") {
              this.setState({ logged: true });
            }
          }}
        />
      </div>
    ) : (
      <>
        <Header
          isDark={isDark}
          setTheme={setTheme}
          src={""}
          cover={this.style}
          nameH="aboutC"
        />
        {create && (
          <div className="createPP">
            <div>
              create : {createTitle}{" "}
              <button onClick={() => this.setState({ create: false })}>
                X
              </button>
            </div>
            {createTitle === "homeProject" || createTitle === "workProject" ? (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const { id, img, desc, link, side, title, tech } = this.state;
                  const req = await axios.post(
                    `https://klajdi-backend.herokuapp.com/api/${
                      createTitle === "homeProject" ? "home" : "work"
                    }/post`,
                    {
                      id,
                      img,
                      desc,
                      link,
                      side,
                      title,
                      tech,
                    }
                  );
                  this.getAll();
                }}
              >
                <span>id</span>
                <input
                  type="text"
                  value={this.state.id || ""}
                  onChange={(e) => {
                    this.setState({ id: e.target.value });
                  }}
                />
                <span>img</span>
                <input
                  value={this.state.img || ""}
                  type="text"
                  onChange={(e) => {
                    this.setState({ img: e.target.value });
                  }}
                />
                <span>desc</span>
                <input
                  value={this.state.desc || ""}
                  type="text"
                  onChange={(e) => {
                    this.setState({ desc: e.target.value });
                  }}
                />
                <span>link</span>
                <input
                  value={this.state.link || ""}
                  type="text"
                  onChange={(e) => {
                    this.setState({ link: e.target.value });
                  }}
                />
                <span>tech</span>
                <input
                  value={this.state.tech || ""}
                  type="text"
                  onChange={(e) => {
                    this.setState({ tech: e.target.value });
                  }}
                />
                <span>side</span>
                <input
                  value={this.state.side || ""}
                  type="text"
                  onChange={(e) => {
                    this.setState({ side: e.target.value });
                  }}
                />
                <span>title</span>
                <input
                  value={this.state.title || ""}
                  type="text"
                  onChange={(e) => {
                    this.setState({ title: e.target.value });
                  }}
                />
                <button type="submit">OK</button>
              </form>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const { id, slide } = this.state;
                  const req = await axios.post(
                    `https://klajdi-backend.herokuapp.com/api/work/postSlide`,
                    {
                      id,
                      slide,
                    }
                  );
                  this.getAll();
                }}
              >
                <span>id</span>
                <input
                  type="text"
                  onChange={(e) => {
                    this.setState({ id: e.target.value });
                  }}
                />
                <span>slide</span>
                <input
                  type="text"
                  onChange={(e) => {
                    this.setState({ slide: e.target.value });
                  }}
                />
                <button type="submit">OK</button>
              </form>
            )}
          </div>
        )}
        <div className="dataContainer">
          {!loaded && <h1>Loading...</h1>}

          <h2>
            home projects{" "}
            <button
              onClick={() => {
                this.setState({ create: true, createTitle: "homeProject" });
              }}
            >
              +
            </button>{" "}
          </h2>
          <ul>
            {(posts || []).map((post) => (
              <li key={post.id}>
                id : {post.id},title : {post.title}{" "}
                <button
                  onClick={async () => {
                    await this.delete("home/deletePost", post.id);
                    this.getAll();
                  }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>

          <h2>
            work projects{" "}
            <button
              onClick={() => {
                this.setState({ create: true, createTitle: "workProject" });
              }}
            >
              +
            </button>{" "}
          </h2>
          <ul>
            {(posts2 || [])
              .sort(function (a, b) {
                return a.id - b.id;
              })
              .map((post) => (
                <li key={post.id}>
                  id : {post.id},title : {post.title}{" "}
                  <button
                    onClick={async () => {
                      await this.delete("work/deletePost", post.id);
                      this.getAll();
                    }}
                  >
                    X
                  </button>
                  <button
                    onClick={() => {
                      this.setState({
                        create: true,
                        createTitle: "workProject",
                        id: post.id,
                        img: post.img,
                        desc: post.desc,
                        link: post.link,
                        side: post.side,
                        title: post.title,
                        tech: post.tech,
                      });
                    }}
                  >
                    Edit
                  </button>
                </li>
              ))}
          </ul>

          <h2>
            slides{" "}
            <button
              onClick={() => {
                this.setState({ create: true, createTitle: "slides" });
              }}
            >
              +
            </button>{" "}
          </h2>
          <ul>
            {(slides || [])
              .sort(function (a, b) {
                return a.id - b.id;
              })
              .map((slide) => (
                <li key={slide.id}>
                  id : {slide.id},title : {slide.slide}{" "}
                  <button
                    onClick={async () => {
                      await this.delete("work/deleteSlide", slide.id);
                      this.getAll();
                    }}
                  >
                    X
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
}

export default data;
