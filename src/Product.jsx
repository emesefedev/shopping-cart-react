import PlusMinus from "./PlusMinus"

import { useState } from "react"

import { MIN_AMOUNT, MAX_AMOUNT } from "./constants"

export default function Product({pokemon}) {
  const [amount, setAmount] = useState(0)
  const [wantToBuy, setWantToBuy] = useState(false)

  const increaseAmount = () => {
    if (amount === MAX_AMOUNT) return 

    setAmount(amount + 1)
  }

  const decreaseAmount = () => {
    if (amount === MIN_AMOUNT) setWantToBuy(false)

    setAmount(amount - 1)
  }

  const buy = () => {
    setWantToBuy(true)
    increaseAmount()
  }

  return (
    <div className="product">
      <img className="product-img" src={pokemon.sprites.front_default} alt="top logo" />
      <p className="product-title">{pokemon.name}</p>
      <p className="product-price">{pokemon.weight}€</p>

      { wantToBuy 
        ? <PlusMinus amount={amount} increase={increaseAmount} decrease={decreaseAmount}></PlusMinus>  
        : <button className="product-buy-button" onClick={buy}>Buy</button>
      }
      
    </div>  
  )
}
