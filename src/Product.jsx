export default function Product({pokemon}) {
  
  return (
    <>
      <div className="product">
        <img className="product-img" src={pokemon.sprites.front_default} alt="top logo" />
        <p className="product-title">{pokemon.name}</p>
        <p className="product-price">{pokemon.weight}€</p>
      </div>
    </>
  )
}
