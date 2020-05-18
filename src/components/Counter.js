import React from "react";
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";

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