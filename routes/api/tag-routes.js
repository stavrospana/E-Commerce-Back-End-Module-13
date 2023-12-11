const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try
  {
    const tagData = await Tag.findAll({include: [{model: Product}]});
    res.status(200).json(tagData);
  }
  catch (err) //if an internal server error occurs, responds with a status of 500 alongside the error's JSON data
  {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try
  {
    const tagData = await Tag.findByPk(req.params.id, {include: [{model: Product}]});

    //return a 404 status error if a tag could not be found with the requested ID
    if (!tagData)
    {
      res.status(404).json("Could not find a tag with that ID");
      return;
    }

    res.status(200).json(tagData);
  }
  catch (err) //if an internal server error occurs, responds with a status of 500 alongside the error's JSON data
  {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try
  {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  }
  catch (err) //if error occurs while trying to create a tag, responds with a status of 400 alongside the error's JSON data
  {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try
  {
    const tagData = await Tag.update(req.body,
    {
      where: {id: req.params.id}
    });

    //return a 404 status error if a tag could not be found with the requested ID
    if (!tagData)
    {
      res.status(404).json("Could not find a tag with that ID");
      return;
    }

    res.status(200).json(tagData);
  }
  catch (err) //if error occurs while trying to update a tag, responds with a status of 400 alongside the error's JSON data
  {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try
  {
    const tagData = await Tag.destroy({where: {id: req.params.id}});

    //return a 404 status error if a tag could not be found with the requested ID
    if (!tagData)
    {
      res.status(404).json("Could not find a tag with that ID");
      return;
    }

    res.status(200).json(tagData);
  }
  catch (err) //if error occurs while trying to delete a category, responds with a status of 500 alongside the error's JSON data
  {
    res.status(400).json(err);
  }
});

module.exports = router;