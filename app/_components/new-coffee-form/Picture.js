import { useState } from "react";
import { ImageInput } from "../Inputs";
import Image from "next/image";
import Tag from "../Tag";
import { resizeImage } from "../../_helpers/resizeImage";

function Picture({ coffee, updateData, update, image }) {
  const [imagePreview, setImagePreview] = useState(
    image
      ? image
      : "https://firebasestorage.googleapis.com/v0/b/my-home-d1851.appspot.com/o/coffee%2Fcoffee_pouch_matt_black.png?alt=media&token=0d8fcb20-ccf0-4440-a018-2ee6522215fd"
  );

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const resizedBlob = await resizeImage(file, 800, 1, 0.9); // square ratio

      updateData("image", resizedBlob);

      const previewUrl = URL.createObjectURL(resizedBlob);
      setImagePreview(previewUrl);
    } catch (error) {
      console.error("Image resizing failed:", error);
    }
  };

  return (
    <div className="h-[550px] xl:h-auto w-[100%] bg-gradient-1 relative p-10 overflow-hidden flex flex-col justify-center items-center">
      {coffee.caffeine && (
        <Tag
          color={coffee.caffeine}
          text={coffee.caffeine}
          addClass="absolute xl:right-[300px] xl:bottom-[100px] right-[55px] bottom-[120px]"
        />
      )}
      <Image
        src={update ? coffee.image : imagePreview}
        alt={coffee.coffeeName ? coffee.coffeeName : "name"}
        width="400"
        height="400"
        className="object-cover rounded-full p-2 bg-primary-50"
      />
      <ImageInput onChange={(e) => handleImageChange(e)} addClass="m-[-20px]" />
    </div>
  );
}

export default Picture;
