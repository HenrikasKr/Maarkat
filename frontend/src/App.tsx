import StockCard from "./components/StockCard";
import type { Stock } from "./types/stock";
import { useState, useEffect } from "react";

function App() {

  const [stocks, setStocks] = useState<Stock[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStocks() {
      try {
        const response = await fetch("http://localhost:3000/api/stocks");
        if(!response.ok){
          throw new Error("Failed to fetch stocks")
        }

        const data= await response.json()

        setStocks(data.stocks);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false)
      }
    }

    fetchStocks();
  }, []);
  
  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <h1 className="text-4xl font-bold">Maarkat</h1>
      <p className="mt-2 text-zinc-400">
        Always watching the markets.
      </p>

      {loading ? (
        <p>Fetching data</p>
      ) : error ? (
          <p className="mt-6 text-red-500">{error}</p>
      ) : stocks.length === 0 ? (
        <p>No stocks available</p>
      ) : (
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
      )}
    </main>
  );
}

export default App;