export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OpenFact</h3>
            <p className="text-gray-400 text-sm">
              Verifica notizie e scopri storie nei dati pubblici.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Prodotto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Funzionalità</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prezzi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentazione</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Azienda</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Chi siamo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carriere</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contatti</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legale</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termini di servizio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 OpenFact. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
