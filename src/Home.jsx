import { ditto, chansey, crobat, torchic, wingull, swablu, glaceon, smoliv } from "./fake-data"
import ProductCard from "./ProductCard"
import { useShoppingCartContext } from "./ShoppingCartContext"

const availableProducts = [
  ditto, chansey, crobat, torchic, wingull, swablu, glaceon, smoliv
]
export default function Home() {
  const { products } = useShoppingCartContext()
  
  return (
    <div className="p-32">
      <h1 className="mb-32">Products</h1>

      <div className="products-container">
        {availableProducts.map(it => (
          <ProductCard 
            key={it.id}
            product={products[it.id]}
            pokemon={it} />
        ))}
      </div>
    </div>
  )
}
