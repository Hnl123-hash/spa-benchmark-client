import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Loading from "../components/Loading";

// Lazy loading das "Ilhas de Conhecimento"
const ProductWatch = React.lazy(() => import("../pages/ProductWatch"));
const MarketIntel = React.lazy(() => import("../pages/MarketIntel"));
const NewsFeed = React.lazy(() => import("../pages/NewsFeed"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: (
          <Suspense
            fallback={<Loading message="Carregando Módulo Produtos..." />}
          >
            <ProductWatch />
          </Suspense>
        ),
      },
      {
        path: "market",
        element: (
          <Suspense
            fallback={<Loading message="Carregando Módulo Mercado..." />}
          >
            <MarketIntel />
          </Suspense>
        ),
      },
      {
        path: "news",
        element: (
          <Suspense
            fallback={<Loading message="Carregando Módulo Notícias..." />}
          >
            <NewsFeed />
          </Suspense>
        ),
      },
    ],
  },
]);
