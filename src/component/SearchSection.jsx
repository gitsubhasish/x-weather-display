import React, { useState, useEffect } from "react";

export default function SearchSection({ onChangeCity }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onChangeCity(city);
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        placeholder="Enter city name"
        style={{ padding: 5, borderRadius: 5, borderColor: "#f0f8ff" }}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 5,
          marginLeft: 5,
          color: "white",
          borderColor: "#f0f8ff",
        }}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
