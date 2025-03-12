import PlusMinus from "./PlusMinus"
import DeleteButton from "./DeleteButton"


export default function ProductEdit({product, updateQuantity, deleteProduct}) {
  const quantity = product.quantity

  const increaseQuantity = () => {
    updateQuantity(product.id, quantity + 1)
  }

  const decreaseQuantity = () => {
    updateQuantity(product.id, quantity - 1)
  }


  return (
    <div className="flex gap-6 items-center">
      <p className="text-xl font-semibold capitalize min-w-32">{product.name}</p>

      <PlusMinus amount={quantity} increase={increaseQuantity} decrease={decreaseQuantity}></PlusMinus>  

      <DeleteButton onClick={() => deleteProduct(product.id)}></DeleteButton>

    </div>  
  )
}
