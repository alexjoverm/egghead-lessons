let userCount = 0
let articleCount = 0

export const addUser = () => {
  return {
    type: "ADD_USER",
    payload: `User ${userCount++}`
  }
}

export const removeUser = user => {
  return {
    type: "REMOVE_USER",
    payload: user
  }
}

export const addArticle = () => {
  return {
    type: "ADD_ARTICLE",
    payload: `Article ${articleCount++}`
  }
}

export const removeArticle = article => {
  return {
    type: "REMOVE_ARTICLE",
    payload: article
  }
}
