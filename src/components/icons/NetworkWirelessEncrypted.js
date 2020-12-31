import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessEncryptedSymbolic } from '../../assets/icons/network-wireless-encrypted-symbolic.svg';

function NetworkWirelessEncrypted({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessEncryptedSymbolic)}
    </span>
  );
}

export default NetworkWirelessEncrypted;
