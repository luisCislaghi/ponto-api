const PontoController = require("../Controllers/PontoController");

module.exports = (app) => {
  app.post("/ponto", PontoController.post);
  app.put("/ponto/:id", PontoController.put);
  app.delete("/ponto/:id", PontoController.delete);
  app.get("/pontos", PontoController.get);
  app.get("/ponto/:id", PontoController.getById);
};
