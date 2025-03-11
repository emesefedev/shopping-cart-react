
import { Outlet } from "react-router-dom";
import { ShoppingCartContextProvider } from "./ShoppingCartContext";
import Navbar from "./NavBar";

function App() {

  return (
    <ShoppingCartContextProvider>
      <Navbar/>
      <Outlet />
    </ShoppingCartContextProvider>
  )
}

export default App
