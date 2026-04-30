import { getArticles } from '../../data/articles';
import ArticleCard from './ArticleCard';

export default function ArticlesSection() {

  const articles = getArticles();

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Articoli recenti
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
