module.exports = {
  getComments(req, res,store) {
    res.status(200).send(store.dishes[req.params.id].comments)
  },
  addComment(req, res,store) {
    let addcomment = req.body
    let newid = store.posts.length
    let comments = store.dishes[req.params.id].comments
    comments.push(addcomment)
    res.status(201).send({id:newid})
  },
  updateComment(req, res,store) {
    store.dishes[req.params.id].comments[req.params.newid] = req.body
    res.status(200).send(store.dishes[req.params.newid])
  },
  removeComment(req, res,store) {
    store.dishes[req.params.id].comments.splice(req.params.newid,1)
    res.status(204).send()
  }
}