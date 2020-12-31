import React from "react";
import cx from 'clsx';
import { ReactComponent as DialogQuestionSymbolic } from '../../assets/icons/dialog-question-symbolic.svg';

function DialogQuestion({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(DialogQuestionSymbolic)}
    </span>
  );
}

export default DialogQuestion;
