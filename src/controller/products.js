import Product from "../model/products.js";

let messsageSucces = "Thực hiện thành công";
let messsageErorr = "Thực hiện không thành công";

export const createProduct = async (req, res) => {
  try {
    const create = await new Product(req.body).save();
    return res.status(200).json({ message: messsageSucces, response: create });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: messsageErorr });
  }
};

export const getProduct = async (req, res) => {
  try {
    const get = await Product.find().sort({ createdAt: -1 }).exec();
    return res.status(200).json({ message: messsageSucces, response: get });
  } catch (error) {
    res.status(200).json({ message: messsageErorr });
  }
};

export const read = async (req, res) => {
  try {
    const _id = req.params.id;
    const get = await Product.findById(_id).exec();
    return res.status(200).json({ message: messsageSucces, response: get });
  } catch (error) {
    res.status(200).json({ message: messsageErorr });
  }
};

export const updateProduct = async (req, res) => {
  const _id = req.params.id;
  try {
    const update = await Product.findByIdAndUpdate({ _id }, req.body).exec();
    return res.status(200).json({ message: messsageSucces, response: update });
  } catch (error) {
    res.status(200).json({ message: messsageErorr });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const _id = req.params.id;
    const remove = await Product.findByIdAndDelete({ _id }).exec();
    return res.status(200).json({
      message: messsageSucces,
      response: remove,
    });
  } catch (error) {
    res.status(500).json({ message: messsageErorr });
  }
};
