import React from 'react';
import WarningMessage from './WarningMessage';

type SelectProps = {
  defaultValue: string;
  classes: string;
  placeholder: string;
  subject: string;
  reference: React.RefObject<HTMLSelectElement>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  warningMessage: string;
  valid: boolean;
};

class Select extends React.Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
  }

  render() {
    const {
      defaultValue,
      classes,
      placeholder,
      subject,
      reference,
      onChange,
      options,
      valid,
      warningMessage,
    } = this.props;

    return (
      <>
        <select
          defaultValue={defaultValue}
          className={valid ? classes : `${classes} border-red-500`}
          placeholder={placeholder}
          ref={reference}
          onChange={onChange}
        >
          <option value="" disabled>
            {subject}
          </option>
          {options.map(
            (make: string): JSX.Element => (
              <option key={make} value={make}>
                {make}
              </option>
            )
          )}
        </select>
        {valid ? null : <WarningMessage valid={valid}>{warningMessage}</WarningMessage>}
      </>
    );
  }
}

export default Select;
