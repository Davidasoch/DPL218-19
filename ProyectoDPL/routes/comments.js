module.exports = {
  getComments(req, res,store) {
    res.status(200).send(store.dishes[req.params.id].comments)
  },
  addComments(req, res,store) {
    let addcomment = req.body
    let newid = store.dishes[req.params.id].comments.length
    store.dishes[req.params.id].comments.push(addcomment);
    res.status(201).send({id:newid})
  },
  updateComment(req, res,store) {
    store.dishes[req.params.id].comments[req.params.newid] = req.body
    res.status(200).send(store.dishes[req.params.newid])
  },
  removeComment(req, res,store) {
    store.dishes[req.params.id].comments.splice(req.params.commentsId,1)
    res.status(204).send()
  }
}
