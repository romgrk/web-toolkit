import React from "react";
import cx from 'clsx';
import { ReactComponent as EmblemDocumentsSymbolic } from '../../assets/icons/emblem-documents-symbolic.svg';

function EmblemDocuments({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmblemDocumentsSymbolic)}
    </span>
  );
}

export default EmblemDocuments;
