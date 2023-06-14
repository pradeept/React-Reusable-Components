import './index.css';
import React from "react";
import Button from "./Button";
import {FaApple} from 'react-icons/fa';     //for icons


function App(){ 
    function handleClick(){
        console.log('Clicked!');
    }

    return <>
        <div className='m-4'>
            <Button primary rounded outline onClick={handleClick} > <FaApple/> Something</Button>
        </div>
    </>
}

export default App;
