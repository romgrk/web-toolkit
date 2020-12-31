import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularSymbolic } from '../../assets/icons/network-cellular-symbolic.svg';

function NetworkCellular({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularSymbolic)}
    </span>
  );
}

export default NetworkCellular;
