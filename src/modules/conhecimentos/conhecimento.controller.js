import conhecimentoService from './conhecimento.service.js';

class ConhecimentoController {

    // POST /conhecimentos (Rhobertta)
    async create(req, res) {
        try {
            const data = req.body;

            const novoConhecimento = await conhecimentoService.create(data);

            return res.status(201).json(novoConhecimento);

        } catch (error) {
            return res.status(error.statusCode || 500).json({
                message: error.message || 'Erro interno do servidor'
            });
        }
    }

    // GET /conhecimentos (Rhobertta)
    async findAll(req, res) {
        try {
            const filters = req.query;

            const conhecimentos = await conhecimentoService.findAll(filters);

            return res.json(conhecimentos);

        } catch (error) {
            return res.status(error.statusCode || 500).json({
                message: error.message || 'Erro interno do servidor.'
            });
        }
    }

    // GET /conhecimentos/:id (Rhobertta)
    async findById(req, res) {
        try {
            const { id } = req.params;

            const conhecimento = await conhecimentoService.findById(id);

            return res.json(conhecimento);

        } catch (error) {
            return res.status(error.statusCode || 500).json({
                message: error.message || 'Erro interno do servidor.'
            });
        }
    }

    // PUT /conhecimentos/:id (Alana)
    async update(req, res) {
        // implementar
    }

    // DELETE /conhecimentos/:id (Alana)
    async delete(req, res) {
        // implementar
    }

}

export default new ConhecimentoController();
