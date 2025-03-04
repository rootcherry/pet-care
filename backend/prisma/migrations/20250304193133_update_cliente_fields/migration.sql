/*
  Warnings:

  - You are about to drop the column `cep` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `cepCliente` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailCliente` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enderecoCliente` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCliente` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefoneCliente` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "cep",
DROP COLUMN "email",
DROP COLUMN "endereco",
DROP COLUMN "nome",
DROP COLUMN "telefone",
ADD COLUMN     "cepCliente" TEXT NOT NULL,
ADD COLUMN     "emailCliente" TEXT NOT NULL,
ADD COLUMN     "enderecoCliente" TEXT NOT NULL,
ADD COLUMN     "nomeCliente" TEXT NOT NULL,
ADD COLUMN     "telefoneCliente" TEXT NOT NULL;
