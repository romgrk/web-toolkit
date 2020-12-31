import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularSignalGoodSymbolic } from '../../assets/icons/network-cellular-signal-good-symbolic.svg';

function NetworkCellularSignalGood({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularSignalGoodSymbolic)}
    </span>
  );
}

export default NetworkCellularSignalGood;
