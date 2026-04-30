import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from "remark-breaks";

import { Article } from '../../data/articles';

interface ArticlePopupProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article;
  anchorEl: HTMLElement | null;
}

export default function ArticlePopup({
  isOpen,
  onClose,
  article
}: ArticlePopupProps) {

  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen || !article.file) return;

    const controller = new AbortController();

    setLoading(true);
    setContent('');

    fetch(article.file, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('File not found');
        return res.text();
      })
      .then(setContent)
      .catch(err => {
        if (err.name !== 'AbortError') {
          setContent('# Errore caricamento articolo');
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [isOpen, article.file]);

  if (!isOpen) return null;

  return (
    <>
      {/* OVERLAY OSCURO */}
      {/* BACKDROP */}
    <div
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    />

    {/* MODAL WRAPPER */}
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
      
      {/* MODAL */}
      <div
        className="bg-white w-full max-w-2xl max-h-[85vh] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 pointer-events-auto"
      >

          {/* HEADER */}
          <div className="flex items-start justify-between p-4 border-b">
            <div>
              <div className="text-xs text-gray-500 mb-1">
                <span className="font-medium text-gray-700">
                  {article.category}
                </span>
                <span> • </span>
                <span>{article.date}</span>
              </div>

              <h2 className="text-lg font-bold text-gray-900">
                {article.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* CONTENT */}
          <div className="p-4 overflow-y-auto max-h-[65vh] text-sm text-gray-700">
            {loading ? (
              <p className="text-gray-400">Caricamento...</p>
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkBreaks]}
                components={{
                  p: ({ children }) => <p className="mb-4">{children}</p>,
                  h1: ({ children }) => <h1 className="text-2xl font-bold mt-6 mb-3">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl font-bold mt-5 mb-3">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg font-semibold mt-4 mb-2">{children}</h3>,
                }}
              >
                {content}
              </ReactMarkdown>
            )}
          </div>

          {/* FOOTER */}
          <div className="p-4 border-t flex justify-end">
            <button className="cursor-pointer px-4 py-2 text-sm border rounded-lg hover:bg-gray-50 transition-colors">
              Condividi
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
