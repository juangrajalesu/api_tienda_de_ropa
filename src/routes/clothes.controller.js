import Clothes from "./Clothes.js";

export const getClothes = async (req, res) => {
  try {
    const clothes = await Clothes.find();
    return res.json(clothes);
  } catch (error) {
    return error;
  }
};

export const createClothes = async (req, res) => {
  try {
    // const clothesFound = await Clothes.findOne({ url: req.body.url });
    // if (clothesFound) {
    //   return res.status(301).json({ message: "The img already exists" });
    // } else {
    const clothes = new Clothes(req.body);
    const savedClothes = await clothes.save();
    return res.json(savedClothes);
    //}
  } catch (error) {
    return error;
  }
};

export const deleteClothes = async (req, res) => {
  try {
    const deletedClothes = await Clothes.findByIdAndDelete(
      req.params.id,
      (err) => {
        if (err)
          return res.status(400).json({
            success: false,
            message: `The clothes with Id ${req.params.id} doesn't exists`,
          });
      }
    );
    return res.json(deletedClothes);
  } catch (error) {
    return error;
  }
};

export const updateClothes = async (req, res) => {
  try {
    const updatedClothes = await Clothes.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err) => {
        if (err)
          return res.status(400).json({
            success: false,
            message: `The clothes with Id ${req.params.id} doesn't exists`,
          });
      }
    );
    return res.json(updatedClothes);
  } catch (error) {
    return error;
  }
};

export const getOneClothes = async (req, res) => {
  try {
    const aClothes = await Clothes.findById(req.params.id, (err) => {
      if (err)
        return res.status(400).json({
          success: false,
          message: `The clothes with Id ${req.params.id} doesn't exists`,
        });
    });
    if (aClothes) return res.json(aClothes);
  } catch (error) {
    return error;
  }
};
