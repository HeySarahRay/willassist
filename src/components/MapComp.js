import React, { Component } from "react";

export default class MapComp extends Component {
  render() {
    return (
      <div
        id="map"
        role="application"
        aria-label="Map Application"
        style={{ float: "right", width: "75vw", height: "100vh" }}
      />
    );
  }
}
