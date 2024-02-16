import React from "react";
import "./Colors.css";
import Input from "../../components/input";

function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          name="test1"
          value=""
          id=""
        />
        <span className="checkmark all"></span> All
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test1"
          id=""
          value="white"
          onChange={handleChange}
        />
        <span
          className="checkmark"
          style={{
            background: "white",
            border: "1px solid black",
            color: "black",
          }}
        ></span>
        White
      </label>
    </div>
  );
}

export default Colors;
