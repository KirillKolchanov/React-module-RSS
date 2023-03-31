import React from 'react';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  classes: string;
  subject: string;
};

const Button = ({ type, classes, subject }: ButtonProps): JSX.Element => {
  return (
    <button type={type} className={classes}>
      {subject}
    </button>
  );
};

export default Button;
