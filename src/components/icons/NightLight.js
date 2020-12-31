import React from "react";
import cx from 'clsx';
import { ReactComponent as NightLightSymbolic } from '../../assets/icons/night-light-symbolic.svg';

function NightLight({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NightLightSymbolic)}
    </span>
  );
}

export default NightLight;
