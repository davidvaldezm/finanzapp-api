import { Request, Response } from 'express';

export const listBudgets = (_req: Request, res: Response) => res.json([{ id: 'b1' }]);
export const getBudget = (req: Request, res: Response) => res.json({ id: req.params.id });
export const createBudget = (_req: Request, res: Response) => res.status(201).json({ id: 'new_budget' });
export const updateBudget = (req: Request, res: Response) => res.json({ id: req.params.id, updated: true });
export const deleteBudget = (_req: Request, res: Response) => res.status(204).send();
