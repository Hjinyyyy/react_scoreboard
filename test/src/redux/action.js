// action creator: 액션을 (동적으로) 만드는 함수
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, SEARCH_KEYWORD} from "./actonTypes";

export const addPlayer = (name) => {
  return {
    type: ADD_PLAYER,
    name
  }
}

export const changeScore = (id, delta) => {
  return {
    type: CHANGE_SCORE,
    id,
    delta
  }
}

export const removePlayer = (id) => {
  return {
    type: REMOVE_PLAYER,
    id
  }
}

export const searchKeyword = (keyword) => ({
  type: SEARCH_KEYWORD,
  keyword
})