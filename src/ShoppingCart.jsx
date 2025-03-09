import { Link } from "react-router-dom";

import { useShoppingCartContext } from "./ShoppingCartContext";

import ProductEdit from "./ProductEdit";

export default function ShoppingCart() {
  // const [updateProductsToBuy] = useOutletContext()
  const {products, updateQuantity} = useShoppingCartContext()
  
  return (
    <div className="p-32">
      <h1 className="mb-32">Shopping Cart</h1>

      <div className="products-list">
        
        {Object.values(products).map((product) => {
          return <ProductEdit
            key={product.id} 
            product={product} updateQuantity={updateQuantity}></ProductEdit>
        })}
        
      </div>

      

      <Link to="/check">Check Order</Link>
    </div>
  )
}
