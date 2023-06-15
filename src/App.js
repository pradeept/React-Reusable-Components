import './index.css';
import React from "react";
// import Button from "./components/Button";
// import {FaApple} from 'react-icons/fa';     //for icons
import Accordion from './components/Accordion';


function App(){ 
    // function handleClick(){
    //     console.log('Clicked!');
    // }

    const sample = [
        {
            id:"sasdfha",
            title:"Title 1",
            content:"This is a long content."
        },
        {
            id:"sasdfhd",
            title:"Title 2",
            content:"This is another long content"
        },
        {
            id:"sasdfhc",
            title:"Title 3 ",
            content:"This is yet another long content"
        },
        {
            id:"sasdfhe",
            title:"Title 4",
            content:"Uggh.. this should be the last one.."
        },
    ]

    return <>
        <div className='m-4'>
            {/* <Button primary rounded outline onClick={handleClick} > <FaApple/> Primary</Button>
            <Button secondary rounded outline onClick={handleClick} > <FaApple/> Secondary</Button>
            <Button success outline > success</Button>
            <Button warning rounded >  Warning</Button>
            <Button danger   > danger</Button> */}
            <Accordion items={sample} key={sample.id}/>
        </div>
    </>
}

export default App;
