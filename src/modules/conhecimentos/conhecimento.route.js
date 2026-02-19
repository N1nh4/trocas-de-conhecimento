import { Router } from 'express';
import conhecimentoController from './conhecimento.controller.js';

const router = Router();

router.post('/', conhecimentoController.create);
router.get('/', conhecimentoController.findAll);
router.get('/:id', conhecimentoController.findById);
router.put('/:id', conhecimentoController.update);
router.delete('/:id', conhecimentoController.delete);

export default router;

