// define endpoint

import { Router } from 'express';
import { PessoaController } from './pessoa.controller.js'; // (Kaline)

const router = Router();
const pessoaController = new PessoaController(); // (Kaline)

// atualiza os dados de uma pessoa (nome, email, telefone, descrição) (Kaline)
router.put('/:id', (req, res) => pessoaController.update(req, res));

// remove uma pessoa (+ regra de não deletar se tiver conhecimentos) (Kaline)
router.delete('/:id', (req, res) => pessoaController.delete(req, res));

export default router;