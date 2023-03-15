const todoList = [
    { id: 1, task: 'Buy milk', completed: false },
    { id: 2, task: 'Walk the dog', completed: true },
    { id: 3, task: 'Do laundry', completed: false },
  ];
  
  // GET all items
  const getAllItems = (req, res) => {const page = parseInt(req.query.page) || 1;const limit = parseInt(req.query.limit) || 10;const startIndex = (page - 1) * limit;const endIndex = page * limit;const paginatedItems = todoList.slice(startIndex, endIndex);res.json(paginatedItems);};
  };
  
  // GET single item
  const getSingleItem = (req, res) => {
    const id = parseInt(req.params.id);
    const item = todoList.find((item) => item.id === id);
  
    if (!item) {
      return res.status(404).json({ message: `Item with id ${id} not found` });
    }
  
    res.json(item);
  };
  
  // POST new item
  const createItem = (req, res) => {
    const item = req.body;
    item.id = todoList.length + 1;
    item.completed = false;
    todoList.push(item);
    res.json(item);
  };
  
  // PUT update item
  const updateItem = (req, res) => {
    const id = parseInt(req.params.id);
    const itemIndex = todoList.findIndex((item) => item.id === id);
  
    if (itemIndex === -1) {
      return res.status(404).json({ message: `Item with id ${id} not found` });
    }
  
    todoList[itemIndex] = { ...todoList[itemIndex], ...req.body };
  
    res.json(todoList[itemIndex]);
  };
  
  // DELETE item
  const deleteItem = (req, res) => {
    const id = parseInt(req.params.id);
    const itemIndex = todoList.findIndex((item) => item.id === id);
  
    if (itemIndex === -1) {
      return res.status(404).json({ message: `Item with id ${id} not found` });
    }
  
    todoList.splice(itemIndex, 1);
  
    res.sendStatus(204);
  };
  
  module.exports = { getAllItems, getSingleItem, createItem, updateItem, deleteItem };
  