import className from 'classnames';         //for classNames management
import PropTypes from 'prop-types';         //for prop verification


//Custom Button Component that has 'underlying element'
function Button( {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}){
    //Tailwind-CSS for specifying styles
    const  classes = className(rest.className,'flex items-center px-3 py-1.5 border', {
        'border-sky-500': primary,
        'border-gray-600': secondary,
        'border-green-500': success,
        'border-yellow-400': warning ,
        'border-red-500': danger,
     
        'bg-sky-500': primary && !outline,
        'bg-gray-600': secondary && !outline,
        'bg-green-500': success && !outline,
        'bg-yellow-400': warning && !outline,
        'bg-red-500': danger && !outline,
        'bg-white': outline,
     
        'text-white': !outline && (primary || secondary || success || warning || danger),
        'text-sky-500': outline && primary,
        'text-gray-600': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
        
        'rounded-full': rounded,
      });

    return <button {...rest} className={classes}>{children}</button>

}

Button.propTypes = {
    checkVariationValue : ({primary,secondary,success,warning,danger})=>{
        const count = Number(!!primary)+
        Number(!!secondary)+
        Number(!!success)+
        Number(!!warning)+
        Number(!!danger);

        if(count >1){
            return new Error('Only one of the primary, secondary ,warning, success or danger should be true.');
        }
    }
}

export default Button;