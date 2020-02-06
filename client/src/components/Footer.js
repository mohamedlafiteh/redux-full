import React from "react";

export default function Footer() {
  return (
    <div style={footer}>
      <h4 style={{ marginTop: "1%", color: "black" }}>
        Created by: Mohamed Ali Lafiteh
      </h4>

      <h5 style={{ color: "black" }}>JavaScript</h5>
    </div>
  );
}

const footer = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  height: "15%",
  backgroundColor: "red",
  color: "white",
  textAlign: "center"
};
