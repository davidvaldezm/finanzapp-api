import { Router } from 'express';
import { listBudgets, getBudget, createBudget, updateBudget, deleteBudget } from '../controllers/budgets.controller.js';

/**
 * @swagger
 * tags:
 *   name: Budgets
 *   description: Budgets CRUD
 */
const router = Router();

router.get('/', listBudgets);
router.post('/', createBudget);
router.get('/:id', getBudget);
router.patch('/:id', updateBudget);
router.delete('/:id', deleteBudget);

export default router;
