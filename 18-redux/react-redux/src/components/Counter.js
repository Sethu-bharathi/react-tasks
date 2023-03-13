import { Component } from "react";
import {counterActions} from "../store/counter"
import classes  from "./Counter.module.css";
import { connect } from "react-redux";
// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const toggleCounterHandler = () => {};
//   const dispatch = useDispatch();
//   const incrementHandler = () => {
//     dispatch({ type: "INCREMENT" });
//   };
//   const decrementHandler = () => {
//     dispatch({ type: "DECREMENT" });
//   };
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };
class Counter extends Component {
  incrementHandler() {
    this.props.increment()
  }
  decrementHandler() {
    this.props.decrement()
  }
  incrementByValue(val){
    this.props.increaseByVal(val)
  }
  toggleCounterHandler() {
    this.props.toogleCounter()
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {this.props.counter.showCounter && <div className={classes.value}>{this.props.counter.counter}</div>}
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.incrementByValue.bind(this,5)}>IncrementValue by 5</button>
          <button onClick={this.decrementHandler.bind(this)}>decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    showContainer:state.showCounter
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(counterActions.increment());
    },
    decrement: () => {
      dispatch(counterActions.decrement());
    },
    increaseByVal:(val)=>{
      dispatch(counterActions.incrementAmount(val))
    },
    toogleCounter:()=>{
      dispatch(counterActions.toggle())
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
