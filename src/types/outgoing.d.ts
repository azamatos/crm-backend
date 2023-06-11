interface OutgoingCreateDTO {
  articleId: number;
  incomingId?: number;
  count: number;
  price: number;
}

interface OutgoingUpdateDTO {
  id: number;
  orderId?: number;
  deliverymanId?: number;
  incomingId?: number;
  count?: number;
  price?: number;
}

interface OutgoingDelivery {
  id: number;
  orderId?: number;
  deliverymanId?: number;
  incomingId?: number;
  count: number;
  price: number;
}

interface Outgoing {
  id: number;
  count: number;
  type: OutgoingType;
  price: number;
  deliveryman?: DeliverymanUpdateDTO;
  incoming?: IncomingUpdateDTO;
  order?: OrderUpdateDTO;
  createdAt: Date;
}

interface BasicOutgoing {
  id: number;
  count: number;
  price: number;
}

enum OutgoingType {
  ARTICLE = 'ARTICLE',
  DELIVERY = 'DELIVERY',
  OTHER = 'OTHER',
}
