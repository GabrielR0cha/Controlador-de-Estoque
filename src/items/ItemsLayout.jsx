import { Link, Outlet, useLocation } from "react-router-dom";

export default function ItemsLayout () {

  const { pathname } = useLocation()

  return (
<main>
  <h1>Stock item</h1>
  <div className="tabs">
    <Link className={`tab ${pathname === "/items/new" ? "active" : ""}`} to="/items/new">Novo Item</Link>
    <Link  className={`tab ${pathname === "/items" ? "active" : ""}`} to="/items">Todos os items</Link>
  </div>
  <Outlet/>
</main> 

)
}