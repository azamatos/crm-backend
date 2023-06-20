interface City {
  id: number;
  name: string;
  customers: Omit<Customer, 'city'>[];
  deliverymen: Omit<Deliveryman, 'city'>[];
  country: Omit<Country, 'cities'>;
}

interface CityUpdateDTO {
  id: number;
  name: string;
  countryId: number;
}

interface CityCreateDTO {
  name: string;
  countryId: number;
}

interface CityResponse {
  id: number;
  name: string;
}

interface CityWithCustomers {
  id: number;
  name: string;
  customers: Omit<Customer, 'city'>[];
}

interface CityWithDeliverymen {
  id: number;
  name: string;
  deliverymen: Omit<DeliverymanResponse, 'city'>[];
}
