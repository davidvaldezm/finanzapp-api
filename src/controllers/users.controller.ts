import { Request, Response } from 'express';

export const listUsers = (_req: Request, res: Response) => res.json([{ id: 'u1' }, { id: 'u2' }]);
export const getUser = (req: Request, res: Response) => res.json({ id: req.params.id });
export const createUser = (_req: Request, res: Response) => res.status(201).json({ id: 'new_user' });
export const updateUser = (req: Request, res: Response) => res.json({ id: req.params.id, updated: true });
export const deleteUser = (req: Request, res: Response) => res.status(204).send();
