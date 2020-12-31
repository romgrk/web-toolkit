import React from "react";
import cx from 'clsx';
import { ReactComponent as WeatherOvercastSymbolic } from '../../assets/icons/weather-overcast-symbolic.svg';

function WeatherOvercast({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WeatherOvercastSymbolic)}
    </span>
  );
}

export default WeatherOvercast;
