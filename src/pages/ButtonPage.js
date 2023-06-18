import '../index.css';
import Button from "../components/Button";
import {FaApple} from 'react-icons/fa';     //for icons

function ButtonPage(){

    function handleClick(){
    }

    return <>
            <Button primary rounded outline onClick={handleClick} > <FaApple/> Primary</Button>
            <Button secondary rounded outline onClick={handleClick} > <FaApple/> Secondary</Button>
            <Button success outline > success</Button>
            <Button warning rounded >  Warning</Button>
            <Button danger   > danger</Button> 
    </>
}

            
export default ButtonPage;