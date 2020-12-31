import React from "react";
import cx from 'clsx';
import { ReactComponent as WeatherShowersScatteredSymbolic } from '../../assets/icons/weather-showers-scattered-symbolic.svg';

function WeatherShowersScattered({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WeatherShowersScatteredSymbolic)}
    </span>
  );
}

export default WeatherShowersScattered;
