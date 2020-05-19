import React from 'react';
import './App.css';
import {Header} from './components/Header';
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
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
 
// const Player = (props) => {
//   console.log(props);
//   return (
//     <div className="player">
//       <span className="player-name">
//         <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
//       </span>
//       <span className="player-name">
//         {props.name}
//       </span>
//       <Counter />
//     </div>
//   );
// }
 
// const Header = (props) => {
//   console.log(props);
//   return (
//     <header>
//       <h1>{ props.title }</h1>
//       <span className="stats">Players: { props.totalPlayers }</span>
//     </header>
//   )
// }
 
// class App extends React.Component {
//   state = {
//     players: [
//       {name: 'LDK', score: 0, id: 1},
//       {name: 'HONG', score: 0, id: 2},
//       {name: 'KIM', score: 0, id: 3},
//       {name: 'PARK', score: 0, id: 4},
//     ]
//   };

//   let mapStateToProps = (state) => {
//     return {
//       players: state.playerReducer.players
//     }
//   }

//   handleRemovePlayer = (id) => {
//     this.setState(prevState => {
//       return {
//         players: prevState.players.filter(item => item.id !== id)
//       }
//     })
//   }

//   handleChangeScore = (id, delta) => {
//     console.log(id, delta);
//     this.setState(prevState => {
//       prevState.players.forEach(item => {
//         if (item.id === id) {
//           item.score += delta;
//         }
//       })
//       return {players: [...prevState.players]}
//     })
//   }

//   handleAddPlayer = (name) => {
//     this.setState(prevState => {
//       const maxId = prevState.players.reduce((max, player) => {
//         return max > player.id ? max : player.id;
//       }, 0);
      
//       return {
//         players: [
//           ...prevState.players,
//           {id: maxId + 1, name, score: 0}
//         ]
//       }
//     });
//   }

//   render() {
//     return (
//       <div className="scoreboard">
//         <Header title="My scoreboard" players="{this.props.players}"></Header>
        
//         {/*Players List*/}
//         { this.this.props.players.map((item, index) => 
//           <Player name={item.name}
//             score={item.score}
//             key={item.id.toString()}
//             removePlayer={this.handleRemovePlayer}
//             changeScore={this.handleChangeScore}
//             index={index}
//             id={item.id} />)
//         }
//          <AddPlayerForm />
//       </div>
//     );
//   }
// }
 
// // export default App;

// export default connect(mapStateToProps)(App);


// function App() {
//   const players = useSelector(state => state.playerReducer.players);
 
//   getHighScore() {
//     const highScore = this.props.players.reduce((maxScore, player) => maxScore > player.score ? maxScore : player.score, 0);
//     return highScore > 0 ? highScore : null;
//   }

  // return (
  //   <div className="scoreboard">
  //     <Header players={players} />
 
  //     {/*Players List*/}
  //     { players.map((item, index) =>
  //       <Player name={item.name}
  //               score={item.score}
  //               key={item.id.toString()}
  //               index={index}
  //               id={item.id} />)
  //     }
  //     <AddPlayerForm />
  //   </div>
  // );
// }
 
// export default App;

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