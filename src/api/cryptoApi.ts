import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export interface MarketCoin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

export const fetchMarketData = async (): Promise<MarketCoin[]> => {
  // Adiciona um delay artificial
  await new Promise((resolve) => setTimeout(resolve, 800));
  const { data } = await api.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 25,
      page: 1,
    },
  });
  return data;
};
