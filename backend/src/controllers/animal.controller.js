import prisma from "../database.js";

const AnimalController = {
  async registrarAnimal(req, res) {
    try {
      console.log("Dados recebidos", req.body);

      const { nome, idade, sexo, especieId, clienteId } = req.body;

      const novoAnimal = await prisma.animal.create({
        data: {
          nome,
          idade,
          sexo,
          especieId,
          clienteId,
        },
      });

      res.status(201).json(novoAnimal);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Ocorreu um erro ao registrar o animal." });
    }
  },

  async listarAnimais(req, res) {
    try {
      const animais = await prisma.animal.findMany({
        include: {
          cliente: {
            // dados do dono(a)
            select: {
              id: true,
              nome: true,
              telefone: true,
            },
          },
          especie: {
            // dados da espécie do animal
            select: {
              id: true,
              nome: true,
            },
          },
        },
      });

      res.json(animais);
    } catch (error) {
      res.status(500).json({ error: "Ocorreu um erro ao listar os animais." });
    }
  },

  async consultarAnimal(req, res) {
    try {
      const { id } = req.params;
      const animal = await prisma.animal.findUnique({
        where: { id: Number(id) },
        include: { cliente: true, especie: true },
      });

      if (!animal) {
        return res.status(400).json({ error: "Animal não foi encontrado." });
      }

      res.json(animal);
    } catch (error) {
      res.status(500).json({ error: "Ocorreu um erro ao consultar o animal." });
    }
  },

  async atualizarAnimal(req, res) {
    try {
      const { id } = req.params.id;
      const { nome, idade, sexo, especieId, clienteId } = req.body;

      const animalAtualizado = await prisma.animal.update({
        where: { id: Number(id) },
        data: { nome, idade, sexo, especieId, clienteId },
      });

      res.json(animalAtualizado);
    } catch (error) {
      res.status(500).json({ error: "Ocorreu um erro ao atualizar o animal." });
    }
  },

  async deletarAnimal(req, res) {
    try {
      const { id } = req.params;

      await prisma.animal.delete({ where: { id: Number(id) } });

      res.json({ message: "Animal excluído com sucesso." });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Ocorreu um erro ao deletar o animal." });
    }
  },
};

export default AnimalController;
