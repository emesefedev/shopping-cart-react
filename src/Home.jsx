import ProductCard from "./components/ProductCard"
import { useShoppingCartContext } from "./ShoppingCartContext"
import { useEffect, useState } from "react"
import { fetchNPokemons } from "./api/pokemon"

export default function Home() {
  const { products } = useShoppingCartContext()

  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

 
  useEffect(() => {
    setIsLoading(true)
    fetchNPokemons(20)
    .then((savedPokemons) => {
      setPokemons(savedPokemons)
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, []);
  
  return (
    <div className="p-8">
      <h1 className="mb-8">Products</h1>
      
      {isLoading
        ? <p>Loading...</p>
        : <div className="grid gap-8 grid-rows-2 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
            {pokemons.map(it => (
              <ProductCard 
                key={it.id}
                product={products[it.id]}
                pokemon={it} />
            ))}
          </div>}    
    </div>
  )
}
