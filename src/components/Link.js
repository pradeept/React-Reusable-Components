import classNames  from 'classnames';
import useNavigation from '../hooks/useNavigation';


function Link({ to, children,className, activeClassName}){
    
    
    const {navigate, currentPath} = useNavigation();


    const classes = classNames('text-blue-500',
                    'mb-3',
                    className,
                    currentPath === to && activeClassName
                   );



    const handleClick = (event)=>{

        //to detect of ctrl/command key is held down 
        if(event.ctrlKey || event.metaKey){
            return; // if so we will return with default behaviour - open in new tab
        }

        event.preventDefault();

        navigate(to);
    }

    return <a onClick={handleClick} href={to} className={classes}>{children}</a>
}


export default Link;