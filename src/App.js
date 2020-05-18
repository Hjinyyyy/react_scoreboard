import React from 'react';
import './App.css';
import {Header} from './components/Header';
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";

let maxId = 4;

class App extends React.Component {

/*  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer: ', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id);
      return {
        players: players
      }
    })
  }*/
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.props.players}></Header>

        {
          this.props.players.map(player => (
              <Player name={player.name} key={player.id} id={player.id} score={player.score}>
              </Player>
            )
          )
        }
        <AddPlayerForm></AddPlayerForm>
      </div>
    );
  }
}

// subscribe: store의 state => 나의, props로 매핑
// 부모 => 자식 통신
const mapStateToProps = (state) => ({
  // 왼쪽이 props, 오른쪽이 store의 state
  players: state.playerReducer.players
})

// 커링 펑션, HoC 컴포넌튼
export default connect(mapStateToProps)(App);
