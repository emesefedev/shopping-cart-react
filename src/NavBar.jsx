import { useShoppingCartContext } from "./ShoppingCartContext"
import { Link } from "react-router-dom"

export default function Navbar() {
  const {totalProducts} = useShoppingCartContext()

  return (
    <div className="flex justify-between items-center bg-(--secondary-color) w-full pt-2 pb-2 pr-8 pl-8">
        <Link className="text-(--primary-color) text-6xl" to="/">Home</Link>
        <Link className="relative text-(--primary-color) hover:text-(--tertiary-color) no-underline border-(--primary-color) hover:border-(--tertiary-color) border-2 border-solid  rounded-lg p-1" to="/buy">
          Shopping Cart
          { totalProducts > 0 
            && <div className="absolute top-2 -right-3 -translate-y-full bg-(--alert-color) w-6 h-6 rounded-xl text-center text-(--secondary-color)">
                {totalProducts}
              </div>
          }
        </Link>
      </div>
  )
}