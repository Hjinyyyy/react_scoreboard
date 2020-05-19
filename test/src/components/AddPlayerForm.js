import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";
 
// class AddPlayerForm extends React.Component {
//   state = {
//     value: ''
//   }
  
//   handleValueChange = (e) => {
//     this.setState({value: e.target.value});
//   }
  
//   // render() {
//   //   return (
//   //     <form className="form">
//   //       <input className="input" type="text" placeholder="enter a player's name" value={this.state.value} onChange={this.handleValueChange} />
//   //       <input className="input" type="submit" value="Add Player" />
//   //     </form>
//   //   )
//   // }

//   handleSubmit = (e) => {
//     e.preventDefault();
    
//     const form = document.getElementById("form");
//     const player = document.getElementById("player");
    
//     console.log(form.checkValidity());
//     console.log(player.validity.valid);

//     this.props.addPlayer(this.state.value);
//     this.setState({
//       value: ''
//     });
//   }
  
//   // render() {
//   //   return (
//   //     <form onSubmit={this.handleSubmit}>
//   //       <input type="text" placeholder="enter a player's name" value={this.state.value} onChange={this.handleValueChange} />
//   //       <input type="submit" value="Add Player" />
//   //     </form>
//   //   )
//   // }

//   render() {
//     return (
//       <form id="form" className="form" onSubmit={this.handleSubmit} noValidate>
//         <input id="player" className="input" type="text" placeholder="enter a player's name" value={this.state.value} onChange={this.handleValueChange} required />
//         <input className="input" type="submit" value="Add Player" />
//       </form>
//     )
//   }
// }

// class AddPlayerForm extends React.Component {
//   textInput = React.createRef();
  
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addPlayer(this.textInput.current.value);
//     e.currentTarget.reset();
//   }
  
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" ref={this.textInput} placeholder="enter a player's name" />
//         <input type="submit" value="Add Player" />
//       </form>
//     )
//   }
// }

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addPlayer: (name) => dispatch(addPlayer(name))
//   }
// }

 
// // export default AddPlayerForm;

// export default connect(null, mapDispatchToProps)(AddPlayerForm);

// const AddPlayerForm = () => {
//   const dispatch = useDispatch();
//   const textInput = React.createRef();
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addPlayer(textInput.current.value));
//     e.currentTarget.reset();
//   }
 
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" ref={textInput} placeholder="enter a player's name" />
//       <input type="submit" value="Add Player" />
//     </form>
//   )
// }
 
// export default AddPlayerForm;

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