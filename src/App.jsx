import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import PrizePool from "./components/PrizePool";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Highlights />
      <PrizePool />
      <CTA />
      <footer className="bg-black/80 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} MLBB Cup — Dibuat untuk komunitas pecinta Mobile Legends.
      </footer>
    </div>
  );
}

export default App;
