import React from "react";
import cx from 'clsx';
import { ReactComponent as WeatherSnowSymbolic } from '../../assets/icons/weather-snow-symbolic.svg';

function WeatherSnow({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WeatherSnowSymbolic)}
    </span>
  );
}

export default WeatherSnow;
