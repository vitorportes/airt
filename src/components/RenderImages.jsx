import React from "react";

const RenderImages = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((image) => <Card id={image._id} {...image} />);
  }

  return (
    <h2 className='mt-5 font-bold text-[#6469ff] text-xl uppercase'>{title}</h2>
  );
};

export default RenderImages;
