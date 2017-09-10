import { combineReducers, compose } from "redux"
import users from "./users"
import articles from "./articles"

const add = section => reducer => (state, action) => {
  if (action.type === `ADD_${section}`) {
    return [...state, action.payload]
  }
  return reducer(state, action)
}

const remove = section => reducer => (state, action) => {
  if (action.type === `REMOVE_${section}`) {
    return state.filter(item => item !== action.payload)
  }
  return reducer(state, action)
}

const sectionReducer = section => compose(add(section), remove(section))

const rootReducer = combineReducers({
  users: sectionReducer("USER")(users),
  articles: sectionReducer("ARTICLE")(articles)
})

export default rootReducer
