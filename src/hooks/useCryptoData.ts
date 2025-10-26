import { useQuery } from "@tanstack/react-query";
import { fetchMarketData } from "../api/cryptoApi";

export const useCryptoData = () => {
  return useQuery({
    queryKey: ["cryptoMarket"],
    queryFn: fetchMarketData,
    refetchInterval: 90000, // Atualiza a cada 90 segundos
  });
};
