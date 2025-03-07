export default function PlusMinus({amount, increase, decrease, buttonSize = "24px"}) {
  
  return (    
    <div className="plus-minus-layout">
      <button 
        style={{minWidth: buttonSize, minHeight: buttonSize}} 
        className="plus-minus-button"
        onClick={decrease}
      >
        -
      </button>
      <p style={{minWidth: buttonSize, textAlign: "center"}}>{amount}</p>
      <button 
        style={{minWidth: buttonSize, minHeight: buttonSize}} 
        className="plus-minus-button"
        onClick={increase}
      >
        +
      </button>
    </div>
  )
}
