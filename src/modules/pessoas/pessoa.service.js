import prisma from "../../config/PrismaClient.js";
import pessoaRepository from "./pessoa.repository.js";

class PessoaService {

  //Criar pessoa (Pedro)
  async create(data) {
    const { nome, email, telefone, descricao } = data;

    //Validação dos campos obrigatórios
    if (!nome || !email || !telefone) {
      throw {
        statusCode: 400,
        message: 'Todos os campos obrigatórios devem ser preenchidos.'
      };
    }

    //Validação de formato de email (teste)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw {
        statusCode: 400,
        message: 'Formato de email inválido'
      };
    }

    //Verificação de email único
    const emailExistente = await prisma.pessoa.findUnique({
      where: { email }
    });


    //Criar Pessoa
    const novaPessoa = await prisma.pessoa.create({
      data: {
        nome,
        email,
        telefone,
        descricao: descricao || null
      },
      include: {
        conhecimentos: true //retorna a pessoa criada com seus conhecimentos
      }
    });

    return novaPessoa;

  }

  //Listar todas as pessoas
  async findAll() {
    const pessoas = await prisma.pessoa.findMany({
      include: {
        conhecimentos: true
      }
    });

    return pessoas;
  }

  //Listar pessoa por ID
  async findById(id) {
    const pessoa = await prisma.pessoa.findUnique({
      where: { id: Number(id) },
      include: {
        conhecimentos: true
      }
    });

    if (!pessoa) {
      throw {
        statusCode: 404,
        message: 'Pessoa não encontrada.'
      }
    }

    return pessoa;
  }

  async update(id, data) {

    const pessoaExists = await pessoaRepository.findById(id);
    if (!pessoaExists) {
      throw new Error("Pessoa não encontrada.");
    }

    return await pessoaRepository.update(id, data);
  }

  async deletePessoa(id) {
    const pessoa = await pessoaRepository.findById(id);

    if (!pessoa) {
      throw new Error("Pessoa não encontrada.");
    }

    // regra: impede deletar pessoa com conhecimentos vinculados (Kaline)
    if (pessoa.conhecimentos && pessoa.conhecimentos.length > 0) {
      throw new Error("Não é possível remover: esta pessoa possui conhecimentos cadastrados.");
    }

    return await pessoaRepository.delete(id);
  }

}

export default new PessoaService();



