import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
    <header>
      <Link to="/" className="logo"> GABESTOCK</Link> 
      <nav>
        <Link to="/">Início</Link>
        <Link to="/items">Items</Link>
      </nav>
    </header>
    <div>
      <Outlet />
    </div>
    <footer>
    Feito por @Gabriel Gonçalves da Rocha

    </footer>
    </>
  )
}