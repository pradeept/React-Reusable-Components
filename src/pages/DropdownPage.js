import React,{useState} from 'react';
import DropDown from '../components/DropDown';


function DropdownPage(){
    const [selected, setSelected] = useState(null);



    const handleSelect = (option)=>{
        setSelected(option);
    }

    const options = [
        {label:'Red',value:'red'},
        {label:'Green',value:'green'},
        {label:'Blue',value:'blue'},
    ]


    return <div className="flex">

            <DropDown options={options} value={selected} onChange={handleSelect} />
         </div>
}

export default DropdownPage;