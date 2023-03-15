const express = require('express');
const router = express.Router();
const { getAllItems, getSingleItem, createItem, updateItem, deleteItem } = require('../helpers/items');

// GET all items
router.get('/', getAllItems);

// GET single item
router.get('/:id', getSingleItem);

// POST new item
router.post('/', createItem);

// PUT update item
router.put('/:id', updateItem);

// DELETE item
router.delete('/:id', deleteItem);

module.exports = router;
