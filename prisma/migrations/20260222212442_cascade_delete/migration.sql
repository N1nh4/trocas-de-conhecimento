-- DropForeignKey
ALTER TABLE "Conhecimento" DROP CONSTRAINT "Conhecimento_pessoaId_fkey";

-- AddForeignKey
ALTER TABLE "Conhecimento" ADD CONSTRAINT "Conhecimento_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
