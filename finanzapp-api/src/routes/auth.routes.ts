import { Router } from 'express';
import { register, login, me } from '../controllers/auth.controller.js';

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication routes
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register new user
 *     tags: [Auth]
 *     responses:
 *       201:
 *         description: Created
 */
const router = Router();
router.post('/register', register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: OK
 */
router.post('/login', login);

/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Current user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/me', me);

export default router;
