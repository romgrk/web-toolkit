import React from "react";
import cx from 'clsx';
import { ReactComponent as AvatarDefaultSymbolic } from '../../assets/icons/avatar-default-symbolic.svg';

function AvatarDefault({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AvatarDefaultSymbolic)}
    </span>
  );
}

export default AvatarDefault;
