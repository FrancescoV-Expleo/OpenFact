import { Search, TrendingUp, Users, MapPin } from 'lucide-react';

interface QueryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function QueryCard({ icon, title, description }: QueryCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function QueryExamplesSection() {
  const examples = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Spesa Comune di Milano",
      description: "Redazione di un articolo sulla spesa del Comune di Milano in materia di sicurezza in relazione a eventi di microciminalità.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Appalti pubblici aziende",
      description: "Quali aziende hanno ricevuto più appalti pubblici nella regione Lazio nel 2025? Scrivimi un articolo di giornale.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Spesa sanitaria regioni 2020",
      description: "Come è variata la spesa sanitaria per abitante nelle diverse regioni dal 2020? Generami uno scoring e fornisci le evidenze.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Funzionari e conflitti d'interesse",
      description: "Quali funzionari pubblici hanno maggiori conflitti d'interesse dichiarati? Redigi un’intera pagina di giornale.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Come fare domande giornalistiche
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Scopri come utilizzare la nostra piattaforma per le tue investigazioni
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {examples.map((example, index) => (
            <QueryCard key={index} {...example} />
          ))}
        </div>
      </div>
    </section>
  );
}
