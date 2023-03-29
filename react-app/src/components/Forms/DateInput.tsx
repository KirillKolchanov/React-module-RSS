import React from 'react';
import WarningMessage from './WarningMessage';

type DateInputProps = {
  classes: string;
  name: string;
  min: string;
  max: string;
  reference: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  subject: string;
  warningMessage: string;
  valid: boolean;
};

class DateInput extends React.Component<DateInputProps> {
  constructor(props: DateInputProps) {
    super(props);
  }

  render() {
    const { classes, min, max, name, reference, onChange, subject, valid, warningMessage } =
      this.props;

    return (
      <>
        <label htmlFor="DataPicker" className="mb-2 font-medium">
          {subject}
        </label>
        <input
          className={valid ? classes : `${classes} border-red-500`}
          type="date"
          name={name}
          min={min}
          max={max}
          ref={reference}
          onChange={onChange}
        />
        {valid ? null : <WarningMessage valid={valid}>{warningMessage}</WarningMessage>}
      </>
    );
  }
}

export default DateInput;
