import React, { Component } from 'react';

type MyProps = {
  children: string;
  valid: boolean;
};

type MyState = Record<string, never>;

export default class WarningMessage extends Component<MyProps, MyState> {
  render(): JSX.Element {
    const cls = {
      baseClass: ``,
      validClass: `text-transparent`,
      invalidClass: `text-red-700`,
    };

    const valid = this.props.valid;
    const classes = `${cls.baseClass} ${valid ? cls.validClass : cls.invalidClass}`;

    return (
      <p className={classes} data-testid="validationWarning">
        {this.props.children}
      </p>
    );
  }
}
