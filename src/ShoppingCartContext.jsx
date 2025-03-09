import { createContext, useContext, useState } from "react";
import { MAX_QUANTITY } from "./constants"

const ShoppingCartContext = createContext({
  products: {},
  totalProducts: 0,
  addProduct: () => {},
  updateQuantity: () => {},
  deleteProduct: () => {}
})

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartContextProvider({children}) {
  const [products, setProducts] = useState({})
  function addProduct(product) {
    setProducts(prev => {
      return {
        ...prev,
        [product.id]: product
      }
    })
  }

  function updateQuantity(productId, newQuantity) {
    setProducts(prev => {
      const product = prev[productId]
      if(!product) {
        return prev
      }

      if(newQuantity == 0) {
        delete prev[productId]
        return {...prev}
      }

      if(newQuantity == MAX_QUANTITY) {
        return prev
      }

      return {
        ...prev,
        [productId]: {...product, quantity: newQuantity}
      }
    })
  }

  function deleteProduct(productId) {
    setProducts(prev => {
      const product = prev[productId]
      if(!product) {
        return prev
      }

      delete prev[productId]
      return {...prev}
    })
  }

  const value = {
    products,
    totalProducts: countProducts(products),
    addProduct,
    updateQuantity,
    deleteProduct
  }
  
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

function countProducts(products) {
  let total = 0
  for(let { quantity} of Object.values(products)) {
    total+=quantity
  }
  return total
}
