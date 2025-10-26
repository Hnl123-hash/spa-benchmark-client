import { NavLink, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import clsx from "clsx";

export default function Layout() {
  const { user, logout } = useAuthStore();

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
      "px-3 py-2 rounded-md text-sm font-medium",
      isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
    );

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-blue-600">
              SPA Benchmark (CSR)
            </div>
            <div className="flex gap-4">
              <NavLink to="/" className={getLinkClass} end>
                Dashboard
              </NavLink>
              <NavLink to="/products" className={getLinkClass}>
                Produtos
              </NavLink>
              <NavLink to="/market" className={getLinkClass}>
                Mercado
              </NavLink>
              <NavLink to="/news" className={getLinkClass}>
                Notícias
              </NavLink>
            </div>
            <div className="flex items-center text-sm">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-gray-800">
                Olá, {user.name.split(" ")[0]}
              </span>
              <button
                onClick={logout}
                className="ml-3 text-blue-500 hover:underline"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
