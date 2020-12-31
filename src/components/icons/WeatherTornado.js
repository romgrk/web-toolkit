import React from "react";
import cx from 'clsx';
import { ReactComponent as WeatherTornadoSymbolic } from '../../assets/icons/weather-tornado-symbolic.svg';

function WeatherTornado({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WeatherTornadoSymbolic)}
    </span>
  );
}

export default WeatherTornado;
