/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class HomePage extends Component {
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
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "400px",
                alignItems: "center",
                backgroundColor: "#d0021b",
                borderRadius: "4px",
                marginTop: "30px",
                marginBottom: "30px"
              }}
            >
              <span>img</span>
            </div>
          </div>
          <Row style={{ marginBottom: "20px" }}>
            <Column
              col={2}
              style={{
                backgroundColor: "#4a90e2",
                marginLeft: "5px",
                height: "30px"
              }}
              mCol={2}
            >
              <span>Text</span>
            </Column>
          </Row>
          <Row style={{ marginBottom: "30px" }}>
            <Column
              col={2}
              style={{
                backgroundColor: "#bbbbbb",
                height: "150px",
                marginLeft: "5px"
              }}
            >
              <span>Text</span>
            </Column>
            <Column
              col={2}
              style={{ backgroundColor: "#414141", marginLeft: "80px" }}
            >
              <div style={{ height: "200px", width: "100%" }} />
            </Column>
            <Column
              col={2}
              style={{
                backgroundColor: "#414141",
                height: "200px",
                marginLeft: "40px",
                width: "100%"
              }}
            >
              <span>Text</span>
            </Column>
            <Column
              col={2}
              style={{
                backgroundColor: "#414141",
                height: "200px",
                marginLeft: "40px",
                width: "100%"
              }}
            >
              <span>Text</span>
            </Column>
            <Column
              col={2}
              style={{
                height: "200px",
                marginLeft: "40px",
                width: "100%",
                backgroundColor: "#414141"
              }}
            >
              <span>Text</span>
            </Column>
          </Row>
          <Row>
            <Column
              col={9}
              mCol={1}
              style={{
                height: "30px",
                backgroundColor: "#111111",
                right: "0px",
                bottom: "0px",
                marginLeft: "315px"
              }}
            >
              <span />
            </Column>
          </Row>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
