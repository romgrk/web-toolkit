import React from "react";
import cx from 'clsx';
import { ReactComponent as WeatherFogSymbolic } from '../../assets/icons/weather-fog-symbolic.svg';

function WeatherFog({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WeatherFogSymbolic)}
    </span>
  );
}

export default WeatherFog;
