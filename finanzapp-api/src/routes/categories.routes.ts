import { Router } from 'express';
import { listCategories, getCategory, createCategory, updateCategory, deleteCategory } from '../controllers/categories.controller.js';

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Categories CRUD
 */
const router = Router();

router.get('/', listCategories);
router.post('/', createCategory);
router.get('/:id', getCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;
