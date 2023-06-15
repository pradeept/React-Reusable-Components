import React,{useState} from 'react';
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function Accordion({items}){
    const [expandedIndex, setExpandedIndex] = useState(-1);

    function handleClick(Index){
        if(expandedIndex === Index){    //if user clicks on same accordion
            setExpandedIndex(-1);       //close it
            
        }else{
            setExpandedIndex(Index);
        }
    }

    return <div>
        {items.map((item,index)=>{
            const isExpanded = index === expandedIndex;
            const icon = <span className='text-2xl'>
                            {isExpanded?<GoChevronDown/>:<GoChevronLeft />}
                        </span>

            return <div key={item.id} onClick={()=>handleClick(index)}>
                    <div className='flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer'>
                        {item.title} 
                        {icon}    
                    </div>
                    {isExpanded&&<div className='border-b p-5'>{item.content}</div>}
                </div>
            })
        }
    </div>
}

export default Accordion;

