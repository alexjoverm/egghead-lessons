let userCount = 0
let articleCount = 0

export const addUser = () => {
  return {
    type: "ADD_USER",
    payload: `User ${userCount++}`
  }
}

export const addArticle = () => {
  return {
    type: "ADD_ARTICLE",
    payload: `Article ${articleCount++}`
  }
}
