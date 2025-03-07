import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <div className="nav-bar">
        <h1><Link className="link-home" to="/">Home</Link></h1>
        <Link className="link-border ml-auto" to="/buy">Shopping Cart</Link>
      </div>

      <Outlet />
    </>
  )
}

export default App
