// define endpoint

import { Router } from 'express';
import pessoaController from './pessoa.controller.js';

const router = Router();

router.post('/', pessoaController.create);
router.get('/', pessoaController.findAll);
router.get('/:id', pessoaController.findById);


// atualiza os dados de uma pessoa (nome, email, telefone, descrição) (Kaline)
router.put('/:id', (req, res) => pessoaController.update(req, res));

// remove uma pessoa (+ regra de não deletar se tiver conhecimentos) (Kaline)
router.delete('/:id', (req, res) => pessoaController.delete(req, res));

export default router;
