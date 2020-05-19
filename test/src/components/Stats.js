import React from 'react';
import PropTypes from 'prop-types';
// import _ from 'lodash';

// const Stats = (props) => {
//   const totalPlayers = props.players.length;
//   const totalScore = _.sumBy(props.players, 'score');

//   return (
//     <table className="stats">
//       <tbody>
//       <tr>
//         <td>Players:</td>
//         <td>0</td>
//       </tr>
//       <tr>
//         <td>Total Points:</td>
//         <td>0</td>
//       </tr>
//       </tbody>
//     </table>
//   )
// }

export const Stats = (props) => {
  const totalPlayers = props.players.length;
  const totalScore = props.players.reduce((total, player) => total + player.score, 0);
  
  return (
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
}

export default Stats;