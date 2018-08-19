/**
 *
 * Page42
 *
 */

import React, { Component } from "react";

class Page42 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div style={{ color: "#6b6161", margin: "20px", position: "relative" }}>
          <div
            style={{
              height: "100px",
              borderRadius: "4px",
              textAlign: "center",
              paddingTop: "40px",
              paddingBottom: "40px"
            }}
            position="relative"
          >
            <h1
              style={{
                width: "200px",
                height: "40px",
                backgroundColor: "#b9b9b9",
                position: "absolute",
                left: "0px"
              }}
              position="absolute"
            >
              <span>Empty h1</span>
            </h1>
            <h1
              style={{
                width: "200px",
                height: "40px",
                backgroundColor: "#b9b9b9",
                position: "absolute",
                left: "50%"
              }}
            >
              <span>Empty h1</span>
            </h1>
            <h1
              style={{
                width: "200px",
                height: "40px",
                backgroundColor: "#b9b9b9",
                position: "absolute",
                right: "0px"
              }}
            >
              <span>Empty h1</span>
            </h1>
            <div />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "80px",
                alignItems: "center",
                backgroundColor: "#4d4d4d",
                borderRadius: "4px",
                width: "50%",
                marginTop: "40px"
              }}
            >
              <span>title</span>
            </div>
          </div>
          <div />
          <div
            style={{ marginTop: "40px", height: "300px", position: "relative" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "20px",
                alignItems: "center",
                backgroundColor: "#d4d4d4",
                borderRadius: "4px",
                width: "20%",
                paddingRight: "10px"
              }}
            >
              <span>title2</span>
            </div>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page42;
