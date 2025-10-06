import { Router } from 'express';
import { listTransactions, getTransaction, createTransaction, updateTransaction, deleteTransaction } from '../controllers/transactions.controller.js';

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Transactions CRUD
 */
const router = Router();

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: List transactions
 *     tags: [Transactions]
 *   post:
 *     summary: Create transaction
 *     tags: [Transactions]
 */
router.get('/', listTransactions);
router.post('/', createTransaction);

/**
 * @swagger
 * /transactions/{id}:
 *   get:
 *     summary: Get transaction
 *     tags: [Transactions]
 *   patch:
 *     summary: Update transaction
 *     tags: [Transactions]
 *   delete:
 *     summary: Delete transaction
 *     tags: [Transactions]
 */
router.get('/:id', getTransaction);
router.patch('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);

export default router;
