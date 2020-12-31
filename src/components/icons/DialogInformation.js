import React from "react";
import cx from 'clsx';
import { ReactComponent as DialogInformationSymbolic } from '../../assets/icons/dialog-information-symbolic.svg';

function DialogInformation({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DialogInformationSymbolic)}
    </span>
  );
}

export default DialogInformation;
