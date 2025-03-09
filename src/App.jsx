
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ShoppingCartContextProvider, useShoppingCartContext } from "./ShoppingCartContext";

function Navbar() {
  const {totalProducts} = useShoppingCartContext()

  return (
    <div className="nav-bar">
        <p><Link className="link-home" to="/">Home</Link></p>
        <Link className="shopping-cart-link link-border ml-auto" to="/buy">
          Shopping Cart
          { totalProducts > 0 
            && <div className="shopping-cart-bubble">
                {totalProducts}
              </div>
          }
        </Link>
      </div>
  )
}

function App() {


  return (
    <ShoppingCartContextProvider>
      <Navbar/>
      <Outlet />
    </ShoppingCartContextProvider>
  )
}

export default App
