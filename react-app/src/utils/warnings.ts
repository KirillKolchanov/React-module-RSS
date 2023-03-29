const warnings = {
  file: {
    emptyInput: 'Please, choose car photo',
    wrongImgFormat: 'Please upload only jpg, png, jpeg, gif files!',
  },
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
  mileage: {
    emptyInput: 'Please, type a car mileage (min 0)',
  },
  price: {
    emptyInput: 'Please, type a car price',
  },
  checkbox: {
    emptyInput: 'Checkbox is required',
  },
};

export default warnings;
