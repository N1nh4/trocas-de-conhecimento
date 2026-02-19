import prisma from "../../config/PrismaClient.js";

class ConhecimentoService {

    // Criar conhecimento (Rhobertta)
    async create(data) {

        const { titulo, descricao, categoria, nivel, pessoaId } = data;

        // Validação dos campos obrigatórios
        if (!titulo || !descricao || !categoria || !nivel || !pessoaId) {
            throw {
                statusCode: 400,
                message: 'Todos os campos obrigatórios devem ser preenchidos.'
            };
        }

        // Verificar se a pessoa existe
        const pessoaExiste = await prisma.pessoa.findUnique({
            where: { id: Number(pessoaId) }
        });

        if (!pessoaExiste) {
            throw {
                statusCode: 404,
                message: 'Pessoa não encontrada.'
            };
        }

        // Criar o conhecimento
        const novoConhecimento = await prisma.conhecimento.create({
            data: {
                titulo,
                descricao,
                categoria,
                nivel,
                pessoaId: Number(pessoaId)
            }
        });

        return novoConhecimento;
    }

    // Listar todos os conhecimentos (Lucas)
    async findAll() {
        // implementar
    }

    // Buscar conhecimento por ID (Lucas)
    async findById(id) {
        // implementar
    }

    // Atualizar conhecimento (Alana)
    async update(id, data) {
        // implementar
    }

    // Deletar conhecimento (Alana)
    async delete(id) {
        // implementar
    }

}

export default new ConhecimentoService();