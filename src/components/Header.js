import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

const Header = ({ name }) => {
  return (
    <>
      <ThemeIcon></ThemeIcon>
      <div className="xl:px-32">
        <h1 className="text-2xl">{name}</h1>
        <Search></Search>
      </div>
    </>
  );
};

export default Header;
