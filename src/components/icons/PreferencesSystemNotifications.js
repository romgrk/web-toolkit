import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesSystemNotificationsSymbolic } from '../../assets/icons/preferences-system-notifications-symbolic.svg';

function PreferencesSystemNotifications({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesSystemNotificationsSymbolic)}
    </span>
  );
}

export default PreferencesSystemNotifications;
