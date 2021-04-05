export default PontoSchema = {
  name: "Ponto",
  primaryKey: "id",
  properties: {
    id: { type: "string", indexed: true },
    latitude: { type: "string" },
    longitude: { type: "string" },
    image: { type: "Image?" },
    date: { type: "date" },
    observation: { type: "string?" },
    isSync: { type: "bool" },
  },
};
