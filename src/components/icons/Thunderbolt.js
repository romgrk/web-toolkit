import React from "react";
import cx from 'clsx';
import { ReactComponent as ThunderboltSymbolic } from '../../assets/icons/thunderbolt-symbolic.svg';

function Thunderbolt({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ThunderboltSymbolic)}
    </span>
  );
}

export default Thunderbolt;
