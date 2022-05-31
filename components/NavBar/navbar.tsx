import React from "react";
import style from "./navBar.module.css";
import Link from "next/link";
import { navigation } from "../utils/Routes";
const NavBar = () => {
  return (
    <nav style={{ height: "100%" }}>
      <div className={style.NavBar__LinkContainer}>
        <div style={{ marginTop: "20px" }} />
        {navigation.map(({ title, path }) => (
          <div className={style.NavBar__Link} key={path}>
            <Link href={path}>
              <a>{title}</a>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};
export default NavBar;
