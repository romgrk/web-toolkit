import React from "react";
import cx from 'clsx';
import { ReactComponent as NotificationsDisabledSymbolic } from '../../assets/icons/notifications-disabled-symbolic.svg';

function NotificationsDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NotificationsDisabledSymbolic)}
    </span>
  );
}

export default NotificationsDisabled;
