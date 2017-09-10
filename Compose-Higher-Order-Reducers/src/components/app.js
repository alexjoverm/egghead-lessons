import React, { Component } from "react"
import { connect } from "react-redux"
import { addUser, addArticle, removeUser, removeArticle } from "../actions"

const App = ({
  users,
  articles,
  addUser,
  addArticle,
  removeUser,
  removeArticle
}) => (
  <div>
    <button onClick={addUser}>Add User</button>
    {users.map(user => (
      <p>
        {user}
        <button onClick={() => removeUser(user)}>X</button>
      </p>
    ))}
    <hr />
    <button onClick={addArticle}>Add Article</button>
    {articles.map(article => (
      <p>
        {article}
        <button onClick={() => removeArticle(article)}>X</button>
      </p>
    ))}
  </div>
)

const mapStateToProps = state => state
const mapDispatchToProps = { addUser, addArticle, removeUser, removeArticle }
export default connect(mapStateToProps, mapDispatchToProps)(App)
