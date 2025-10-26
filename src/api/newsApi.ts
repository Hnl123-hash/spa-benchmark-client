import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
}

export const fetchNewsFeed = async (): Promise<Post[]> => {
  // Adiciona um delay artificial
  await new Promise((resolve) => setTimeout(resolve, 300));
  const { data } = await api.get("/posts?limit=15");
  return data.posts;
};
