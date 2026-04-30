import {
  BookSearch,
  ChartNoAxesCombined,
  PencilLine,
  SquarePen,
  Gavel,
  FileDigit,
  CodeXml,
  Binoculars,
} from 'lucide-react';

interface AgentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function AgentCard({ icon, title, description }: AgentCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-200 rounded-full mb-5">
        <div className="text-gray-700">{icon}</div>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default function AgentsSection() {
  const agents = [
    {
      icon: <BookSearch className="w-7 h-7" />,
      title: "Reader",
      description: "Discovery documentale con ricerca semantica e strutturale.",
    },
    {
      icon: <ChartNoAxesCombined className="w-7 h-7" />,
      title: "Analyst",
      description: "Analisi approfondita con estrazione dati, citazioni verificabili e calcoli complessi.",
    },
    {
      icon: <PencilLine className="w-7 h-7" />,
      title: "Writer",
      description: "Creazione documenti strutturati, report professionali e note tecniche.",
    },
    {
      icon: <SquarePen className="w-7 h-7" />,
      title: "Editor",
      description: "Modifica file testuali esistenti con aggiornamenti incrementali precisi.",
    },
    {
      icon: <Gavel className="w-7 h-7" />,
      title: "Legal",
      description: "Analizza normative e giurisprudenza, fornendo riferimenti precisi a leggi e sentenze.",
    },
    {
      icon: <FileDigit className="w-7 h-7" />,
      title: "Document Processor",
      description: "Generazione PDF, Excel, PowerPoint, Word con formattazione professionale.",
    },
    {
      icon: <CodeXml className="w-7 h-7" />,
      title: "Code Sandbox",
      description: "Data processing, analisi statistica e visualizzazioni.",
    },
    {
      icon: <Binoculars className="w-7 h-7" />,
      title: "Web Researcher",
      description: "Ricerca esterna con aggregazione risultati e report strutturati.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            8 agenti specializzati al tuo servizio
          </h2>
          <p className="text-gray-600 mt-3">
            Una rete di agenti specializzati per analizzare e interpretare i dati pubblici
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {agents.map((agent, index) => (
            <AgentCard key={index} {...agent} />
          ))}
        </div>
      </div>
    </section>
  );
}
