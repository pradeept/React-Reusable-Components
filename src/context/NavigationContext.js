import {createContext,useState, useEffect} from 'react';

const NavigationContext = createContext(); 


function NavigationProvider({children}){

    const [currentPath,setCurrentPath] = useState(window.location.pathname);

    useEffect(()=>{
        const handler = ()=>{
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate',handler);

        //cleanup function to remove event listener if component is removed
        return ()=>{
            window.removeEventListener('popstate',handler);
        }
    },[]);



    //to navigate 1.set address-bar and add to window.history.pushState({},'',url)
    const navigate = (to)=>{
        window.history.pushState({},'',to);
        setCurrentPath(to);
    }
    return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
        {children}
    </NavigationContext.Provider>
    );
}


export {NavigationProvider};
export default NavigationContext;
