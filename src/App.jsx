import { useState } from "react";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  const [productsToBuy, setProductsToBuy] = useState(0)

  const updateProductsToBuy = (productsToAdd) => {
    setProductsToBuy(productsToBuy + productsToAdd)
  }

  return (
    <>
      <div className="nav-bar">
        <p><Link className="link-home" to="/">Home</Link></p>
        <Link className="shopping-cart-link link-border ml-auto" to="/buy">
          Shopping Cart
          { productsToBuy > 0 
            && <div className="shopping-cart-bubble">
                {productsToBuy}
              </div>
          }
        </Link>
      </div>

      <Outlet context={[updateProductsToBuy]}/>
    </>
  )
}

export default App
