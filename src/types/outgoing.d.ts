interface Outgoing {
  id: number;
  type: OutgoingType;

  customer?: BasicCustomer;
  incoming?: Omit<Incoming, 'outgoings'>;
  order?: Omit<Order, 'outgoings'>;

  createdAt: Date;
  updatedAt: Date;

  articleOutgoings?: Omit<ArticleOutgoing, 'outgoing'>[];
  otherOutgoings?: Omit<OtherOutgoing, 'outgoing'>[];
  deliveryOutgoings?: Omit<DeliveryOutgoing, 'outgoing'>[];
}

interface BasicOutgoing {
  id: number;
  type: OutgoingType;
  createdAt: Date;
  updatedAt: Date;
}

interface BasicOutgoingWithIncomingAndOrder extends BasicOutgoing {
  incoming?: BasicIncoming;
  order?: BasicOrder;
}

interface OutgoingCreateDTO {
  type: OutgoingType;
  incomingId?: number;
  orderId?: number;
  customerId?: number;
  articleOutgoings?: ArticleOutgoingCreateDTO[];
  otherOutgoings?: OtherOutgoingCreateDTO[];
  deliveryOutgoings?: DeliveryOutgoingCreateDTO[];
}

interface OutgoingUpdateDTO {
  id: number;
  type?: OutgoingType;
  incomingId?: number;
  orderId?: number;
  customerId?: number;
}

interface DeliveryOutgoing {
  sum: number;
  description?: string;
  createdAt: Date;
  outgoing: BasicOutgoingWithIncomingAndOrder;
  deliveryman: Omit<Deliveryman, 'DeliveryOutgoing'>;
}

interface DeliveryOutgoingCreateDTO {
  sum: number;
  description?: string;
  outgoingId: number;
  deliverymanId: number;
}

interface DeliveryOutgoingUpdateDTO {
  sum?: number;
  description?: string;
  outgoingId?: number;
  deliverymanId?: number;
}

interface OtherOutgoing {
  sum: number;
  description: string;
  createdAt: Date;
  outgoing: Omit<Outgoing, 'otherOutgoings'>;
}

interface OtherOutgoingCreateDTO {
  sum: number;
  description: string;
  outgoingId: number;
}

interface OtherOutgoingUpdateDTO {
  sum?: number;
  description?: string;
  outgoingId?: number;
}

interface ArticleOutgoing {
  sum: number;
  count: number;
  description?: string;
  createdAt: Date;
  article: Omit<
    Article,
    'articleOutgoings' | 'articleIncomes' | 'articleOrders'
  >;
  outgoing: Omit<Outgoing, 'articleOutgoings'>;
}

interface ArticleOutgoingCustomer {}

interface ArticleOutgoingCreateDTO {
  sum: number;
  count: number;
  description?: string;
  articleId: number;
  outgoingId: number;
}

interface ArticleOutgoingUpdateDTO {
  sum?: number;
  count?: number;
  description?: string;
  articleId?: number;
  outgoingId?: number;
  customerId?: number;
}

type OutgoingType = 'INCOME' | 'ORDER' | 'DELIVERY' | 'OTHER';
