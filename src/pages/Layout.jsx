import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;