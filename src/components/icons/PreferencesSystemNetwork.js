import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesSystemNetworkSymbolic } from '../../assets/icons/preferences-system-network-symbolic.svg';

function PreferencesSystemNetwork({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesSystemNetworkSymbolic)}
    </span>
  );
}

export default PreferencesSystemNetwork;
