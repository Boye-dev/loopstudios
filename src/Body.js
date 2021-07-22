import React from "react";
import interactive from "./images/desktop/image-interactive.jpg";
import Creation from "./Creation";
import creations from "./creations";
import DeepEarth from "./images/desktop/image-deep-earth.jpg";
const Body = () => {
  return (
    <>
      <div className="container-body">
        <div className="img-inter">
          <img src={interactive} className="inter-ract" alt="" />
        </div>
        <div className="cover-txt">
          <p className="leader"> The leader in interactive VR</p>
          <p className="founded">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      <div className="creations">
        <div className="crea">
          <p className="our-create">Our Creations</p>
        </div>
        <div className="but-see">
          <button className="see-all">See all</button>
        </div>
        {creations.map((create) => {
          return <Creation create={create} />;
        })}
        <div className="but-see-small">
          <button className="see-all">See all</button>
        </div>
      </div>
    </>
  );
};
export default Body;
