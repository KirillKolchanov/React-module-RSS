import React from 'react';

type CheckboxProps = {
  id: string;
  name: string;
  classes: string;
  subject: string;
  reference: React.RefObject<HTMLInputElement>;
  valid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

class Checkbox extends React.Component<CheckboxProps> {
  constructor(props: CheckboxProps) {
    super(props);
  }

  render() {
    const { id, name, classes, subject, reference, valid, onChange } = this.props;

    return (
      <>
        <input
          type="checkbox"
          id={id}
          name={name}
          ref={reference}
          className={classes}
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className={valid ? 'text-xl' : 'text-xl border-2 border-red-500 px-2 py-2'}
        >
          {subject}
        </label>
      </>
    );
  }
}

export default Checkbox;
