interface Country {
  id: number;
  name: string;
  cities: Pick<City, 'id' | 'name'>[];
}

interface CountryUpdateDTO {
  id: number;
  name: string;
}

interface CountryCreateDTO {
  name: string;
}
