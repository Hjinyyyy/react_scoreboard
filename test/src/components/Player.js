import React from "react";
import PropTypes from 'prop-types';
import Counter from './Counter';
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";
 
// const Player = (props) => {
//   console.log(this.props.name, ' rendered');

//   console.log(props);
//   return (
//     <div className="player">
//       <span className="player-name">
//         <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
//       </span>
//       <span className="player-name">
//         {props.name}
//       </span>
//       <Counter score={props.score} index={props.index} changeScore={props.changeScore} />
//     </div>
//   );
// }

// class Player extends React.PureComponent {

//   componentWillReceiveProps(nextProps, nextContext) {
//     console.log('componentWillReceiveProps', nextProps);
//   }
 
//   shouldComponentUpdate(nextProps, nextState, nextContext) {
//     console.log('shouldComponentUpdate', nextProps);
//     return nextProps.score !== this.props.score;
//   }

//   render() {
//     console.log(this.props.name, ' rendered');
//     return (
//       <div className="player">
//       <span className="player-name">
//         <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>x</button>
//       </span>
//         <span className="player-name">
//         {this.props.name}
//       </span>
//         <Counter score={this.props.score} index={this.props.index} changeScore={this.props.changeScore} />
//       </div>
//     );
//   }
// }

// class Player extends React.PureComponent {
//   render() {
//     console.log(this.props.name, ' rendered');
//     const {id, name, score, index, removePlayer, changeScore} = this.props;
//     return (
//       <div className="player">
//       <span className="player-name">
//         <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
//       </span>
//         <span className="player-name">
//         {name}
//       </span>
//         <Counter score={score} index={index} changeScore={changeScore} />
//       </div>
//     );
//   }
// }

// class Player extends React.PureComponent {
//   static propTypes = {
//     id: PropTypes.number,
//     name: PropTypes.string.isRequired,
//     score: PropTypes.number.isRequired,
//     index: PropTypes.number,
//     removePlayer: PropTypes.func,
//     changeScore: PropTypes.func
//   }
  
//   render() {
//     console.log(this.props.name, ' rendered');
//     const {id, name, score, index, removePlayer, changeScore} = this.props;
//     return (
//       <div className="player">
//       <span className="player-name">
//         <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
//       </span>
//         <span className="player-name">
//         {name}
//       </span>
//         <Counter score={score} index={index} changeScore={changeScore} />
//       </div>
//     );
//   }
// }

// let mapDispatchToProps = (dispatch) => {
//   return {
//     removePlayer: (id) => dispatch(removePlayer(id))
//   }
// }

// // export default Player;

// export default connect(null, mapDispatchToProps)(Player);


const Player = ({id, name, score, index, isHighScore}) => {
  const dispatch = useDispatch();
  
  render() {
    console.log(this.props.name, ' redered');
    const {removePlayer, id, name, score, changeScore} = this.props;
    
    // return (
    //   <div className="player">
    //     <span className="player-name">
    //       <button className="remove-player" onClick={() => dispatch(removePlayer(id))}>x</button>
    //       <svg viewBox="0 0 44 35" className={isHighScore ? 'is-high-score' : ''}>
    //         <path d="M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z" transform="translate(0 0.301727)"/>
    //         <rect width="30.4986" height="3.07759" transform="translate(6.56987 31.5603)"/>
    //       </svg>
    //       {name}
    //     </span>
    //     <Counter score={score} index={index} />
    //   </div>
    // );

    return (
      <div className={styles.player}>
        <span className={styles["player-name"]}>
          <button className={styles["remove-player"]}
                  onClick={() => removePlayer(id)}>x</button>
          {this.props.children}
          {name}
        </span>
        <Counter score={score} id={id} changeScore={changeScore}/>
      </div>
    );
  }  
}
 
Player.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number,
  isHighScore: PropTypes.bool
}
 
export default Player;