interface Deliveryman {
  id: number;
  name: string;
  phoneNumber: string;
  desciption?: string;
  city: CityResponse;
  deliveryOutgoings: Omit<DeliveryOutgoing, 'deliveryman'>[];
}

interface DeliverymanUpdateDTO {
  id: number;
  name?: string;
  phoneNumber?: string;
  desciption?: string;
  cityId?: number;
}

interface DeliveryManCreateDTO {
  name: string;
  phoneNumber: string;
  desciption?: string;
  cityId: number;
}

interface DeliverymanResponse {
  id: number;
  name: string;
  phoneNumber: string;
  desciption?: string;
  city: CityResponse;
}
