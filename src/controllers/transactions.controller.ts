import { Request, Response } from 'express';

export const listTransactions = (_req: Request, res: Response) => res.json([{ id: 't1' }]);
export const getTransaction = (req: Request, res: Response) => res.json({ id: req.params.id });
export const createTransaction = (_req: Request, res: Response) => res.status(201).json({ id: 'new_tx' });
export const updateTransaction = (req: Request, res: Response) => res.json({ id: req.params.id, updated: true });
export const deleteTransaction = (_req: Request, res: Response) => res.status(204).send();
