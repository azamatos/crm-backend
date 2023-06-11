interface Deliveryman {
  id: number;
  name: string;
  phoneNumber?: string;
  desciption?: string;
  outgoings: Omit<OutgoingUpdateDTO[], 'deliverymanId'>;
}

interface DeliverymanUpdateDTO {
  id: number;
  name?: string;
  phoneNumber?: string;
  desciption?: string;
}
