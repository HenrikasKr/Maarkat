import type { Stock } from "../types/stock";

type StockCardProps = {
    stock: Stock;
}



function StockCard({stock}: StockCardProps) {

    const priceChange = stock.price - stock.previousClose
    const priceChangePercent = (priceChange / stock.previousClose) * 100
    
    const changeNumberColor = priceChange > 0 ? "text-emerald-500" : priceChange < 0 ? "text-red-600" : "text-zinc-500";
    const changeSymbol = priceChange > 0 ? "+" : ""

  return (
    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col gap-2 w-full">
      <div className="w-full flex flex-row justify-between">
        <p className="font-bold">{stock.symbol}</p>
        <p className={changeNumberColor}>{changeSymbol}{priceChangePercent.toFixed(2)}%</p>
      </div>
      <p className="text-sm text-zinc-400">{stock.name}</p>
      <p className="text-2xl font-semibold">${stock.price}</p>
      <p className={changeNumberColor}>{changeSymbol}{priceChange.toFixed(2)} today</p>
    </div>
  );
}

export default StockCard;
