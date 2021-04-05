const realm = require("../Services/database")();

exports.post = (req, res, next) => {
  try {
    realm.write(() => {
      ponto = realm.create("Ponto", req.body);
    });
    res.status(200).send();
  } catch (error) {
    res.status(500).send();
  }
};

exports.put = (req, res, next) => {
  try {
    realm.write(() => {
      const ponto = realm.objectForPrimaryKey("Ponto", req.params.id);
      ponto = { ...req.body };
    });
    res.status(200).send();
  } catch (error) {
    res.status(500).send();
  }
};

exports.delete = (req, res, next) => {
  try {
    realm.write(() => {
      const ponto = realm.objectForPrimaryKey("Ponto", req.params.id);
      realm.delete(ponto);
    });
    res.status(200).send();
  } catch (error) {
    res.status(500).send();
  }
};

exports.get = (req, res, next) => {
  try {
    const pontos = realm.object("Ponto");
    res.status(200).send(pontos);
  } catch (error) {
    res.status(500).send();
  }
};

exports.getById = (req, res, next) => {
  try {
    const ponto = realm.objectForPrimaryKey("Ponto", req.params.id);
    res.status(200).send(ponto);
  } catch (error) {
    res.status(500).send();
  }
};
