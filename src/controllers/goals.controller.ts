import { Request, Response } from 'express';

export const listGoals = (_req: Request, res: Response) => res.json([{ id: 'g1' }]);
export const getGoal = (req: Request, res: Response) => res.json({ id: req.params.id });
export const createGoal = (_req: Request, res: Response) => res.status(201).json({ id: 'new_goal' });
export const updateGoal = (req: Request, res: Response) => res.json({ id: req.params.id, updated: true });
export const deleteGoal = (_req: Request, res: Response) => res.status(204).send();
