import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import NavBar from "../NavBar/NavBar";
import "./home.css";

class Home extends Component {
  render() {
    const { blogs } = this.props;
    if (!blogs) {
      return <div> </div>;
    }

    return (
      <Fragment>
        <NavBar />
        <div
          className="container"
          style={{ position: "absolute", top: 100, right: 20, left: 0 }}
        >
          <div className="row row-margin-bottom">
            {blogs.map(post => (
              <div
                className="col-md-5 no-padding lib-item"
                data-category="view"
              >
                <div className="lib-panel">
                  <div className="row box-shadow">
                    <div className="col-md-6">
                      <img className="lib-img" src={post.cover} />
                    </div>
                    <div className="col-md-6">
                      <div className="lib-row lib-header">
                        {post.title}
                        <div className="lib-header-seperator" />
                      </div>
                      <div className="lib-row lib-desc">{post.text}</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-1" />
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export const mapStateToProps = ({ blogs: { blogs } }) => ({
  blogs
});

export default connect(mapStateToProps)(Home);
