import prisma from "../database.js";

const EspecieController = {
  async registrarEspecie(req, res) {
    try {
      const { nome } = req.body;

      const novaEspecie = await prisma.especie.create({
        data: { nome },
      });

      res.status(201).json(novaEspecie);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "Ocorreu um erro ao registrar a espécie." });
    }
  },

  async listarEspecies(req, res) {
    try {
      const especies = await prisma.especie.findMany();
      res.json(especies);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Ocorreu um erro ao listar as espécies." });
    }
  },

  async consultarEspecie(req, res) {
    try {
      const { id } = req.params;
      const especie = await prisma.especie.findUnique({
        where: { id: Number(id) },
      });

      if (!especie) {
        return res.status(404).json({ error: "Espécie não foi encontrada." });
      }

      res.json(especie);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Ocorreu um erro ao consultar a espécie." });
    }
  },

  async atualizarEspecie(req, res) {
    try {
      const { id } = req.params;
      const { nome } = req.body;

      const especieAtualizada = await prisma.especie.update({
        where: { id: Number(id) },
        data: { nome },
      });

      res.json(especieAtualizada);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Ocorreu um erro ao atualizar a espécie." });
    }
  },

  async deletarEspecie(req, res) {
    try {
      const { id } = req.params;

      await prisma.especie.delete({
        where: { id: Number(id) },
      });

      res.json({ message: "Espécie excluída com sucesso." });
    } catch (error) {
      res.status(500).json({ error: "Ocorreu um erro ao deletar a espécie." });
    }
  },
};

export default EspecieController;
