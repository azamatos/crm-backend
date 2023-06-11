interface City {
  id: number;
  name: string;
  customer: Customer[];
  country: Country;
}

interface CityUpdateDTO {
  id: number;
  name: string;
  countryId: number;
}
