import React, { Component } from "react"
import { connect } from "react-redux"
import { addUser, addArticle } from "../actions"

const App = ({ users, articles, addUser, addArticle }) => (
  <div>
    <button onClick={addUser}>Add User</button>
    {users.map(user => <p>{user}</p>)}
    <hr />
    <button onClick={addArticle}>Add Article</button>
    {articles.map(article => <p>{article}</p>)}
  </div>
)

const mapStateToProps = state => state
const mapDispatchToProps = { addUser, addArticle }
export default connect(mapStateToProps, mapDispatchToProps)(App)
