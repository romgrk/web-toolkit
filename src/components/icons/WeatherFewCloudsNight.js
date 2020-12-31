import React from "react";
import cx from 'clsx';
import { ReactComponent as WeatherFewCloudsNightSymbolic } from '../../assets/icons/weather-few-clouds-night-symbolic.svg';

function WeatherFewCloudsNight({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WeatherFewCloudsNightSymbolic)}
    </span>
  );
}

export default WeatherFewCloudsNight;
