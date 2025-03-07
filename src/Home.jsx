import { ditto, chansey, crobat, torchic, wingull, swablu, glaceon, smoliv } from "./fake-data"
import Product from "./Product"

import { useOutletContext } from "react-router-dom"

export default function Home() {

  const [updateProductsToBuy] = useOutletContext()
  
  return (
    <div className="p-32">
      <h1 className="mb-32">Products</h1>

      <div className="products-container">
        <Product pokemon={ditto} updateProductsToBuy={updateProductsToBuy}></Product>
        <Product pokemon={chansey} updateProductsToBuy={updateProductsToBuy}></Product>
        <Product pokemon={crobat} updateProductsToBuy={updateProductsToBuy}></Product>
        <Product pokemon={torchic} updateProductsToBuy={updateProductsToBuy}></Product>
        <Product pokemon={wingull} updateProductsToBuy={updateProductsToBuy}></Product>
        <Product pokemon={swablu} updateProductsToBuy={updateProductsToBuy}></Product>
        <Product pokemon={glaceon} updateProductsToBuy={updateProductsToBuy}></Product>
        <Product pokemon={smoliv} updateProductsToBuy={updateProductsToBuy}></Product>
      </div>
    </div>
  )
}
