import React, { useEffect, useState } from "react";
import { PageTemplate } from "../../components/PageTemplate/PageTemplate";
import style from "./count.module.css";

const Count = () => {
  const [counter, setCounter] = useState<Array<number>>([993, 1000, 0, 0]);
  const [jscrutch, setJsCrutch] = useState<Boolean>(false);
  const [finish, setFinish] = useState<boolean>(false);
  const [winSound, setWinSound] = useState<any>(null);
  const [ainmation, setAnimation] = useState<boolean>(false);
  React.useEffect(() => {
    setWinSound(new Audio("/sound/win.mp3"));
  }, []);
  const ButtonHandler = () => {
    if (!ainmation) {
      setAnimation(true);
      setJsCrutch(true);
      winSound?.play();
    }
  };
  const show = (num: number, index: number) => {
    if (num === 0) {
      return 0;
    }
    if (index === 3) {
      return 0;
    }
    return 1;
  };
  const ShowCounter = (num: number, index: number): any => {
    switch (index) {
      case 0: {
        return (
          <div
            key={index}
            className={style.Counter__FirstNumber}
            style={{ opacity: show(num, index) }}
            about={`${ainmation}`}
            onAnimationEnd={() => {
              setAnimation(false);
            }}
          >
            {num}
          </div>
        );
      }
      case 3: {
        return (
          <div
            key={index}
            className={style.Counter__HiddenNumber}
            about={`${ainmation}`}
            style={{ opacity: show(num, index) }}
          >
            {num}
          </div>
        );
      }

      default: {
        return (
          <div
            key={index}
            style={{ opacity: show(num, index) }}
            className={style.Couner__Number}
            about={`${ainmation}`}
          >
            {num}
          </div>
        );
      }
    }
  };
  return (
    <PageTemplate>
      <div
        className={style.csscrutch}
        style={{ opacity: 1 }}
        cr={`${jscrutch}`}
        onAnimationEnd={() => {
          setJsCrutch(false);

          setCounter((cur) => {
            if (cur[0] - 7 > 0) {
              return [cur[0] - 7, ...cur];
            } else {
              setFinish(true);
              return [0, ...cur];
            }
          });
          console.log("yep");
        }}
      ></div>
      <div className={style.Counter__Body}>
        <div className={style.Couner__Container}>
          <div className={style.Counter__Content}>
            {counter
              .slice(0, 4)
              .reverse()
              .map((num, index) => ShowCounter(num, index))}
          </div>
        </div>
        <div className={style.Counter__Button} onClick={ButtonHandler}>
          <div className={style.Couner__seven}>-7</div>
        </div>
      </div>
    </PageTemplate>
  );
};
export default Count;
