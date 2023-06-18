import React from "react";
import Link from "./Link";


function SideBar(){

    const links = [
        {
            label:'Dropdown',path:"/"
        },
        {
            label:'Accordion',path:"/accordion"
        },
        {
            label:'Buttons',path:'/buttons'
        }
    ]


    return(
        //overflow-y-scroll
        <div className="sticky top-0  flex flex-col items-start">
            {
                links.map((link)=>{
                    return <Link 
                                key={link.label} 
                                to={link.path}
                                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
                            >
                                {link.label}
                            </Link>
                })
            }
        </div>
    )
}

export default SideBar;
