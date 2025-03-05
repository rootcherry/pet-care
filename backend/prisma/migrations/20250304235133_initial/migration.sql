/*
  Warnings:

  - You are about to drop the column `cepCliente` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `emailCliente` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `enderecoCliente` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `nomeCliente` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `telefoneCliente` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `cep` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "cepCliente",
DROP COLUMN "emailCliente",
DROP COLUMN "enderecoCliente",
DROP COLUMN "nomeCliente",
DROP COLUMN "telefoneCliente",
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "telefone" TEXT NOT NULL;
