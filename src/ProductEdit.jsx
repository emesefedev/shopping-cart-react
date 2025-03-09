import PlusMinus from "./PlusMinus"


export default function ProductEdit({product, updateQuantity}) {
  const quantity = product.quantity

  const increaseQuantity = () => {
    updateQuantity(product.id, quantity + 1)
  }

  const decreaseQuantity = () => {
    updateQuantity(product.id, quantity - 1)
  }


  return (
    <div className="product-item">
      <p className="product-item-title">{product.name}</p>

      <PlusMinus amount={quantity} increase={increaseQuantity} decrease={decreaseQuantity} buttonSize="24px"></PlusMinus>  
    </div>  
  )
}
