interface ArticleCreateDTO {
  name: string;
  description: string;
  imageUrl?: string;
}

interface ArticleUpdateDTO {
  id: number;
  name?: string;
  description?: string;
  imageUrl?: string;
}

interface Article {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
  articleIncomes: Omit<ArticleIncome[], 'article'>;
  articleOrders: Omit<ArticleOrder[], 'article'>;
  articleOutgoings: Omit<ArticleOutgoing[], 'article'>;
}

interface BasicArticle {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
}

interface ArticleOutgoings extends BasicArticle {
  articleOutgoings: Omit<ArticleOutgoing, 'outgoing' | 'article'>[];
}

interface ArticleIncomes extends BasicArticle {
  articleIncomes: Omit<ArticleIncome, 'article', 'incoming'>[];
}
