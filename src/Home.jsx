import { ditto, chansey, crobat, torchic, wingull, swablu, glaceon, smoliv } from "./fake-data"
import ProductCard from "./ProductCard"

import { useOutletContext } from "react-router-dom"

export default function Home() {

  const [updateProductsToBuy] = useOutletContext()
  
  return (
    <div className="p-32">
      <h1 className="mb-32">Products</h1>

      <div className="products-container">
        <ProductCard pokemon={ditto} updateProductsToBuy={updateProductsToBuy}></ProductCard>
        <ProductCard pokemon={chansey} updateProductsToBuy={updateProductsToBuy}></ProductCard>
        <ProductCard pokemon={crobat} updateProductsToBuy={updateProductsToBuy}></ProductCard>
        <ProductCard pokemon={torchic} updateProductsToBuy={updateProductsToBuy}></ProductCard>
        <ProductCard pokemon={wingull} updateProductsToBuy={updateProductsToBuy}></ProductCard>
        <ProductCard pokemon={swablu} updateProductsToBuy={updateProductsToBuy}></ProductCard>
        <ProductCard pokemon={glaceon} updateProductsToBuy={updateProductsToBuy}></ProductCard>
        <ProductCard pokemon={smoliv} updateProductsToBuy={updateProductsToBuy}></ProductCard>
      </div>
    </div>
  )
}
