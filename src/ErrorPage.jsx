import { Link } from "react-router-dom";

export default function ErrorPage() {
  
  return (
    <div className="p-8">
      <h1>Oh no, this route does not exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
}
