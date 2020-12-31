import React from "react";
import cx from 'clsx';
import { ReactComponent as WebBrowserSymbolic } from '../../assets/icons/web-browser-symbolic.svg';

function WebBrowser({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WebBrowserSymbolic)}
    </span>
  );
}

export default WebBrowser;
