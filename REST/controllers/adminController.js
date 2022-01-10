const Product = require("../../mongo/models/product");

const addProduct = async (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const image = req.body.image;

  const product = new Product({
    userId: req.user,
    title: title,
    price: price,
    description: description,
    image: image,
  });

  await product
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {addProduct};
