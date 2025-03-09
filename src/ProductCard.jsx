import PlusMinus from "./PlusMinus"
import { useState } from "react"
import { useShoppingCartContext } from "./ShoppingCartContext"


export default function ProductCard({pokemon, product}) {
  const {
    addProduct,
    updateQuantity
  } = useShoppingCartContext()
  
  const quantity = product?.quantity
  const [wantToBuy, setWantToBuy] = useState(false)
  
  const increaseQuantity = () => {
    if (quantity === 0 || quantity == null) { 
      addProduct({
        id: pokemon.id,
        name: pokemon.name,
        quantity: 1,
        price: pokemon.weight
      })
      return
    }

    updateQuantity(pokemon.id, quantity + 1)
  }

  const decreaseQuantity = () => {
    if(quantity == null) {
      return
    }

    updateQuantity(pokemon.id, quantity - 1)
  }

  const buy = () => {
    setWantToBuy(true)
    increaseQuantity()
  }

  return (
    <div className="product-card">
      <img className="product-img" src={pokemon.sprites.front_default} alt="top logo" />
      <p className="product-title">{pokemon.name}</p>
      <p className="product-price">{pokemon.weight}€</p>

      { (!product?.quantity && wantToBuy) || product?.quantity > 0
        ? <PlusMinus amount={quantity} increase={increaseQuantity} decrease={decreaseQuantity} buttonSize="24px"></PlusMinus>  
        : <button className="product-buy-button" onClick={buy}>Buy</button>
      }
      
    </div>  
  )
}
