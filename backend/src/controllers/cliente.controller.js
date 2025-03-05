import prisma from "../database.js";

const ClienteController = {
  async registrarCliente(req, res) {
    try {
      console.log("Dados recebidos:", req.body);

      const { nome, endereco, cep, telefone, email } = req.body;

      const novoCliente = await prisma.cliente.create({
        data: {
          nome,
          endereco,
          cep,
          telefone,
          email,
        },
      });

      res.status(201).json(novoCliente);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Ocorreu um erro ao registrar cliente." });
    }
  },

  async listarClientes(req, res) {
    try {
      const clientes = await prisma.cliente.findMany();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: "Ocorreu um erro ao listar os clientes." });
    }
  },

  async consultarCliente(req, res) {
    try {
      const { id } = req.params;
      const cliente = await prisma.cliente.findUnique({
        where: { id: Number(id) },
      });

      if (!cliente)
        return res.status(404).json({ error: "Cliente não foi encontrado." });

      res.json(cliente);
    } catch (error) {
      res.status(500).json({ error: "Erro ao consultar os dados do cliente." });
    }
  },

  async atualizarCliente(req, res) {
    try {
      const { id } = req.params;
      const { nome, endereco, cep, telefone, email } = req.body;

      const clienteAtualizado = await prisma.cliente.update({
        where: { id: Number(id) },
        data: {
          nome,
          endereco,
          cep,
          telefone,
          email,
        },
      });

      res.json(clienteAtualizado);
    } catch (error) {
      res.status(500).json({ error: "Ocorreu um erro ao atualizar cliente." });
    }
  },

  async deletarCliente(req, res) {
    try {
      const { id } = req.params;

      await prisma.cliente.delete({ where: { id: Number(id) } });

      res.json({ message: "Cliente excluído com sucesso." });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Ocorreu um erro ao deletar o cliente." });
    }
  },
};

export default ClienteController;
