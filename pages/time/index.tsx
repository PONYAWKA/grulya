import React, { useState } from "react";
import { PageTemplate } from "../../components/PageTemplate/PageTemplate";
import style from "./index.module.css";
const Time = () => {
  const [data, setData] = useState<any>();
  React.useEffect(() => {
    setInterval(() => {
      const d = new Date();
      setData(d.toLocaleTimeString([], { timeStyle: "short" }));
    }, 1000);
  }, []);
  return (
    <PageTemplate>
      <div className={style.Time__container}>
        <div className={style.Time__content}>
          <div className={style.Time_time}>{data}</div>
        </div>
      </div>
    </PageTemplate>
  );
};
export default Time;
