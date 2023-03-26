import React from 'react';

type CheckboxProps = {
  id: string;
  name: string;
  classes: string;
  subject: string;
  reference: React.RefObject<HTMLInputElement>;
};

class Checkbox extends React.Component<CheckboxProps> {
  constructor(props: CheckboxProps) {
    super(props);
  }

  render() {
    const { id, name, classes, subject, reference } = this.props;

    return (
      <>
        <input type="checkbox" id={id} name={name} ref={reference} className={classes} required />
        <label htmlFor={id} className="text-xl">
          {subject}
        </label>
      </>
    );
  }
}

export default Checkbox;
