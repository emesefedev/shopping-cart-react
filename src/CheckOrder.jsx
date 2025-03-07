import { Link } from "react-router-dom";

export default function CheckOrder() {
  
  return (
    <div className="p-32">
      <h1 className="mb-32">Check Order</h1>
      <Link to="/success">Successful Purchasse</Link>
    </div>
  )
}
