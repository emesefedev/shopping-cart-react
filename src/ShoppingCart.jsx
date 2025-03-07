import { Link } from "react-router-dom";

export default function ShoppingCart() {
  
  return (
    <div className="p-32">
      <h1 className="mb-32">Shopping Cart</h1>
      <Link to="/check">Check Order</Link>
    </div>
  )
}
