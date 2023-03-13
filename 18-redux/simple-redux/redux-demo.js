const redux=require("redux");
const counterReducer=(state={counter:0},action)=>{
    if(action.type==="INCREMENT_COUNTER")return {
        counter:++state.counter
    };
    if(action.type==="DECREMENT_COUNTER")return {
        counter:--state.counter
    };
    return state
}

const store=redux.createStore(counterReducer) 
const counterSubscriber=()=>{
    const currState=store.getState();
    console.log("Latest State",currState);
}

store.subscribe(counterSubscriber);

store.dispatch({type:"DECREMENT_COUNTER"})