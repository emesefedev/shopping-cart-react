import LinkWithBorder from "./components/LinkWithBorder"
import { useShoppingCartContext } from "./ShoppingCartContext"
import ProductCheck from "./components/ProductCheck"

export default function CheckOrder() {

  const {products, deleteAllProducts} = useShoppingCartContext()

  const hasProducts = Object.values(products).length > 0

  const totalPrice = Object.values(products).reduce((sum, product) => sum + (product.quantity * product.price), 0)
  
  return (
    <div className="p-8">
      <h1 className="mb-8">Check Order</h1>
      <div className="flex flex-col gap-5">
        {hasProducts 
          ? <> 
              <div className="flex flex-col gap-2">
                {Object.values(products).map((product) => {
                  return <ProductCheck
                    key={product.id} 
                    product={product}>
                    </ProductCheck>
                  })}
              </div>
              
              <div className="flex gap-6 items-center">
                <p className="text-2xl font-bold min-w-32">Total</p>
                <p className="text-lg">{totalPrice}€</p>
              </div>

              <LinkWithBorder  onClick={deleteAllProducts} to="/success">Buy</LinkWithBorder>
            </>
          : <>
              <p>There are no products</p>
              <LinkWithBorder to="/">Find Products</LinkWithBorder>
            </>
        }
      
      </div>
    </div>
  )
}
