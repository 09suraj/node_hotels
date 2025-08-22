const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');


//For MenuItem to add Items
router.post('/', async(req, res) => {
try{
  const data = req.body;
  const newMenu = new MenuItem(data);

  const response = await newMenu.save();
  console.log('data saved');
  res.status(200).json(response);
 }
 catch(err) {
  console.log(err);
  res.status(500).json({error:'Internal server error'});
 }
})

//GET Method to get the MenuItem
router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('data Fetch Successfully');
    res.status(200).json(data);

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
  }
}) 

router.get('/:tastetype', async(req, res)=> {
  try {
    const tastetype = req.params.tastetype; //Extract the work type from the URL parameter
    if (tastetype == 'sweet'|| tastetype == 'spicy' || tastetype == 'sour') {
      const response = await MenuItem.find({taste: tastetype});
      console.log('response fetched');
      res.status(200).json(response);
    } else {
      res.status(500).json({error:'Invalid work type'});
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Invalid Work Type'});
  }
})


module.exports = router;