import App from './App.jsx'
import ShoppingCart from './ShoppingCart.jsx'
import SuccessfulPurchase from './SuccessfulPurchase.jsx'
import ErrorPage from './ErrorPage.jsx'

const routes = [
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "buy",
    element: <ShoppingCart/>,
  },
  {
    path: "success",
    element: <SuccessfulPurchase/>,
  },
]

export default routes