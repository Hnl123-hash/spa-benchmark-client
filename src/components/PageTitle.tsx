export default function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-300">
      {title}
    </h1>
  );
}
