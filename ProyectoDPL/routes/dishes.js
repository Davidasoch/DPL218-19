module.exports = {
  getDishes(req, res,store) {
    res.status(200).send(store.dishes)
  },
  addDishes(req, res,store) {
    let adddish = req.body
    let id = store.dishes.length
    store.dishes.push(adddish)
    res.status(201).send({id: id})
  },
  updateDishes(req, res,store) {
    store.dishes[req.params.id] = req.body
    res.status(200).send(store.dishes[req.params.id])
  },
  removeDishes(req, res,store) {
    store.dishes.splice(req.params.id,1)
    res.status(204).send()
  }
}