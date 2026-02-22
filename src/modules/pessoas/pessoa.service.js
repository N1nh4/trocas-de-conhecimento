// regras de negócio

import { PessoaRepository } from './pessoa.repository.js';

const repository = new PessoaRepository();

export class PessoaService {
  async updatePessoa(id, data) {
    const pessoaExists = await repository.findById(id);
    if (!pessoaExists) {
      throw new Error("Pessoa não encontrada.");
    }
    
    return await repository.update(id, data);
  }

  async deletePessoa(id) {
    const pessoa = await repository.findById(id);

    if (!pessoa) {
      throw new Error("Pessoa não encontrada.");
    }

    // regra: impede deletar pessoa com conhecimentos vinculados (Kaline)
    if (pessoa.conhecimentos && pessoa.conhecimentos.length > 0) {
      throw new Error("Não é possível remover: esta pessoa possui conhecimentos cadastrados.");
    }

    return await repository.delete(id);
  }
}

