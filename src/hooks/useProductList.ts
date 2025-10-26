import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/productsApi";

export const useProductList = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
