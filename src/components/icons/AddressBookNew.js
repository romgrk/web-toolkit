import React from "react";
import cx from 'clsx';
import { ReactComponent as AddressBookNewSymbolic } from '../../assets/icons/address-book-new-symbolic.svg';

function AddressBookNew({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AddressBookNewSymbolic)}
    </span>
  );
}

export default AddressBookNew;
