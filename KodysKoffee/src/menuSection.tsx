import ItemCard from "./ItemCard";

// Interface for object for each item that will be used to store the data
interface Item{
    name: string;
    price: number;
    description: string;
    image: string;
    type: string;
    temp: string; // hot or iced
}

// Interface for the dictionary that will be made of the items
interface ItemDetails {
    [key: string]: Item;
}

interface Props {
  itemDetails: ItemDetails;
  items: string[];

}


function MenuSection( {items, itemDetails}: Props) {
  // Based on filter (useState), create a new array of all items that should be shown
  /*
    if(isHotChecked && !isIcedChecked){
      add hot items to array
    }
  */
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
}

export default MenuSection;