import PlusMinus from "./PlusMinus"
import { useState } from "react"
import { useShoppingCartContext } from "../ShoppingCartContext"


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
    <div className="flex flex-col items-center gap-2 bg-(--primary-color) text-(--background-color) rounded-lg p-6 min-h-100">
      <img className="min-w-50" src={pokemon.image} alt="product image" />
      <p className="text-xl font-semibold capitalize">{pokemon.name}</p>
      <p className="text-lg">{pokemon.weight}€</p>

      { (!product?.quantity && wantToBuy) || product?.quantity > 0
        ? <PlusMinus amount={quantity} increase={increaseQuantity} decrease={decreaseQuantity}></PlusMinus>  
        : <button 
            className="bg-(--secondary-color) hover:bg-(--tertiary-color) text-(--background-color) border-none rounded-lg p-1 min-w-12 min-h-6" 
            onClick={buy}>
              Buy
          </button>
      }
    </div>  
  )
}
