import PontoSchema from "./src/Schemas/PontoSchema";
import ImageSchema from "./src/Schemas/ImageSchema";

const Realm = require("realm");
const app = new Realm.App({ id: "ponto-ksymi" });

module.exports = async () => {
  await app.logIn(new Realm.Credentials.anonymous());
  return await Realm.open({
    schema: [PontoSchema, ImageSchema],
    sync: {
      user: app.currentUser,
      partitionValue: "PUBLIC",
    },
  });
};

run().catch((err) => {
  console.error("Failed to open realm:", err);
});
