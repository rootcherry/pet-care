const validarCliente = (req, res, next) => {
  const { nomeCliente, emailCliente } = req.body;

  if (!nomeCliente || !emailCliente) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });
  }

  next();
};

export default validarCliente;
