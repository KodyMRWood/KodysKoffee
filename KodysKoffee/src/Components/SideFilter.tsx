import MenuSection from './MenuSection';
import { useEffect, useState } from 'react';
import type {Item} from '../App';

export interface Props {
  menu: Item[];
}

function SideFilter({menu}: Props) {
    const [filters, setFilters] = useState<string[]>([]);
    const [filtersType, setFiltersType] = useState<string[]>([]);
    const [newMenu, setNewMenu] = useState(menu);

    // Update the filters array when a filter is added or removed
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

    // Update the filters array when a filter is added or removed specifically for type
    // Would like to make this more generic in the future
    function UpdateFiltersType(newFilter:string)
    {
        if(filtersType.includes(newFilter)){
            const tempFilters = filtersType.filter((e)=> e !== newFilter);
            setFiltersType(tempFilters);
        }
        else{
            setFiltersType([...filtersType,newFilter]);
        }
    }

    // When the filters change, update the menu items shown
    useEffect(()=>{FilterItems();}, [filters,filtersType]);

    // Filter the menu to only show the items that match the filters selected
    function FilterItems(){
        let result: Item[] = [...menu];
        if(filters.length>0)
        {
            const tempItems = filters.map((newFilter)=>{
                const temp = result.filter((item) => ( item.temp === newFilter));
                return temp;
            })
            result = ConvertToItemsSet(tempItems);
        }
        else{
            result = [...menu];
        }

        if(filtersType.length>0)
        {
            const tempItems = filtersType.map((newFilter)=>{
                const temp = result.filter((item) => (item.type === newFilter));
                return temp;
            })
            result = ConvertToItemsSet(tempItems);
        }

        if (result.length>0){
            setNewMenu(result);
        }
        else{
            setNewMenu([...menu]);
        }
    };

    // Convert the list of items filtered out base on filters to a single array
    // Then Convert to a set to erase duplicates and back to array 
    function ConvertToItemsSet(items:Item[][])
    {
        return Array.from(new Set(items.flat()));
    }

    return (
    <>
        <aside className='sideFilter'>
            <h2> Filter Options</h2>
            <fieldset >
                <legend>Temperature</legend>
                <div>
                    <label htmlFor="hot">
                    <input type="checkbox" id="hot" onChange={()=>{UpdateFilters('hot')}}/>
                        Hot
                    </label>
                </div>
                <div>
                    <label htmlFor="iced">
                    <input type="checkbox" id="iced" onChange={()=>{UpdateFilters('iced')}}/>
                        Iced
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Type</legend>
                <div>
                    <label htmlFor="coffee">
                    <input type="checkbox" id="coffee" onChange={()=>{UpdateFiltersType('coffee')}}/>
                        Coffee
                    </label>
                </div>
                <div>
                    <label htmlFor="matcha">
                    <input type="checkbox" id="matcha" onChange={()=>{UpdateFiltersType('matcha')}}/>
                        Matcha
                    </label>
                </div>
            </fieldset>
        </aside>
        <MenuSection menu={newMenu}/>
    </>
    );
}

export default SideFilter;


