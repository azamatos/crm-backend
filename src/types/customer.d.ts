interface BasicCustomer {
  id: number;
  name: string;
}

interface Customer extends BasicCustomer {
  phoneNumber?: string;
  desciption?: string;
  city: CityResponse;
}

interface CustomerUpdateDTO {
  id: number;
  name?: string;
  phoneNumber?: string;
  desciption?: string;
  cityId?: number;
}

interface CustomerCreateDTO {
  name: string;
  phoneNumber?: string;
  desciption?: string;
  cityId: number;
}

interface CustomerResponse {
  name: string;
  phoneNumber: string;
  desciption?: string;
  city: CityResponse;
}

interface CustomerOrders extends Customer {
  orders: Omit<Order, 'customer' | 'outgoings'>[];
}

interface CustomerOutgoings extends Customer {
  articleOutgoings: Omit<ArticleOutgoing, 'outgoing' | 'customer'>[];
}
