import { ICarSchema } from "../models";

export const allCars: ICarSchema[] = [
  {
    id: 1,
    make: 'Ferrari',
    model: '488 GTB F1',
    price: 213.861,
    age: 2019,
    fuel: 'petrol',
    miles: '2,650',
    city: 'Warsaw',
    img: '/cars/ferrari 488.jpeg'
  },
  {
    id: 3,
    make: 'Aston Martin',
    model: 'DBS V12 Superleggera',
    price: 298.638,
    age: 2022,
    fuel: 'electro',
    miles: '205',
    city: 'London',
    img: '/cars/aston-martin.jpeg'
  },
  {
    id: 4,
    make: 'Porsche',
    model: '911 Turbo Coupe S',
    price: 232.966,
    age: 2020,
    fuel: 'petrol',
    miles: '19,025',
    city: 'Krakow',
    img: '/cars/Porshe 911.jpeg'
  },
  {
    id: 5,
    make: 'Ferrari',
    model: 'F12 Berlinetta 6.2',
    price: 219.802,
    age: 2015,
    fuel: 'diesel',
    miles: '19,600',
    city: 'Paris',
    img: '/cars/ferrari f12.jpeg'
  },
  {
    id: 6,
    make: 'Mercedes',
    model: 'SLS 6.2 63 V8 AMG 2dr',
    price: 172.252,
    age: 2010,
    fuel: 'petrol',
    miles: '48,000',
    city: 'Madrid',
    img: '/cars/mercedes sls-old.jpeg'
  },
  {
    id: 2,
    make: 'Mercedes',
    model: 'SLS 63 AMG',
    price: 203.188,
    age: 2011,
    fuel: 'petrol',
    miles: '24,000',
    city: 'Berlin',
    img: '/cars/mercedes sls.jpeg',
  }
]

export default allCars;