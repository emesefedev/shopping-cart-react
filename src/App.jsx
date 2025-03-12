
import { Outlet } from "react-router-dom";
import { ShoppingCartContextProvider } from "./ShoppingCartContext"
import NavBar from "./components/NavBar";

function App() {

  return (
    <ShoppingCartContextProvider>
      <NavBar/>
      <Outlet />
    </ShoppingCartContextProvider>
  )
}

export default App
