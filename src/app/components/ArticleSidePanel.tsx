import { X } from 'lucide-react';

interface ArticleSidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  articleTitle: string;
  imageUrl?: string;
  dashboardImageUrl?: string; // 👈 nuova immagine
}

export default function ArticleSidePanel({
  isOpen,
  onClose,
  articleTitle,
  imageUrl,
  dashboardImageUrl
}: ArticleSidePanelProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed top-0 right-0 h-full w-full md:w-1/2 bg-white shadow-2xl z-50 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 truncate">
            {articleTitle}
          </h2>

          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* immagine articolo (se vuoi mantenerla) */}
          {imageUrl && (
            <div className="flex justify-center">
              <img
                src={imageUrl}
                alt={articleTitle}
                className="w-full object-contain"
              />
            </div>
          )}

          {/* dashboard image */}
          {dashboardImageUrl ? (
            <div className="flex justify-center">
              <img
                src={dashboardImageUrl}
                alt={`${articleTitle} dashboard`}
                className="w-full max-w-[400px] object-contain"
              />
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              Nessuna dashboard disponibile
            </p>
          )}

        </div>
      </div>
    </>
  );
}
