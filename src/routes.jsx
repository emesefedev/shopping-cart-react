import App from './App.jsx'
import ShoppingCart from './ShoppingCart.jsx'
import CheckOrder from './CheckOrder.jsx'
import SuccessfulPurchase from './SuccessfulPurchase.jsx'
import ErrorPage from './ErrorPage.jsx'
import Home from './Home.jsx'

const routes = [
  {
    path: "/",
    element: <App/>,
    children: [
      { index: true, element: <Home/> },
      { path: "buy", element: <ShoppingCart/> },
      { path: "check", element: <CheckOrder/> },
      { path: "success", element: <SuccessfulPurchase/> },
    ],
    errorElement: <ErrorPage />,
  },
  
]

export default routes