// coordena http

import pessoaService from "./pessoa.service.js";

class pessoaController {

  //Método POST /pessoas
  async create(req, res) {
    try {
      const data = req.body;
      const novaPessoa = await pessoaService.create(data);

      return res.status(201).json(novaPessoa);

    } catch (error) {
      return res.status(error.statusCode || 500).json({
        message: error.message || 'Erro interno do servidor.'
      });
    }
  }

  //Método GET /pessoas
  async findAll(req, res) {
    try {
      const pessoas = await pessoaService.findAll();
      return res.status(200).json(pessoas);

    } catch (error) {
      return res.status(error.statusCode || 500).json({
        message: error.message || 'Erro interno do servidor.'
      });
    }
  }

  //Método GET /pessoas/ :id
  async findById(req, res) {
    try {
      const { id } = req.params;
      const pessoas = await pessoaService.findById(id);
      return res.status(200).json(pessoas);

    } catch (error) {
      return res.status(error.statusCode || 500).json({
        message: error.message || 'Erro interno do servidor.'
      })
    }
  }

  // rota: PUT /pessoas/:id [cite: 40]
  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await pessoaService.update(id, data);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // rota: DELETE /pessoas/:id [cite: 40]
  async delete(req, res) {
    try {
      const { id } = req.params;
      await pessoaService.deletePessoa(id);
      return res.status(204).send(); // sucesso sem conteúdo
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }


}

export default new pessoaController();


