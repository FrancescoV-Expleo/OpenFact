interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-sm md:text-base text-gray-300">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-gray-700 to-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem value="1.100+" label="Categorie di dati" />
          <StatItem value="12.000+" label="Portali Trasparenti PA" />
          <StatItem value="65.000+" label="Atti Normativi (dal 1939 al 2025)" />
        </div>
      </div>
    </section>
  );
}
