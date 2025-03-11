import { Link } from "react-router-dom"

export default function LinkWithBorder({to, children}) {
  
  return (
    <Link 
      className="text-(--primary-color) hover:text-(--tertiary-color) border-(--primary-color) hover:border-(--tertiary-color) border-2 border-solid rounded-lg p-1 w-fit" 
      to={to}>
        {children}
    </Link>
  )
}