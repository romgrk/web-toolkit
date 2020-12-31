import React from "react";
import cx from 'clsx';
import { ReactComponent as TvSymbolic } from '../../assets/icons/tv-symbolic.svg';

function Tv({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(TvSymbolic)}
    </span>
  );
}

export default Tv;
