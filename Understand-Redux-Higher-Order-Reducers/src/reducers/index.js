import { combineReducers } from "redux"
import users from "./users"
import articles from "./articles"

const add = (reducer, predicate) => (state, action) => {
  if (predicate(action.type)) {
    return [...state, action.payload]
  }
  return reducer(state, action)
}

const rootReducer = combineReducers({
  users: add(users, type => type === "ADD_USER"),
  articles: add(articles, type => type === "ADD_ARTICLE")
})

export default rootReducer
