interface Country {
  id: number;
  name: string;
  city: CityUpdateDTO[];
}

interface CountryUpdateDTO {
  id: number;
  name: string;
}
