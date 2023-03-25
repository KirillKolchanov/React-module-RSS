import React from 'react';

type SwitcherProps = {
  id: string;
  label: string;
  ref?: React.RefObject<HTMLInputElement>;
};

class Switcher extends React.Component<SwitcherProps> {
  constructor(props: SwitcherProps) {
    super(props);
  }

  render() {
    const { id, label, ref } = this.props;

    return (
      <div className="flex items-center">
        <input
          type="radio"
          id={id}
          name={id}
          ref={ref}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
          defaultChecked={false}
        />
        <label htmlFor={id} className="ml-3">
          <span className="block text-sm font-medium text-gray-700">{label}</span>
        </label>
      </div>
    );
  }
}

export default Switcher;
