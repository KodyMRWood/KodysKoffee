import './App.css'
import MenuSection from './menuSection'

// Icons
import LatteImg from './assets/react.svg'

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

// Dictionary of items with their details
// Whenever you want to add a new drink / item you can look it up here
const itemDetails :ItemDetails= {
  "Latte":{
    name: "Latte",
    price: 5,
    description: "A milky espresso based drink",
    image: LatteImg,
    type: "coffee",
    temp: "hot"
  },
  "Cappacino":{
    name: "Cappacino",
    price: 5.50,
    description: "Espresso Drink with extra milk foam",
    image: LatteImg,
    type: "coffee",
    temp: "hot"
  },
  "FlatWhite": {
    name: "Flat White",
    price: 4.75,
    description: "Equal parts espresso and steamed milk",
    image: LatteImg,
    type: "coffee",
    temp: "hot"
  },
  "MatchLatte": {
    name: "Matcha Latte",
    price: 5.50,
    description: "Ceremonial grade matcha with steamed milk",
    image: LatteImg,
    type: "coffee",
    temp: "hot"
  },
  "Iced Latte": {
    name: "Iced Latte",
    price: 5.00,
    description: "Like a latte but cold",
    image: LatteImg,
    type: "coffee",
    temp: "iced"
  },
  "Iced Matcha": {
    name: "Iced Matcha",
    price: 5.50,
    description: "Like a matcha latte but cold",
    image: LatteImg,
    type: "coffee",
    temp: "iced"
  },
    "Iced Cap": {
    name: "Iced Matcha",
    price: 5.50,
    description: "Like a matcha latte but cold",
    image: LatteImg,
    type: "coffee",
    temp: "iced"
  },
}

const items = Object.keys(itemDetails);

function App() {

  
  return (
    <>
    <img src="./assets/kodys-koffee-logo.png" alt="Kody's Koffee Logo" className="logo"/>
    <h1>Kody's Koffee</h1>
    <aside className="sideFilter">
      <h2> Filter Options</h2>
      <ul>
        <li>All</li>
        <li>Hot Drinks</li>
        <li>Iced Drinks</li>
        <li>Pastries</li>
        </ul>
    </aside>
      <MenuSection items={items} itemDetails={itemDetails}/>
    </>
  )
}

export default App
