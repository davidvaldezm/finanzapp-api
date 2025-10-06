import { Request, Response } from 'express';

export const listCategories = (_req: Request, res: Response) => res.json([{ id: 'c1' }]);
export const getCategory = (req: Request, res: Response) => res.json({ id: req.params.id });
export const createCategory = (_req: Request, res: Response) => res.status(201).json({ id: 'new_category' });
export const updateCategory = (req: Request, res: Response) => res.json({ id: req.params.id, updated: true });
export const deleteCategory = (_req: Request, res: Response) => res.status(204).send();
