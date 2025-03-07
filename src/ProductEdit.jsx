import PlusMinus from "./PlusMinus"

import { useState } from "react"

import { MIN_AMOUNT, MAX_AMOUNT } from "./constants"
import { deleteProduct, updateQuantity, displayProducts } from "./shopping-cart"

export default function ProductEdit({product, updateProductsToBuy}) {
  const [amount, setAmount] = useState(product.quantity)

  const increaseAmount = () => {
    if (amount === MAX_AMOUNT) return 

    updateQuantity(product.id, amount + 1)
    setAmount(amount + 1)
    updateProductsToBuy(1)
    displayProducts()
  }

  const decreaseAmount = () => {
    if (amount === MIN_AMOUNT) {
      deleteProduct(product.id)
    }
    else updateQuantity(product.id, amount - 1)

    setAmount(amount - 1)
    updateProductsToBuy(-1)
  }


  return (
    <div className="product-item">
      <p className="product-item-title">{product.name}</p>

      <PlusMinus amount={amount} increase={increaseAmount} decrease={decreaseAmount} buttonSize="24px"></PlusMinus>  
    </div>  
  )
}
