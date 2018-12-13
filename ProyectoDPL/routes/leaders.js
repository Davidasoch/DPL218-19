module.exports = {
  getLeaders(req, res,store) {
    res.status(200).send(store.leaders)
  },
  addLeaders(req, res,store) {
    let addleader= req.body
    let id = store.leaders.length
    store.leaders.push(addleader)
    res.status(201).send({id: id})
  },
  updateLeaders(req, res,store) {
    store.leaders[req.params.id] = req.body
    res.status(200).send(store.leaders[req.params.id])
  },
  removeLeaders(req, res,store) {
    store.leaders.splice(req.params.id,1)
    res.status(204).send()
  }
}