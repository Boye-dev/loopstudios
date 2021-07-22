import React, { useState, useEffect } from "react";

const Creation = (props) => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
  }, [size]);

  const { imgUrl, imgUrlSmall, title } = props.create;
  return (
    <>
      <div className="create-things">
        {size < 1024 ? (
          <img className="create-img" src={imgUrlSmall} />
        ) : (
          <img className="create-img" src={imgUrl} />
        )}
        <p className="title-create">{title}</p>
      </div>
    </>
  );
};
export default Creation;
