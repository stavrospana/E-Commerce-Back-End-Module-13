const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) =>
{
  // find all categories
  try
  {
    const categoryData = await Category.findAll({include: [{model: Product}]});
    res.status(200).json(categoryData);
  }
  catch (err) //if an internal server error occurs, responds with a status of 500 alongside the error's JSON data
  {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) =>
{
  // find one category by its `id` value
  // be sure to include its associated Products
  try
  {
    const categoryData = await Category.findByPk(req.params.id, {include: [{model: Product}]});

    //return a 404 status error if a category could not be found with the requested ID
    if (!categoryData)
    {
      res.status(404).json("Could not find a category with that ID");
      return;
    }

    res.status(200).json(categoryData);
  }
  catch (err) //if an internal server error occurs, responds with a status of 500 alongside the error's JSON data
  {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) =>
{
  // create a new category
  try
  {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  }
  catch (err) //if error occurs while trying to create a category, responds with a status of 400 alongside the error's JSON data
  {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) =>
{
  // update a category by its `id` value
  try
  {
    const categoryData = await Category.update(req.body,
    {
      where: {id: req.params.id}
    });

    //return a 404 status error if a category could not be found with the requested ID
    if (!categoryData)
    {
      res.status(404).json("Could not find a category with that ID");
      return;
    }

    res.status(200).json(categoryData);
  }
  catch (err) //if error occurs while trying to update a category, responds with a status of 400 alongside the error's JSON data
  {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) =>
{
  // delete a category by its `id` value
  try
  {
    const categoryData = await Category.destroy({where: {id: req.params.id}});

    //return a 404 status error if a category could not be found with the requested ID
    if (!categoryData)
    {
      res.status(404).json("Could not find a category with that ID");
      return;
    }

    res.status(200).json(categoryData);
  }
  catch (err) //error message when trying to delete a category that has products associated with it 
  {
    res.status(400).json(err);
  }
});

module.exports = router;