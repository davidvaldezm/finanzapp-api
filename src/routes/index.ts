import { Router } from 'express';
import auth from './auth.routes.js';
import users from './users.routes.js';
import transactions from './transactions.routes.js';
import budgets from './budgets.routes.js';
import goals from './goals.routes.js';
import categories from './categories.routes.js';

const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/transactions', transactions);
router.use('/budgets', budgets);
router.use('/goals', goals);
router.use('/categories', categories);

export default router;
