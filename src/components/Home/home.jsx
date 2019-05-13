import React, { Component, Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div
          className="container"
          style={{ position: "absolute", top: 100, right: 0, left: 0 }}
        >
          <div className="row row-margin-bottom">
            <div className="col-md-5 no-padding lib-item" data-category="view">
              <div className="lib-panel">
                <div className="row box-shadow">
                  <div className="col-md-6">
                    <img
                      className="lib-img-show"
                      src="http://lorempixel.com/850/850/?random=123"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="lib-row lib-header">
                      Example library
                      <div className="lib-header-seperator" />
                    </div>
                    <div className="lib-row lib-desc">
                      Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                      Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1" />
            <div className="col-md-5 no-padding lib-item" data-category="ui">
              <div className="lib-panel">
                <div className="row box-shadow">
                  <div className="col-md-6">
                    <img
                      className="lib-img"
                      src="http://lorempixel.com/850/850/?random=456"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="lib-row lib-header">
                      Example library
                      <div className="lib-header-seperator" />
                    </div>
                    <div className="lib-row lib-desc">
                      Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                      Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                      Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                      Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
