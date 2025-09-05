import ItemCard from "./ItemCard";
import type {Item} from "./App";

interface Props{
  menu: Item[];
}

function MenuSection( {menu}: Props) {
  return (
    <div className="menuSection">
      {menu.length === 0 && <p>No items available</p>}
        {menu.map((newItem) => {
          return(
            <ItemCard name={newItem.name} price={newItem.price} description={newItem.description} image={newItem.image} key={newItem.name}/>
          )
        })}

    </div>
  )
}

export default MenuSection;