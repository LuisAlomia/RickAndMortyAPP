import React, { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ setLocationNumber }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setLocationNumber(inputValue);
      setInputValue("");
    }
  };

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="number"
        placeholder="Location Number 1-126"
        value={inputValue}
        max="126"
        onChange={changeInput}
        autoFocus={true}
      />
      <button className={style.button} type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default SearchBar;
