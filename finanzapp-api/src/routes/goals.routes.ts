import { Router } from 'express';
import { listGoals, getGoal, createGoal, updateGoal, deleteGoal } from '../controllers/goals.controller.js';

/**
 * @swagger
 * tags:
 *   name: Goals
 *   description: Goals CRUD
 */
const router = Router();

router.get('/', listGoals);
router.post('/', createGoal);
router.get('/:id', getGoal);
router.patch('/:id', updateGoal);
router.delete('/:id', deleteGoal);

export default router;
