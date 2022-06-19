import type { NextPage } from "next";
import React from "react";
import NavBar from "../NavBar/navbar";
import style from "./index.module.css";
import Image from "next/image";
import bily from "../../public/img/bily.png";
import box from "../../public/img/box.svg";
import exit from "../../public/img/exit.svg";
type type = { children: React.ReactNode };
export const PageTemplate: React.FC<type> = ({ children }) => {
  return (
    <div className={style.Body__Container}>
      <div className={style.Body__Content} >
        <div className={style.Body__NavBar}>
          <NavBar />
          <div className={style.RMenu__Container}>
            <div className={style.RMenu__Content}>
              <div className={style.RMenu__Image}>
                <Image src={bily} alt="..." />
              </div>
              <div className={style.RMenu__Image}>
                <Image src={box} alt="..." />
              </div>
              <div className={style.RMenu__Image}>
                <Image src={exit} alt="..." />
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
