interface IncomingCreateDTO {
  articleId: number;
  type: IncomingType;
  cityId: number;
  customer: Customer;
  primeCost?: number;
  count: number;
  price: number;
  isSold: boolean;
}

interface IncomingUpdateDTO {
  id: number;
  articleId?: number;
  count?: number;
  price?: number;
  isSold?: boolean;
}

interface Incoming {
  id: number;
  count: number;
  price: number;
  isSold: boolean;
  article: ArticleUpdateDTO;
  createdAt: Date;
  updatedAt: Date;
  outgoings?: Outgoing[];
}

interface CurrentIncomingsCount {
  id: number;
  currentCount: number;
}
