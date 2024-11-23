import { Outlet } from "react-router-dom";

const SharedLayout = () => (
  <div>
    <header>{/* Навігація, якщо потрібно */}</header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default SharedLayout;
