import React from "react";
import cx from 'clsx';
import { ReactComponent as HelpFaqSymbolic } from '../../assets/icons/help-faq-symbolic.svg';

function HelpFaq({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(HelpFaqSymbolic)}
    </span>
  );
}

export default HelpFaq;
