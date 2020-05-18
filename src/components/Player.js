import React from "react";
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {useDispatch} from "react-redux";

export const Player = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="player">
		  <span className="player-name">
        <button className="remove-player" onClick={() => dispatch(removePlayer(props.id))}> x </button>
        {props.name}
      </span>
      <Counter id={props.id} score={props.score} />
    </div>
  );
}
// 커링 펑션, HoC 컴포넌튼
export default Player;