import React from "react";
import style from "./navBar.module.css";
import Link from "next/link";
import { navigation } from "../utils/Routes";
import { useRouter } from "next/router";
const NavBar = () => {
  const { pathname } = useRouter();
  React.useEffect(() => {
    const scroll = localStorage.getItem("scroll")?.split(",");
    if (scroll) {
      myRef.current.scrollLeft = scroll[0];
      myRef.current.scrollTop = scroll[1];
    }
  }, []);
  const myRef: any = React.createRef();
  const ScrollHandler = (e: any) => {
    const scrollX = myRef.current.scrollLeft;
    const scrollY = myRef.current.scrollTop;
    localStorage.setItem("scroll", `${scrollX},${scrollY}`);
  };
  return (
    <nav style={{ height: "100%" }}>
      <div className={style.NavBar__LinkContainer}>
        <div
          ref={myRef}
          className={style.NavBar__Content}
          onScroll={ScrollHandler}
        >
          {navigation.map(({ title, path }) => (
            <div
              className={
                pathname !== path
                  ? style.NavBar__Link
                  : style.NavBar__ActiveLink
              }
              key={path}
            >
              <Link href={path}>
                <a>{title}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
