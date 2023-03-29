import React from 'react';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  classes: string;
  subject: string;
};

class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const { type, classes, subject } = this.props;

    return (
      <button type={type} className={classes}>
        {subject}
      </button>
    );
  }
}

export default Button;
