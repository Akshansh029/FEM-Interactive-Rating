import React, { useState } from "react";
import Icon from "../../assets/images/icon-star.svg";
import Illustration from "../../assets/images/illustration-thank-you.svg";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [submit, setSubmit] = useState(false);

  return (
    <>
      <article
        id="rating-card"
        className={`w-[350px] sm:w-[400px] ${
          submit ? "hidden" : "flex"
        } flex-col gap-7 p-6 bg-gradient-to-b from-[#232a33] to-[#171d26] rounded-3xl none mx-6`}
      >
        <div className="p-4 bg-[#262f38] rounded-full w-fit">
          <img src={Icon} alt="star" className="" />
        </div>
        <div className="title flex flex-col gap-3">
          <h1 className="text-2xl font-semibold text-white">How did we do?</h1>
          <p className="text-sm sm:text-base text-mediumGrey font-medium">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <ul className="flex justify-between">
          {["1", "2", "3", "4", "5"].map((star, index) => (
            <button
              className="p-2 sm:p-3 bg-darkBlue rounded-full w-[40px] sm:w-[48px] items-center flex justify-center text-base text-mediumGrey font-semibold cursor-pointer hover:bg-lightGrey hover:text-white focus:bg-primaryOrange focus:text-white focus"
              onClick={() => setRating(star)}
              key={index}
            >
              {star}
            </button>
          ))}
        </ul>
        <button
          className="bg-primaryOrange py-3 rounded-3xl text-white uppercase text-sm flex justify-center items-center font-normal cursor-pointer focus:bg-white focus:font-medium focus:text-primaryOrange hover:bg-orange-600"
          onClick={() => {
            console.log(rating);
            setSubmit(rating === null ? false : true);
          }}
        >
          Submit
        </button>
      </article>
      <article
        id="thanks-card"
        className={`w-[350px] sm:w-[400px] ${
          submit ? "flex" : "hidden"
        } m-6 flex-col gap-7 p-8 bg-gradient-to-b from-[#232a33] to-[#171d26] rounded-3xl`}
      >
        <div className="m-auto">
          <img src={Illustration} alt="star" />
        </div>
        <div className="bg-[#262f38] flex items-center justify-center py-[6px] px-4 w-fit m-auto rounded-full">
          <p className="text-primaryOrange text-[15px] sm:text-[12px] font-normal ">
            You selected {rating} out of 5
          </p>
        </div>
        <div className="title flex flex-col gap-3 text-center">
          <h1 className="text-2xl font-semibold text-white">Thank you</h1>
          <p className="text-sm sm:text-base text-mediumGrey font-medium">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </article>
    </>
  );
};

export default Rating;
