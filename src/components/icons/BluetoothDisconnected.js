import React from "react";
import cx from 'clsx';
import { ReactComponent as BluetoothDisconnectedSymbolic } from '../../assets/icons/bluetooth-disconnected-symbolic.svg';

function BluetoothDisconnected({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BluetoothDisconnectedSymbolic)}
    </span>
  );
}

export default BluetoothDisconnected;
