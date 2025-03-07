import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import ProductEdit from "./ProductEdit";

export default function ShoppingCart() {
  const [updateProductsToBuy] = useOutletContext()

  const fakeProduct = {
    id: 132, 
    name: "ditto",
    price: 40,
    quantity: 2
  }
  
  return (
    <div className="p-32">
      <h1 className="mb-32">Shopping Cart</h1>

      <div className="products-list">
        <ProductEdit product={fakeProduct} updateProductsToBuy={updateProductsToBuy}></ProductEdit>
      </div>

      <Link to="/check">Check Order</Link>
    </div>
  )
}
