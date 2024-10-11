import React from "react";
import CustomBtn from "../shared/customBtn";

const ServiceBannar = () => {
  return (
    <div
      className="hero h-[500px]  text-start grid rounded-xl "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/wh7t3N3/555.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
      <div className="hero-content text-neutral-content grid">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="relative bottom-0">
          <CustomBtn  title="Get Offer" color="FF3811"></CustomBtn>
        </div>
      </div>

    </div>
  );
};

export default ServiceBannar;
