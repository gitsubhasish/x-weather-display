import React from "react";

export default function WeatherCard({ type, info }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        padding: 50,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div>{type}</div>
      <div>{info}</div>
    </div>
  );
}
