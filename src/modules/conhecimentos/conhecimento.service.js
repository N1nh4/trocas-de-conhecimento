import prisma from "../../config/PrismaClient.js";

class ConhecimentoService {
  // Criar conhecimento (Rhobertta)
  async create(data) {
    const { titulo, descricao, categoria, nivel, pessoaId } = data;

    // Validação dos campos obrigatórios
    if (!titulo || !descricao || !categoria || !nivel || !pessoaId) {
      throw {
        statusCode: 400,
        message: "Todos os campos obrigatórios devem ser preenchidos.",
      };
    }

    // Verifica se a pessoa existe
    const pessoaExiste = await prisma.pessoa.findUnique({
      where: { id: Number(pessoaId) },
    });

    if (!pessoaExiste) {
      throw {
        statusCode: 404,
        message: "Pessoa não encontrada.",
      };
    }

    // Cria o conhecimento
    const novoConhecimento = await prisma.conhecimento.create({
      data: {
        titulo,
        descricao,
        categoria,
        nivel,
        pessoaId: Number(pessoaId),
      },
    });

    return novoConhecimento;
  }

  // Listar os conhecimentos sem e com filtros e com busca por título ou descrição (Rhobertta)
  async findAll(filters) {
    const { categoria, nivel, busca } = filters;

    const where = {};

    if (categoria) {
      where.categoria = categoria;
    }

    if (nivel) {
      where.nivel = nivel;
    }

    if (busca) {
      where.OR = [
        {
          titulo: {
            contains: busca,
            mode: "insensitive",
          },
        },
        {
          descricao: {
            contains: busca,
            mode: "insensitive",
          },
        },
      ];
    }

    return await prisma.conhecimento.findMany({
      where,
      include: {
        pessoa: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  // Buscar conhecimento por ID (Rhobertta)
  async findById(id) {
    const conhecimento = await prisma.conhecimento.findUnique({
      where: { id: Number(id) },
      include: {
        pessoa: {
          select: {
            nome: true,
            email: true,
            telefone: true,
            descricao: true,
          },
        },
      },
    });

    if (!conhecimento) {
      throw {
        statusCode: 404,
        message: "Conhecimento não encontrado.",
      };
    }

    return conhecimento;
  }

  // Atualizar conhecimento (Alana)
  async update(id, data) {
    const conhecimentoId = Number(id);

    // Verifica se o id do conhecimento é válido
    if (isNaN(conhecimentoId)) {
      throw {
        statusCode: 400,
        message: "ID inválido.",
      };
    }
    // Verifica se o conhecimento existe
    const conhecimento = await prisma.conhecimento.findUnique({
      where: { id: conhecimentoId },
    });

    if (!conhecimento) {
      throw {
        statusCode: 404,
        message: "Conhecimento não encontrado.",
      };
    }

    // Atualiza o novo conhecimento
    const conhecimentoAtualizado = await prisma.conhecimento.update({
      where: {
        id: conhecimentoId,
      },
      data: {
        ...(data.titulo && { titulo: data.titulo }),
        ...(data.descricao && { descricao: data.descricao }),
        ...(data.categoria && { categoria: data.categoria }),
        ...(data.nivel && { nivel: data.nivel }),
        ...(data.pessoaId && { pessoaId: Number(data.pessoaId) }),
      },
    });

    return conhecimentoAtualizado;
  }

  // Deletar conhecimento (Alana)
  async delete(id) {
    const conhecimentoId = Number(id);

    // Verifica se o id do conhecimento é válido
    if (isNaN(conhecimentoId)) {
      throw {
        statusCode: 400,
        message: "ID inválido.",
      };
    }

    // Verifica se o conhecimento existe
    const conhecimento = await prisma.conhecimento.findUnique({
      where: { id: conhecimentoId },
    });

    if (!conhecimento) {
      throw {
        statusCode: 404,
        message: "Conhecimento não encontrado.",
      };
    }

    // Apaga o conhecimento
    await prisma.conhecimento.delete({
      where: {
        id: conhecimentoId,
      },
    });

    return {
      message: "Conhecimento deletado com sucesso.",
    };
  }
}

export default new ConhecimentoService();
