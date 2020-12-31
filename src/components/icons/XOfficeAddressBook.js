import React from "react";
import cx from 'clsx';
import { ReactComponent as XOfficeAddressBookSymbolic } from '../../assets/icons/x-office-address-book-symbolic.svg';

function XOfficeAddressBook({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(XOfficeAddressBookSymbolic)}
    </span>
  );
}

export default XOfficeAddressBook;
