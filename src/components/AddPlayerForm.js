import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  }

  submit = (e) => {
    // form의 기본 이벤트 막기
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({value: ''})
  }

  handleValueChange = (e) => {
    this.setState({ value: e.target.value})
  }

  render() {
    return (
      <form className="form" onSubmit={this.submit}>
        <input type="text" className="input" placeholder="enter a player name" required
               value={this.state.value} onChange={this.handleValueChange}/>
        <input type="submit" className="input" value="Add"></input>
      </form>
    );
  }
}

// 자식 => 부모 통신: 펑션을 props로 전달
// action dispatch : (액션을 디스패치하는) 펑션을 props 로 매핑
const mapActionToProps = (dispatch) => ({
  // 왼쪼은 props, 오른쪽은 (액션을 디스패치하는)펑션
  addPlayer: (name) => dispatch(addPlayer(name))
})

// 커링 펑션, HoC 컴포넌튼
export default connect(null, mapActionToProps)(AddPlayerForm);