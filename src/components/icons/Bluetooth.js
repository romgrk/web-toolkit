import React from "react";
import cx from 'clsx';
import { ReactComponent as BluetoothSymbolic } from '../../assets/icons/bluetooth-symbolic.svg';

function Bluetooth({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BluetoothSymbolic)}
    </span>
  );
}

export default Bluetooth;
