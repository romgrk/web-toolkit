import React from "react";
import cx from 'clsx';
import { ReactComponent as UserTrashFullSymbolic } from '../../assets/icons/user-trash-full-symbolic.svg';

function UserTrashFull({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserTrashFullSymbolic)}
    </span>
  );
}

export default UserTrashFull;
