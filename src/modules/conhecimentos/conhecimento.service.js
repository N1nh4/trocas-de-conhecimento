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

        // Verifica se a pessoa existe
        const pessoaExiste = await prisma.pessoa.findUnique({
            where: { id: Number(pessoaId) }
        });

        if (!pessoaExiste) {
            throw {
                statusCode: 404,
                message: 'Pessoa não encontrada.'
            };
        }

        // Cria o conhecimento
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

    // Listar os conhecimentos sem e com filtros e com busca por título ou descrição (Rhobertta)
    async findAll(filters) {

        const { categoria, nivel, search } = filters;

        const where = {};

        if (categoria) {
            where.categoria = categoria;
        }

        if (nivel) {
            where.nivel = nivel;
        }

        if (search) {
            where.OR = [
                {
                    titulo: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    descricao: {
                        contains: search,
                        mode: "insensitive"
                    }
                }
            ];
        }

        return await prisma.conhecimento.findMany({
            where
        });
    }

    // Buscar conhecimento por ID (Rhobertta)
    async findById(id) {

        const conhecimento = await prisma.conhecimento.findUnique({
            where: { id: Number(id) }
        });

        if (!conhecimento) {
            throw {
                statusCode: 404,
                message: 'Conhecimento não encontrado.'
            };
        }

        return conhecimento;
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