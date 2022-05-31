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
  const [wet, setWet] = React.useState<Boolean>(false);
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
    });
  }, []);
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lon}&appid=f75c50e0325316c5204c1e70eacf927b`
    )
    .then((info) => {
      if (
        (info && info.data.weather[0].main === "Thunderstorm") ||
        "Drizzle" ||
        "Rain" ||
        "Snow"
      ) {
        setWet(true);
      }
    });

  return (
    <div>
      <PageTemplate>
        <div className={style.Weather__Container}>
          <div className={style.Weather__Images}>
            {wet ? (
              <Image src={Wet} alt="..." />
            ) : (
              <Image src={Dry} alt="..." />
            )}
          </div>
        </div>
      </PageTemplate>
    </div>
  );
};
export default Weather;
