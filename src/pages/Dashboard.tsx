import { useAuthStore } from "../store/useAuthStore";
import PageTitle from "../components/PageTitle";

export default function Dashboard() {
  const { user } = useAuthStore();

  return (
    <div>
      <PageTitle title="Dashboard" />
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Bem-vindo, {user.name}!</h2>
        <p className="mt-2 text-gray-600">
          Este é o painel de benchmark da SPA (Client-Side Rendering).
        </p>
        <p className="mt-4">
          Use a navegação acima para visitar as diferentes "Ilhas de
          Conhecimento". Cada página irá carregar seu próprio JavaScript (via
          code-splitting) e, em seguida, buscar seus próprios dados no cliente.
        </p>
        <p className="mt-2">
          Isto simula o oposto da sua arquitetura de Renderização Assistida,
          onde o servidor faria o fetch e a hidratação dos dados.
        </p>
      </div>
    </div>
  );
}
