interface LoadingProps {
  message?: string;
}

export default function Loading({ message = "Carregando..." }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-gray-700">{message}</p>
    </div>
  );
}
