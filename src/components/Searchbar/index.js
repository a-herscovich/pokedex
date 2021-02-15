import React, { useState } from "react";
import "./Searchbar.scss";

const Searchbar = ({ fetchData: fetchValue }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
        alt="logo"
        onClick={(e) => { fetchValue(""); setSearchValue("") }}
      />
      <form className="searchbar" onSubmit={e => { e.preventDefault(); }}>
        <input
          id="input"
          type="text"
          placeholder="Search Pokemon by Name"
          autoComplete="off"
          key="random"
          value={searchValue}
          onChange={(e) => {
            fetchValue(e.target.value);
            setSearchValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Searchbar;
