import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import { createProduct, deleteProduct, getproducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.post("/", createProduct);

router.get("/",getproducts );

router.put("/:id", updateProduct);


router.delete("/:id", deleteProduct);

export default router;

