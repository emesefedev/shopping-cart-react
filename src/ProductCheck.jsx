import EditButton from "./EditButton"

export default function ProductCheck({product}) {

  return (
    <div className="flex gap-6 items-center">
      <p className="text-xl font-semibold capitalize min-w-32">{product.name}</p>

      <p className="min-w-24">{product.quantity} x {product.price}€</p>

      <p className="min-w-16">{product.quantity * product.price}€</p>

      <EditButton onClick={() => {}}></EditButton>
    </div>  
  )
}
