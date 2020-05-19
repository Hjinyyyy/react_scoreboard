import React from 'react';
import PropTypes from 'prop-types';
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";
 
// const Header = (props) => {
//   console.log(props);
//   return (
//     <header>
//       <h1>{ props.title }</h1>
//       <span className="stats">Players: { props.totalPlayers }</span>
//     </header>
//   )
// }

// const Header = (props) => {
//   return (
//     <header>
//       <Stats players="{props.players}"></Stats>
//       <h1>{ props.title }</h1>
//     </header>
//   )
// }

// const Header = (props) => {
//   return (
//     <header>
//       <Stats players={props.players} />
//       <h1>{ props.title }</h1>
//       <Stopwatch />
//     </header>
//   )
// }

// const Header = (props) => {
//   const {players, title} = props;
//   return (
//     <header>
//       <Stats players={players} />
//       <h1>{ title }</h1>
//       <Stopwatch />
//     </header>
//   )
// }

// const Header = ({players, title}) => {   
//   return (
//     <header>
//       <Stats players={players} />
//       <h1>{ title }</h1>
//       <Stopwatch />
//     </header>
//   )
// }
 
// Header.propTypes = {
//   players: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string
// }

// Header.defaultProps = {
//   title: 'Scoreboard'
// }

// export default Header;

import styles from '../pages/scoreboard/Scoreboard.module.css';

const Header = ({players, title, changeTitle}) => {
  return (
    <header className={styles.header}>
      <Stats players={players} />
      <h1 className={styles.h1} onClick={changeTitle}>{ title }</h1>
      <Stopwatch />
    </header>
  )
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Scoreboard'
}

let mapStateToProps = (state) => {
  return {
    title: state.playerReducer.title
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeTitle: () => dispatch(updateTitle('dispatch test'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
