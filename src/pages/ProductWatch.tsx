import { useProductList } from "../hooks/useProductList";
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col transition-transform transform hover:scale-105">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover rounded-md"
      />
      <h3 className="font-bold mt-3 truncate text-lg">{product.title}</h3>
      <p className="text-sm text-gray-500 capitalize">{product.category}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-xl font-semibold text-blue-600">
          ${product.price}
        </span>
        <span
          className={
            product.stock < 50
              ? "text-sm font-medium text-red-500"
              : "text-sm font-medium text-green-600"
          }
        >
          {product.stock} em estoque
        </span>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        Rating: {product.rating.toFixed(1)} / 5.0
      </div>
    </div>
  );
}

export default function ProductWatch() {
  const { data: products, isLoading, isError, error } = useProductList();

  if (isLoading) return <Loading message="Buscando produtos no cliente..." />;
  if (isError)
    return (
      <div className="text-red-500">
        Erro ao buscar produtos: {(error as Error).message}
      </div>
    );

  return (
    <div>
      <PageTitle title="Monitor de Produtos" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
