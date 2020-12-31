import React from "react";
import cx from 'clsx';
import { ReactComponent as XOfficePresentationSymbolic } from '../../assets/icons/x-office-presentation-symbolic.svg';

function XOfficePresentation({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(XOfficePresentationSymbolic)}
    </span>
  );
}

export default XOfficePresentation;
