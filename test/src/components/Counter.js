import React from "react";
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";
 
// class Counter extends React.Component {
//   state = {
//     score: 0
//   };
  
//   incrementScore = () => {
//     console.log(this);
//     this.setState(prevState => {
//       return {score: prevState.score + 1}
//     });
//   }
  
//   decrementScore = () => {
//     this.setState(prevState => {
//       return {score: prevState.score - 1}
//     });
//   }
  
//   render() {
//     return (
//       <div className="counter">
//         <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
//         <span className="counter-score">{this.state.score}</span>
//         <button className="counter-action increment" onClick={this.incrementScore}> + </button>
//       </div>
//     );
//   }
// }
 
// const Counter = (props) => {
//   return (
//     <div className="counter">
//       <button className="counter-action decrement"> - </button>
//       <span className="counter-score">{props.score}</span>
//       <button className="counter-action increment"> + </button>
//     </div>
//   )
// }

// const Counter = (props) => {
//   return (
//     <div className="counter">
//       <button className="counter-action decrement" onClick={() => props.changeScore(props.index, -1)}> - </button>
//       <span className="counter-score">{props.score}</span>
//       <button className="counter-action increment" onClick={() => props.changeScore(props.index, 1)}> + </button>
//     </div>
//   )
// }

// const Counter = ({index, score, changeScore}) => {
//   return (
//     <div className="counter">
//       <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
//       <span className="counter-score">{score}</span>
//       <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
//     </div>
//   )
// }
 
// Counter.propTypes = {
//   index: PropTypes.number,
//   score: PropTypes.number,
//   changeScore: PropTypes.func
// }

// let mapDispatchToProps = (dispatch) => {
//   return {
//     changeScore: (id, delta) => dispatch(changeScore(id, delta))
//   }
// }
 
// // export default Counter;

// export default connect(null, mapDispatchToProps)(Counter);

// const Counter = ({index, score}) => {
//   const dispatch = useDispatch();
 
//   return (
//     <div className="counter">
//       <button className="counter-action decrement" onClick={() => dispatch(changeScore(index, -1))}> - </button>
//       <span className="counter-score">{score}</span>
//       <button className="counter-action increment" onClick={() => dispatch(changeScore(index, 1))}> + </button>
//     </div>
//   )
// }
 
// Counter.propTypes = {
//   index: PropTypes.number,
//   score: PropTypes.number
// }
 
// export default Counter;

export class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() => this.props.changeScore(this.props.id, -1)}> -</button>
        <span className="counter-score">{this.props.score}</span>
        {/*이벤트 핸들러 우측에는 함수 선언문이 와야 한다.*/}
        <button className="counter-action increment"
                onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
      </div>
    );
  }
}

const mapActionToProps = (dispatch) => ({
  // 왼쪼은 props, 오른쪽은 (액션을 디스패치하는)펑션
  changeScore: (id, delta) => dispatch(changeScore(id, delta))
})

// 커링 펑션, HoC 컴포넌튼
export default connect(null, mapActionToProps)(Counter);