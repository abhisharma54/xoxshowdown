import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout, XoxShowdown, NotFoundPage } from "./index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="xox-showdown" element={<XoxShowdown />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
