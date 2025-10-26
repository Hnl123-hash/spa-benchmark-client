import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  stock: number;
  category: string;
  rating: number;
}

export const fetchProducts = async (): Promise<Product[]> => {
  // Adiciona um delay artificial para simular uma API mais lenta
  await new Promise((resolve) => setTimeout(resolve, 500));
  const { data } = await api.get("/products?limit=20&skip=10");
  return data.products;
};
