import prisma from '../../config/prismaClient.js';

export class PessoaRepository {
    async findById(id) {
        return await prisma.pessoa.findUnique({
            where: { id: parseInt(id) },
            include: { conhecimentos: true }
        });
    }

    async update(id, data) {
        return await prisma.pessoa.update({
            where: { id: parseInt(id) },
            data
        });
    }

    async delete(id) {
        return await prisma.pessoa.delete({
            where: { id: parseInt(id) }
        });
    }
}