export default function PlusMinus({amount, increase, decrease}) {

  const buttonStyle = "bg-transparent text-(--secondary-color) hover:text-(--tertiary-color) border-(--secondary-color) hover:border-(--tertiary-color) border-solid border-2 rounded-lg p-px min-w-7 min-h-7"
  
  return (    
    <div className="flex gap-4">
      <button 
        className={buttonStyle}
        onClick={decrease}
      >
        -
      </button>
      
      <p className="text-center min-w-7">
        {amount}
      </p>
      
      <button 
        className={buttonStyle}
        onClick={increase}
      >
        +
      </button>
    </div>
  )
}
