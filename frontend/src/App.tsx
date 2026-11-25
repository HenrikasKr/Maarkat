import StockCard from "./components/StockCard";
import { stocks } from "./data/stocks";

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <h1 className="text-4xl font-bold">Maarkat</h1>
      <p className="mt-2 text-zinc-400">
        Always watching the markets.
      </p>

      <section>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stocks.map((stock) => (
          <StockCard
          key={stock.symbol}
          stock={stock}

        />
        ))}
        </div>
      </section>
    </main>
  );
}

export default App;