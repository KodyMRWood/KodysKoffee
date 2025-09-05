import MenuSection from './menuSection';
import { useEffect, useState } from 'react';
import type {Item} from './App';

export interface Props {
  menu: Item[];
}


function SideFilter({menu}: Props) {
    const [filters, setFilters] = useState<string[]>([]);
    const [newMenu, setNewMenu] = useState(menu);
    function UpdateFilters(newFilter:string)
    {
        if(filters.includes(newFilter)){
            const tempFilters = filters.filter((e)=> e !== newFilter);
            setFilters(tempFilters);
        }
        else{
            setFilters([...filters,newFilter]);
        }
    }

    useEffect(()=>{FilterItems();}, [filters]);

    // TODO: Make sure to only add if not already added
    function FilterItems(){
        if(filters.length>0)
        {
            const tempItems = filters.map(( newFilter)=>{
                const temp = menu.filter((item) => item.temp === newFilter || item.type === newFilter)
                return temp;
            })
            setNewMenu(tempItems.flat());
        }
        else{
            setNewMenu([...menu]);
        }   
    };

    return (
    <>
        <aside className='sideFilter'>
            <h2> Filter Options</h2>
            <fieldset>
                <legend>Temperature</legend>
                <label htmlFor="hot">
                <input type="checkbox" id="hot" onChange={()=>{UpdateFilters('hot')}}/>
                    Hot
                </label>
                <label htmlFor="iced">
                <input type="checkbox" id="iced" onChange={()=>{UpdateFilters('iced')}}/>
                    Iced
                </label>
            </fieldset>
            <fieldset>
                <legend>Type</legend>
                <label htmlFor="coffee">
                <input type="checkbox" id="coffee" onChange={()=>{UpdateFilters('coffee')}}/>
                    Coffee
                </label>
                <label htmlFor="matcha">
                <input type="checkbox" id="matcha" onChange={()=>{UpdateFilters('matcha')}}/>
                    Matcha
                </label>
            </fieldset>
        </aside>
        {console.log(newMenu)}
        <MenuSection menu={newMenu}/>
    </>
    );
}

export default SideFilter;


