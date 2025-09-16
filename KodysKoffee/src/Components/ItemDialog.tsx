interface Props{
  item: {name:string, price:number, description:string, image:string}
}

function ItemDialog(menuItem: Props) {
  return (
    <dialog id={`favDialog`}>
      <form method="dialog">
        <p>Name: {menuItem.item.name}
            Price: {menuItem.item.price}
            Description: {menuItem.item.description}

            {(menuItem.item.image !== "") &&
            <img 
            src={menuItem.item.image} 
            alt={menuItem.item.name + menuItem.item.description} 
            className="dialogImg" 
            height="100px"
            />}
        </p>
        <button id="confirmBtn">Close the dialog</button>
      </form>
    </dialog>
  )
}

export default ItemDialog