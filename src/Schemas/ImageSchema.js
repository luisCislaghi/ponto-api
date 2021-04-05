export default ImageSchema = {
  name: "Image",
  primaryKey: "id",
  properties: {
    id: { type: "string", indexed: true },
    src: { type: "string" },
  },
};
