import { useState, useRef } from 'react';
import ArticleSidePanel from './ArticleSidePanel';
import ArticlePopup from './ArticlePopup';
import { Article } from '../../data/articles';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {

  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleTitleClick = () => {
    setIsPopupOpen(true);
  };

  const handleDashboardClick = () => {
    setIsSidePanelOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">

        {/* IMAGE (se esiste nel tipo, altrimenti toglilo) */}
        <img
          src={(article as any).image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">

          <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
            <span className="font-medium">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <h3
            ref={titleRef}
            onClick={handleTitleClick}
            className="text-xl font-bold text-gray-900 mb-3 cursor-pointer hover:text-gray-700 transition-colors"
          >
            {article.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.excerpt}
          </p>

          <button
            onClick={handleDashboardClick}
            className="cursor-pointer w-full px-4 py-2 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Dashboard articolo
          </button>
        </div>
      </div>

      <ArticleSidePanel
        isOpen={isSidePanelOpen}
        onClose={() => setIsSidePanelOpen(false)}
        articleTitle={article.title}
        imageUrl={article.dashboardImage}
      />

      <ArticlePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        article={article}
        anchorEl={titleRef.current}
      />
    </>
  );
}
