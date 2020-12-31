import React from "react";
import cx from 'clsx';
import { ReactComponent as HelpAboutSymbolic } from '../../assets/icons/help-about-symbolic.svg';

function HelpAbout({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(HelpAboutSymbolic)}
    </span>
  );
}

export default HelpAbout;
