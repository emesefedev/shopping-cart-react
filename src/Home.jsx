import { ditto, chansey, crobat, torchic, wingull, swablu, glaceon, smoliv } from "./fake-data"
import ProductCard from "./ProductCard"
import { useShoppingCartContext } from "./ShoppingCartContext"

const availableProducts = [
  ditto, chansey, crobat, torchic, wingull, swablu, glaceon, smoliv
]
export default function Home() {
  const { products } = useShoppingCartContext()
  
  return (
    <div className="p-8">
      <h1>Products</h1>

      <div className="grid gap-8 grid-rows-2 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
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
