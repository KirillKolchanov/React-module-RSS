import React from 'react';

type SwitcherProps = {
  id: string;
  name: string;
  classes: string;
  reference: React.RefObject<HTMLInputElement>;
  defaultChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  subject: string;
};

class Switcher extends React.Component<SwitcherProps> {
  constructor(props: SwitcherProps) {
    super(props);
  }

  render() {
    const { id, name, classes, reference, defaultChecked, onChange, subject } = this.props;

    return (
      <>
        <input
          type="radio"
          id={id}
          name={name}
          className={classes}
          ref={reference}
          defaultChecked={defaultChecked}
          onChange={onChange}
          required
        />
        <label htmlFor={id} className="ml-2">
          <span className="block text-m font-medium">{subject}</span>
        </label>
      </>
    );
  }
}

export default Switcher;
