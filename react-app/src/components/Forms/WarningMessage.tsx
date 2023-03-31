import React, { Component } from 'react';

type MyProps = {
  children: string;
  valid: boolean;
};

const WarningMessage = ({ children, valid }: MyProps): JSX.Element => {
  const cls = {
    baseClass: ``,
    validClass: `text-transparent`,
    invalidClass: `text-red-700`,
  };

  const isvalid = valid;
  const classes = `${cls.baseClass} ${isvalid ? cls.validClass : cls.invalidClass}`;

  return (
    <p className={classes} data-testid="validationWarning">
      {children}
    </p>
  );
};

export default WarningMessage;
