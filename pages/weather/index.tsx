import axios from "axios";
import React from "react";
import { PageTemplate } from "../../components/PageTemplate/PageTemplate";
import style from "./weather.module.css";
import Image from "next/image";
import Wet from "../../public/img/wet.png";
import Dry from "../../public/img/dry.png";

type Coord = {
  lat: number;
  lon: number;
};
const Weather = () => {
  const [location, setLocation] = React.useState<Coord>();
  const [wet, setWet] = React.useState<number>(0);
  const [tr, settr] = React.useState<number>(0);
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
    });
    if (location) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lon}&appid=f75c50e0325316c5204c1e70eacf927b`
        )
        .then((info: any) => {
          if (
            (info && info.data.weather[0].main === "Thunderstorm") ||
            "Drizzle" ||
            "Rain" ||
            "Snow"
          ) {
            setWet(1);
          } else {
            setWet(2);
          }
        });
    } else {
      settr((prev) => prev + 1);
    }
  }, [tr]);

  const WetShow = () => {
    switch (wet) {
      case 1: {
        return <Image src={Wet} alt="..." />;
      }
      case 2: {
        <Image src={Dry} alt="..." />;
      }
      default: {
        return <></>;
      }
    }
  };
  return (
    <div>
      <PageTemplate>
        <div className={style.Weather__Container}>
          <div className={style.Weather__Images}>{WetShow()}</div>
        </div>
      </PageTemplate>
    </div>
  );
};
export default Weather;
