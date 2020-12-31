import React from "react";
import cx from 'clsx';
import { ReactComponent as UserTrashSymbolic } from '../../assets/icons/user-trash-symbolic.svg';

function UserTrash({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserTrashSymbolic)}
    </span>
  );
}

export default UserTrash;
