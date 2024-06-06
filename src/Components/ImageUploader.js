import React, { useState } from "react";

const ImageUploader = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const uploadedImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  return (
    <div className="my-4">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        className="py-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        {images.map((image, index) => (
          <div key={index} className="w-full h-48 overflow-hidden">
            <img
              src={image}
              alt={`uploaded-${index}`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
