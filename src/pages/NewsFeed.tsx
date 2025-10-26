/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNewsFeed } from "../hooks/useNewsFeed";
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";

function NewsCard({ post }: { post: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-4">
      <h3 className="text-xl font-bold text-blue-700 mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-3">{post.body.substring(0, 150)}...</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {post.tags.map((tag: any) => (
            <span
              key={tag}
              className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-sm font-medium text-gray-500">
          {post.reactions.likes} Reações
        </span>
      </div>
    </div>
  );
}

export default function NewsFeed() {
  const { data: posts, isLoading, isError, error } = useNewsFeed();

  if (isLoading) return <Loading message="Carregando feed de notícias..." />;
  if (isError)
    return (
      <div className="text-red-500">
        Erro ao buscar notícias: {(error as Error).message}
      </div>
    );

  return (
    <div>
      <PageTitle title="Feed de Notícias" />
      <div>
        {posts?.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
