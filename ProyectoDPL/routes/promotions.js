module.exports = {
  getPromotions(req, res,store) {
    res.status(200).send(store.promotions)
  },
  addPromotions(req, res,store) {
    let addprom= req.body
    let id = store.promotions.length
    store.promotions.push(addprom)
    res.status(201).send({id: id})
  },
  updatePromotions(req, res,store) {
    store.promotions[req.params.id] = req.body
    res.status(200).send(store.promotions[req.params.id])
  },
  removePromotions(req, res,store) {
    store.promotions.splice(req.params.id,1)
    res.status(204).send()
  }
}