import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesSystemNetworkProxySymbolic } from '../../assets/icons/preferences-system-network-proxy-symbolic.svg';

function PreferencesSystemNetworkProxy({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesSystemNetworkProxySymbolic)}
    </span>
  );
}

export default PreferencesSystemNetworkProxy;
