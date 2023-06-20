interface Incoming {
  id: number;
  isSold: boolean;
  createdAt: Date;
  updatedAt: Date;
  outgoings?: Omit<Outgoing[], 'incoming'>;
  articleIncomes?: Omit<ArticleIncome[], 'incoming'>;
}

interface CustomerIncoming extends BasicIncoming {
  articleIncomes: Omit<ArticleIncome, 'incoming'>[];
}

interface BasicIncoming {
  id: number;
  isSold: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface IncomingCreateDTO {
  articleIncomes: Omit<ArticleIncomeCreateDTO, 'incomingId'>[];
}

interface IncomingUpdateDTO {
  id: number;
}

interface ArticleIncome {
  sellPrice: number;
  primePrice: number;
  count: number;
  article: BasicArticle;
  incoming: Omit<Incoming, 'articleIncomes'>;
}

interface ArticleIncomeCreateDTO {
  sellPrice: number;
  primePrice: number;
  count: number;
  articleId: number;
  incomingId: number;
}

interface ArticleIncomeUpdateDTO {
  sellPrice?: number;
  primePrice?: number;
  count?: number;
  articleId?: number;
  incomingId?: number;
}
