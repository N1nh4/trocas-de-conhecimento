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

    // GET /conhecimentos (Lucas)
    async findAll(req, res) {
        // implementar
    }

    // GET /conhecimentos/:id (Lucas)
    async findById(req, res) {
        // implementar
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
