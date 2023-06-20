interface Order {
  id: number;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  customer: BasicCustomer;
  outgoings?: Omit<Outgoing, 'order'>[];
  articleOrders?: Omit<ArticleOrder, 'order'>[];
}

interface CustomerOrder extends BasicOrder {
  articleOrders: Omit<ArticleOrder, 'order'>[];
}

interface BasicOrder {
  id: number;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface OrderCreateDTO {
  isCompleted: boolean;
  customerId: number;
  articleOrders: ArticleOrderCreateDTO[];
}

interface OrderUpdateDTO {
  id: number;
  isCompleted?: boolean;
  customerId?: number;
}

interface ArticleOrder {
  sellPrice: number;
  primePrice: number;
  count: number;
  article: BasicArticle;
  order: Omit<Order, 'articleOrders'>;
}

interface ArticleOrderCreateDTO {
  sellPrice: number;
  primePrice: number;
  count: number;
  articleId: number;
  orderId: number;
}

interface ArticleOrderUpdateDTO {
  sellPrice?: number;
  primePrice?: number;
  count?: number;
  articleId?: number;
  orderId?: number;
}
