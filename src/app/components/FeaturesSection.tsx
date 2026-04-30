import { Database, Brain, ShieldCheck } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Accesso ai dati",
      description:
        "Colleghiamo e analizziamo migliaia di portali di trasparenza pubblici italiani.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Analisi AI",
      description:
        "L'intelligenza artificiale trova pattern, anomalie e storie nascoste nei dati.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Fonti Verificabili",
      description:
        "Ogni risposta include fonti originali, metriche di affidabilità e visualizzazioni.",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">

          {features.map((feature, index) => (
            <div key={index} className="text-center">

              {/* Icon */}
              <div className="flex justify-center mb-5 text-gray-700">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
