import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { DefaultLayout } from "./layouts/default-layout";
import { Checkout } from "./pages/checkout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
