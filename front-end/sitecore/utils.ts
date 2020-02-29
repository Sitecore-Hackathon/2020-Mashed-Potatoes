import { LocationData } from './models';

export const concatLocation = ({ Country, City, Address }: LocationData) => {
  return `${Country.value}, ${City.value}, ${Address.value}`;
};
