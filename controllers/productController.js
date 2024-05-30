const productModel = require('../models/productModel');

const getProducts = async (req, res) => {
  try {
    const products = await productModel.getProductsByUserId(req.user.id);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createProduct = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const product = await productModel.createProduct(name, description, price, req.user.id);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    const product = await productModel.updateProduct(id, name, description, price, req.user.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.deleteProduct(id, req.user.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({product:product,message:"Product Deleted successfully!!"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
