import { useQuery } from "@tanstack/react-query";
import { fetchNewsFeed } from "../api/newsApi";

export const useNewsFeed = () => {
  return useQuery({
    queryKey: ["newsFeed"],
    queryFn: fetchNewsFeed,
  });
};
