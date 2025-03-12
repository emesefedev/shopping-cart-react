import Edit from "../assets/Edit"

export default function EditButton({onClick}) {

  const buttonStyle = "bg-transparent text-(--secondary-color) hover:text-(--tertiary-color) border-(--secondary-color) hover:border-(--tertiary-color) border-solid border-2 rounded-lg p-px min-w-7 min-h-7 flex justify-center items-center"
  
  return (    
      
      <button 
        className={buttonStyle}
        onClick={onClick}
      >
        <Edit color="#DECDE6" size="16"></Edit>
      </button>
  )
}
