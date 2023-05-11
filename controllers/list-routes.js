// const router = require('express').Router();
// const {list, user, item} = require ("../models");
// // Here is where we provide hardcoded data to render dynamically
// const lists = [
//   {
//     listName: 'Tester',
//     listItem: 'test item',
//   },
// ];

// //get all dishes
// router.get('/', async (req, res) => {
//   res.render('lists');
// });

// //get one dish
// router.get('/list/:num', async (req, res) => {
//   // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
//   return res.render('list', lists[req.params.num - 1]);
// });

// module.exports = router;
