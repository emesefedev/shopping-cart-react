import { Link } from "react-router-dom";

export default function CheckOrder() {
  
  return (
    <div className="p-8">
      <h1 className="mb-8">Check Order</h1>
      <Link to="/success">Successful Purchasse</Link>
    </div>
  )
}
