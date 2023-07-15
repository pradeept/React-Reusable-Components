import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

//cosntants to avoid typos and bugs while naming and using action types.
const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state,action)=>{
  
    switch(action.type){
        case INCREMENT_COUNT: return{
            ...state,
            count:state.count+1
            }
        case DECREMENT_COUNT: return{
            ...state,
            count:state.count-1
        }
        case SET_VALUE_TO_ADD: return{
            ...state,
            valueToAdd:action.payload
        }
        case ADD_VALUE_TO_COUNT: return{
            ...state,
            count:state.count + state.valueToAdd,
            valueToAdd:0
        }
        default: return state
    }
}

function CounterPage({initialCount}) {


    const [state,dispatch] = useReducer(reducer,{
        count:initialCount,
        valueToAdd: 0
    });



    const increment = ()=>{
        dispatch({
            type:INCREMENT_COUNT
        })
    }

    const decrement = ()=>{
        dispatch({
            type:DECREMENT_COUNT
        })
    }

    const handleChange = (e)=>{
       
        //e.target.value gives string so we need to parse it.
        const value = parseInt(e.target.value) || 0;           // '|| 0' is used so that when we press backspace we get NaN value  
                                                              // It works as get the target value if it NaN add 0 instead.                                                        
        // setValueToAdd(value);
        dispatch({
            type:SET_VALUE_TO_ADD,
            payload: value
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch({
            type:ADD_VALUE_TO_COUNT,
        })

    }

    return<>
    <Panel className="m-3">
        <h1 className='text-lg'>Count is {state.count}</h1>
        <div className='flex flex-row'>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input 
                type='number' 
                className='p-1 m-3 bg-gray-300 border border-gray-300'
                value={state.valueToAdd || ""}
                onChange={handleChange}
                />
            <Button>Add it</Button>
        </form>
    </Panel>
    </>

}


export default CounterPage;