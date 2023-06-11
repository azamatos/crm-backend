interface Customer {
  id: number;
  name: string;
  phoneNumber?: string;
  desciption?: string;
  city: CityUpdateDTO;
  orders: Omit<OrderUpdateDTO[], 'customerId'>;
}

interface CustomerUpdateDTO {
  id: number;
  name: string;
  phoneNumber?: string;
  desciption?: string;
  cityId: number;
}
