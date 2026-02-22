// define endpoint

import { Router } from 'express';
import pessoaController from './pessoa.controller.js';

const router = Router();

router.post('/', pessoaController.create);
router.get('/', pessoaController.findAll);
router.get('/:id', pessoaController.findById);

//router.put() -> kaline
//router.delete() -> kaline

export default router;
