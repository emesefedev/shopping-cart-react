import { pokemon } from "./fake-data"
import Product from "./Product"

export default function Home() {
  
  return (
    <>
      <div className="products-container">
        <Product pokemon={pokemon}></Product>
        <Product pokemon={pokemon}></Product>
        <Product pokemon={pokemon}></Product>
        <Product pokemon={pokemon}></Product>
        <Product pokemon={pokemon}></Product>
        <Product pokemon={pokemon}></Product>
        <Product pokemon={pokemon}></Product>
        <Product pokemon={pokemon}></Product>
        <Product pokemon={pokemon}></Product>

      </div>
    </>
  )
}
