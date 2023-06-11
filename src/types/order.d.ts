interface Order {
  id: number;
  count: number;
  customer: Omit<CustomerUpdateDTO, 'orderId'>;
  completed: boolean;
  outgoing?: Omit<OutgoingUpdateDTO, 'orderId'>;
  createdAt: Date;
  updatedAt: Date;
  article: ArticleUpdateDTO;
}

interface OrderUpdateDTO {
  id: number;
  count: number;
  customerId: number;
  completed: boolean;
  articleId: number;
}
