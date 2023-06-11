interface ArticleCreateDTO {
  name: string;
  description: string;
  image_url: string;
}

interface ArticleUpdateDTO {
  id: number;
  name?: string;
  description?: string;
  image_url?: string;
}

interface Article {
  id: number;
  name: string;
  description: string;
  image_url: string;
  incomings: Incoming[];
  orders?: Order[];
}

interface BasicArticle {
  id: number;
  name: string;
  description: string;
  image: {
    name: string;
    file: string;
  };
  incomings: {
    incomingsSoldCount: number;
    incomingsTotalCount: number;
  };
  orders: {
    ordersSoldCount: number;
    ordersTotalCount: number;
  };
}

interface DependencyArticle {
  id: number;
  name: string;
  description: string;
}

interface ArticleAction {
  id: number;
  price: number;
  incomingCount: number;
  soldCount: number;
  leftCount: number;
}
