const express = require('express');
const InventoryController = require('./inventoryController');

const router = express.Router();
const inventoryController = new InventoryController();


router.post('/inventory', inventoryController.createInventory.bind(inventoryController));

router.put('/inventory/:sku', inventoryController.updateInventory.bind(inventoryController));
module.exports = router;
