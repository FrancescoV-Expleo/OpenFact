import articlesJson from './articles.json';

export type Article = {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  file: string;
  dashboardImage: string;
};

export function getArticles(): Article[] {
  return articlesJson;
}

export function getArticleById(id: string): Article | undefined {
  return articlesJson.find(a => a.id === id);
}
