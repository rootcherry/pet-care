import prisma from "../database.js";

const ClienteController = {
  async registrarCliente(req, res) {
    try {
      const {
        nomeCliente,
        enderecoCliente,
        cepCliente,
        telefoneCliente,
        emailCliente,
      } = req.body;

      const novoCliente = await prisma.cliente.create({
        data: {
          nomeCliente,
          enderecoCliente,
          cepCliente,
          telefoneCliente,
          emailCliente,
        },
      });

      res.status(201).json(novoCliente);
    } catch (error) {
      res.status(500).json({ error: "Erro ao registrar cliente" });
    }
  },

  async listarClientes(req, res) {
    try {
      const clientes = await prisma.cliente.findMany();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: "Erro ao listar clientes" });
    }
  },

  async consultarCliente(req, res) {
    try {
      const { id } = req.params;
      const cliente = await prisma.cliente.findUnique({
        where: { id: Number(id) },
      });

      if (!cliente)
        return res.status(404).json({ error: "Cliente não encontrado" });

      res.json(cliente);
    } catch (error) {
      res.status(500).json({ error: "Erro ao consultar cliente" });
    }
  },

  async atualizarCliente(req, res) {
    try {
      const { id } = req.params;
      const {
        nomeCliente,
        enderecoCliente,
        cepCliente,
        telefoneCliente,
        emailCliente,
      } = req.body;

      const clienteAtualizado = await prisma.cliente.update({
        where: { id: Number(id) },
        data: {
          nomeCliente,
          enderecoCliente,
          cepCliente,
          telefoneCliente,
          emailCliente,
        },
      });

      res.json(clienteAtualizado);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar cliente" });
    }
  },

  async deletarCliente(req, res) {
    try {
      const { id } = req.params;

      await prisma.cliente.delete({ where: { id: Number(id) } });

      res.json({ message: "Cliente deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar cliente" });
    }
  },
};

export default ClienteController;
