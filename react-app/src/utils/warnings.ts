const warnings = {
  make: {
    emptyInput: 'Please, select the make of the car',
  },
  model: {
    emptyInput: 'Model of the car should contains at least 3 chars',
  },
  fuel: {
    emptyInput: 'Please select the type of fuel for the car',
  },
  year: {
    emptyInput: 'Please, choose the year of production (No matter what day or month)',
  },
  file: {
    emptyInput: 'Please, choose car photo',
  },
  mileage: {
    emptyInput: 'Please, type a car mileage (min 0)',
    minValue: 'The mileage must be more than 0',
  },
  price: {
    emptyInput: 'Please, type a car price',
    minValue: 'The price must be more than 0',
  },
  checkbox: {
    emptyInput: 'Checkbox is required',
  },
};

export default warnings;
