import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { useCryptoData } from "../hooks/useCryptoData";
import clsx from "clsx";
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";

export default function MarketIntel() {
  const { data: coins, isLoading, isError } = useCryptoData();

  if (isLoading) return <Loading message="Buscando dados de mercado..." />;
  if (isError)
    return <div className="text-red-500">Erro ao buscar dados de mercado.</div>;

  // Prepara dados para os gráficos
  const chartData = coins
    ?.slice(0, 10)
    .map((coin) => ({
      name: coin.symbol.toUpperCase(),
      price: coin.current_price,
      volume: coin.total_volume,
    }))
    .reverse();

  return (
    <div>
      <PageTitle title="Inteligência de Mercado (Cripto)" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold mb-4 text-center">
            Top 10 - Preço Atual (USD)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={["dataMin - 100", "dataMax + 100"]} />
              <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
              <Legend />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold mb-4 text-center">Top 10 - Volume (24h)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Legend />
              <Bar dataKey="volume" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="font-bold mb-4">Tabela de Mercado (Top 25)</h3>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Nome</th>
              <th className="text-right p-2">Preço</th>
              <th className="text-right p-2">Mudança 24h</th>
              <th className="text-right p-2">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr key={coin.id} className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <div className="font-medium">{coin.name}</div>
                  <div className="text-sm text-gray-500">
                    {coin.symbol.toUpperCase()}
                  </div>
                </td>
                <td className="p-3 text-right font-medium">
                  ${coin.current_price.toLocaleString()}
                </td>
                <td
                  className={clsx(
                    "p-3 text-right font-semibold",
                    coin.price_change_percentage_24h > 0
                      ? "text-green-600"
                      : "text-red-600"
                  )}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="p-3 text-right text-gray-700">
                  ${coin.market_cap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
