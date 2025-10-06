import { Router } from 'express';
import { listUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/users.controller.js';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users CRUD
 */
const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: List users
 *     tags: [Users]
 *     responses:
 *       200: { description: OK }
 *   post:
 *     summary: Create user
 *     tags: [Users]
 *     responses:
 *       201: { description: Created }
 */
router.get('/', listUsers);
router.post('/', createUser);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: OK }
 *   patch:
 *     summary: Update user
 *     tags: [Users]
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 */
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
