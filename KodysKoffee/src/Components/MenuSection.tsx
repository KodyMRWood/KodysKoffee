import ItemCard from "./ItemCard";
import type {Item} from "../App";
import { useState } from "react";
import ItemDialog from "./ItemDialog";


interface Props{
  menu: Item[];
}

function MenuSection( {menu}: Props) {

  //Default to first menu item
let [clickedItem, setClickedItem] = useState({
  name:'',
  price:0,
  description:'' ,
  image:'',
});

  return (
    <div className="menuSection">
      {menu.length === 0 && <p>No items available</p>}
        {menu.map((newItem) => {
          return(
            <ItemCard 
            name={newItem.name} 
            price={newItem.price} 
            description={newItem.description} 
            image={newItem.image} 
            key={newItem.name}
            clickFunc={() => setClickedItem(newItem)}
            />
          )
        })}
        <div>   
          <ItemDialog item={clickedItem}></ItemDialog>
        </div>
    </div>
  )
}

export default MenuSection;