import './App.css'

// Icons
import LatteImg from './assets/react.svg'
import Logo from './assets/Icon.svg'
import SideFilter from './SideFilter';

// Interface for object for each item that will be used to store the data
export interface Item{
    name: string;
    price: number;
    description: string;
    image: string;
    type: string;
    temp: string; // hot or iced
}


const menu: Item[] = [
{
    name: "Latte",
    price: 5,
    description: "A milky espresso based drink",
    image: LatteImg,
    type: "coffee",
    temp: "hot"
  },
  {
    name: "Cappuccino",
    price: 5.50,
    description: "Espresso Drink with extra milk foam",
    image: LatteImg,
    type: "coffee",
    temp: "hot"
  },
  {
    name: "Flat White",
    price: 4.75,
    description: "Equal parts espresso and steamed milk",
    image: LatteImg,
    type: "coffee",
    temp: "hot"
  },
    {
    name: "Matcha Latte",
    price: 5.50,
    description: "Ceremonial grade matcha with steamed milk",
    image: LatteImg,
    type: "matcha",
    temp: "hot"
  },
  {
    name: "Iced Latte",
    price: 5.00,
    description: "Like a latte but cold",
    image: LatteImg,
    type: "coffee",
    temp: "iced"
  },
 {
    name: "Iced Matcha",
    price: 5.50,
    description: "Like a matcha latte but cold",
    image: LatteImg,
    type: "matcha",
    temp: "iced"
  }
]

function App() {

  return (
    <>
    <img src={Logo} alt="Kody's Koffee Logo" className="logo"/>
    <h1 className='header'>Kody's Koffee</h1>
        <SideFilter menu={menu}></SideFilter>
    </>
  )
}

export default App
