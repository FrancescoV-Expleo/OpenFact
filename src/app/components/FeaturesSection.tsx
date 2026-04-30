import { Database, Brain, ShieldCheck } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
        <div className="text-gray-700">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Accesso ai dati",
      description: "Colleghiamo e analizziamo migliaia di portali di trasparenza pubblici italiani.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Analisi AI",
      description: "L'intelligenza artificiale trova pattern, anomalie e storie nascoste nei dati.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Fonti Verificabili",
      description: "Ogni risposta include fonti originali, metriche di affidabilità e visualizzazioni.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
