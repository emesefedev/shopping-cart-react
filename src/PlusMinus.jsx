export default function PlusMinus({amount, increase, decrease}) {
  
  return (    
    <div className="plus-minus-layout">
      <button 
        style={{minWidth: "25px", minHeight: "25px"}} 
        className="plus-minus-button"
        onClick={decrease}
      >
        -
      </button>
      <p style={{minWidth: "24px", textAlign: "center"}}>{amount}</p>
      <button 
        style={{minWidth: "25px", minHeight: "25px"}} 
        className="plus-minus-button"
        onClick={increase}
      >
        +
      </button>
    </div>
  )
}
