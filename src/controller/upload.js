import cloudinary from "../config/cloudinaryConfig.js";

export const uploadImages = async (req, res) => {
  try {
    const file = req.file.path;
    const image = await cloudinary.uploader.upload(file);
    console.log("image", image);

    return res.status(200).json({
      message: "upload file thành công",
      response: {
        url: image.secure_url,
        publicid: image.public_id,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "upload file không thành công" });
  }
};
