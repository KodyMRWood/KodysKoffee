import ItemCard from "./ItemCard";
import type {Item} from "./App";

interface Props{
  menu: Item[];
}


function MenuSection( {menu}: Props) {
  // Based on filter (useState), create a new array of all items that should be shown
  /*
    if(isHotChecked && !isIcedChecked){
      add hot items to array
    }
  
  return (
    <div className="menuSection">
      {items.length === 0 && <p>No items available</p>}
      {}
        {items.map((item) => {
          const itemData = itemDetails[item];
          return(
            <ItemCard name={itemData.name} price={itemData.price} description={itemData.description} image={itemData.image} key={itemData.name}/>
          )
        })}

    </div>
  )
  */
  return (
    <div className="menuSection">
      {menu.length === 0 && <p>No items available</p>}
      {}
        {menu.map((newItem) => {
          return(
            <ItemCard name={newItem.name} price={newItem.price} description={newItem.description} image={newItem.image} key={newItem.name}/>
          )
        })}

    </div>
  )
}

export default MenuSection;