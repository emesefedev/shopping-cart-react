import { Link } from "react-router-dom";

import { useShoppingCartContext } from "./ShoppingCartContext";

import ProductEdit from "./ProductEdit";

export default function ShoppingCart() {
  
  const {products, updateQuantity} = useShoppingCartContext()

  const hasProducts = Object.values(products).length > 0
  
  return (
    <div className="p-8">
      <h1 className="mb-8">Shopping Cart</h1>
        <div className="flex flex-col gap-5">
          {hasProducts 
            ? <> 
                <div className="flex flex-col gap-2">
                  {Object.values(products).map((product) => {
                    return <ProductEdit
                      key={product.id} 
                      product={product} updateQuantity={updateQuantity}></ProductEdit>
                    })}
                </div>
                <Link to="/check">Check Order</Link>
              </>
            : <>
                <p>There are no products</p>
                <Link to="/">Find Products</Link>
              </>
          }
        
        </div>
    </div>
  )
}
