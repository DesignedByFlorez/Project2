const router = require ('express').Router();
const{List} = require('../models');

router.get('/', async (req,res) => {
  try {
    const listData = await List.findAll()
    const lists = listData.map((list) => list.get({ plain: true }));
    console.log(lists)
    res.render('homepage', {lists: lists, userId: req.session.userId, islistItems: req.session.islistItems})
  }catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

router.get('/login', async (req,res) => {
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

router.get('/signup', async (req,res) => {
  try {
    if (req.session.userId) {
      res.redirect('/dashboard')
    } else {
      res.render('/signup')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

router.get('/dashboard', async (req,res) => {
  try {
    if (req.session.userId) {
      res.redirect('/login')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

router.get('/new-user', (req,res) => {
  try {
    if (!req.session.userId) {
      res.redirect('/login')
    }
    res.render('newUser', {user: req.session.userId, islistItems: req.session.islistItems})
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

module.exports = router