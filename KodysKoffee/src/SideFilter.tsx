import { useState } from 'react';
function SideFilter() {
    let [checkedHot, setCheckedHot] = useState(new Set())
    
    function UpdateFilter(checked:boolean, filterType: string)
    {
        if(checked){
            setCheckedHot((prev) => new Set(prev).add(filterType));
        } else {
            setCheckedHot((prev) => 
                {
                    const next = new Set(prev);
                    next.delete(filterType);
                    return next;
                }
            );
        }
    }
    return (
    <aside className='sideFilter'>
        <h2> Filter Options</h2>
        <ul>
            <li>All</li>
            <li>Hot Drinks</li>
            <li>Iced Drinks</li>
            <li>Pastries</li>
        </ul>
        <fieldset>
            <legend>Temperature</legend>
            <label htmlFor="hot">
            <input type="checkbox" id="hot" onChange={(e)=>{e.target.checked, "hot"}}/>
                Hot
            </label>
        </fieldset>
    </aside>
    );
}

export default SideFilter;


