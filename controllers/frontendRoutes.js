const router = require('express').Router();
const { List, Item, User } = require('../models');

<<<<<<< HEAD
router.get('/homepage', async (req,res) => {
=======
router.get('/', async (req, res) => {
>>>>>>> Dev
  try {
    const listData = await List.findAll()
    const lists = listData.map((list) => list.get({ plain: true }));
    console.log(lists)
<<<<<<< HEAD
    res.render('signup', {lists: lists, userId: req.session.userId, islistItems: req.session.islistItems})
  }catch (error) {
=======
    res.render('all', { lists: lists })
  } catch (error) {
>>>>>>> Dev
    console.log(error)
    res.status(500).json(error);
  }
})

router.get('/login', async (req, res) => {
  try {
    if (req.session.userId) {
      res.redirect('/')
    } else {
      res.render('login')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

<<<<<<< HEAD
router.get('/', async (req,res) => {
=======
router.get('/signup', async (req, res) => {
>>>>>>> Dev
  try {
    if (req.session.userId) {
      res.redirect('/login')
    } else {
      res.render('signup')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

router.get('/dashboard', async (req, res) => {
  try {
    if (req.session.userId) {
      res.redirect('/login')
    }
    if (req.session.islistItems) {
      const listData = await List.findByPk(req.session.userId, {
        include: {
          all: true,
          nested: true
        }
      })
      const list = listData.get({ plain: true })
      console.log(listData)
      return res.render("dashboard", { user: list, isList: true })
    } else {
      const userData = await User.findByPk(req.session.userId, {
        include: {
          all: true,
          nested: true
        }
      })
      const customer = customerData.get({ plain: true })

      return res.render("dashboard", { user: customer, isFarmer: false })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

router.get('/new-user', (req, res) => {
  try {
    if (!req.session.userId) {
      res.redirect('/signup')
    }
    res.render('newUser', { user: req.session.userId, islistItems: req.session.islistItems })
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

router.get('/lists', (req, res) => {
  try {
    console.log("hello")
    // if (!req.session.userId) {
    //   res.redirect('/login')
    // }
    res.render('lists', { user: req.session.userId, islistItems: req.session.islistItems })
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})


router.get('/lists', (req, res) => {
  try {
    console.log('hello')
    // if (!req.session.userId) {
    //   res.redirect(‘/login’)
    // }
    res.render('lists', { user: req.session.userId, islistItems: req.session.islistItems })
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})
router.get('/listGen', (req, res) => {
  try {
    res.render('listGen')
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

module.exports = router
