import React from "react";
import cx from 'clsx';
import { ReactComponent as BluetoothActiveSymbolic } from '../../assets/icons/bluetooth-active-symbolic.svg';

function BluetoothActive({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BluetoothActiveSymbolic)}
    </span>
  );
}

export default BluetoothActive;
