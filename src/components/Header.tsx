import React from "react";
import classes from "./Header.module.css";
import csvIcon from "../assets/csv-icon.svg";

type Props = {};

function Header({}: Props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={csvIcon} alt="fruitIcon"></img>
        <h1>CSV Uploader</h1>
      </div>
    </header>
  );
}

export default Header;
