const router = require("express").Router()
const {List, Item, User} = require("../../models")

router.get('/', async (req,res) => {
  try {
    const lists = await List.findAll({
      include: {all: true, nested: true}
    })
    res.status(200).json(lists)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

router.get('/:id', async (req,res) => {
  try {
    const list = await List.findByPK(req.params.id, {
      include: {all: true, nested: true}
    })
    res.status(200).json(list)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

router.post('/', async (req,res) => {
  try {
    const newList = await List.create(req.body);
    // if (req.body.itemIds) {
    //   newUser.addItems(req.body.itemIds)
    // }
    res.status(200).json(newUser)
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

module.exports = router