import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ArticlesSection from './components/ArticlesSection';
import QueryExamplesSection from './components/QueryExamplesSection';
import AgentsSection from './components/AgentsSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ArticlesSection />
        <QueryExamplesSection />
        <AgentsSection />
        <FeaturesSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}