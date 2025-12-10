import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          1. The parent route uses the path '/' and renders the Layout component.
          2. All nested routes inherit this path structure and render their content
             inside the Layout's <Outlet />.
        */}
        <Route path="/" element={<Layout />}>
          {/* Default/Index route: Renders Home when the path is exactly '/' */}
          <Route index element={<Home />} />

          {/* Other nested routes: Renders Dashboard/Settings alongside the Sidebar */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />

          {/* Optional: A catch-all route for 404 pages */}
          <Route path="*" element={<h3>404: Page Not Found</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
