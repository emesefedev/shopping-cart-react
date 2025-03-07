import { ditto, chansey, crobat, torchic, wingull, swablu, glaceon, smoliv } from "./fake-data"
import Product from "./Product"

export default function Home() {
  
  return (
    <>
      <div className="products-container">
        <Product pokemon={ditto}></Product>
        <Product pokemon={chansey}></Product>
        <Product pokemon={crobat}></Product>
        <Product pokemon={torchic}></Product>
        <Product pokemon={wingull}></Product>
        <Product pokemon={swablu}></Product>
        <Product pokemon={glaceon}></Product>
        <Product pokemon={smoliv}></Product>
      </div>
    </>
  )
}
