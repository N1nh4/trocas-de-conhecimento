// coordena http

import { PessoaService } from './pessoa.service.js';

const service = new PessoaService();

export class PessoaController {
  // rota: PUT /pessoas/:id [cite: 40]
  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await service.updatePessoa(id, data);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // rota: DELETE /pessoas/:id [cite: 40]
  async delete(req, res) {
    try {
      const { id } = req.params;
      await service.deletePessoa(id);
      return res.status(204).send(); // sucesso sem conteúdo
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}