export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">OpenFact</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </a>
          <a href="#applicazioni" className="text-gray-600 hover:text-gray-900 transition-colors">
            Investigation
          </a>
          <a href="#tech-stack" className="text-gray-600 hover:text-gray-900 transition-colors">
            Fact Check
          </a>
          <a href="#prezzi" className="text-gray-600 hover:text-gray-900 transition-colors">
            Story Discovery
          </a>
          <a href="#contatti" className="text-gray-600 hover:text-gray-900 transition-colors">
            Datasets
          </a>
        </nav>

        <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
