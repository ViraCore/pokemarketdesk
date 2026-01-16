import { Header } from "@/components/Header";
import { MarketStats } from "@/components/MarketStats";
import { TrendingCards } from "@/components/TrendingCards";
import { CardTable } from "@/components/CardTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main>
        <MarketStats />
        <TrendingCards />
        <CardTable />
      </main>
    </div>
  );
};

export default Index;
