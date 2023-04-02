import { ICarSchema } from '../models';

export const allCars: ICarSchema[] = [
  {
    make: 'Ferrari',
    model: '488 GTB F1',
    price: 213.861,
    age: 2019,
    fuel: 'petrol',
    miles: 2650,
    img: '/cars/ferrari 488.jpeg',
  },
  {
    make: 'Aston Martin',
    model: 'DBS V12 Superleggera',
    price: 298.638,
    age: 2022,
    fuel: 'electro',
    miles: 205,
    img: '/cars/aston-martin.jpeg',
  },
  {
    make: 'Porsche',
    model: '911 Turbo Coupe S',
    price: 232.966,
    age: 2020,
    fuel: 'petrol',
    miles: 19025,
    img: '/cars/Porshe 911.jpeg',
  },
  {
    make: 'Ferrari',
    model: 'F12 Berlinetta 6.2',
    price: 219.802,
    age: 2015,
    fuel: 'diesel',
    miles: 19600,
    img: '/cars/ferrari f12.jpeg',
  },
  {
    make: 'Mercedes',
    model: 'SLS 6.2 63 V8 AMG 2dr',
    price: 172.252,
    age: 2010,
    fuel: 'petrol',
    miles: 48000,
    img: '/cars/mercedes sls-old.jpeg',
  },
  {
    make: 'Mercedes',
    model: 'SLS 63 AMG',
    price: 203.188,
    age: 2011,
    fuel: 'petrol',
    miles: 24000,
    img: '/cars/mercedes sls.jpeg',
  },
];

export default allCars;
